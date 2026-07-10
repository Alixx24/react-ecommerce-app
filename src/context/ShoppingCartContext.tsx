import { createContext, useState, ReactNode, useContext, useCallback, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCartContext must be used within a ShoppingCartProvider");
  }
  return context;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return [];
  });

  // store in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item: CartItem) => {
    // validation
    if (!item || item.id <= 0 || !item.name?.trim() || item.price < 0 || item.quantity < 1) {
      console.warn("Invalid item attempted to add:", item);
      return;
    }

    setCartItems((prev) => {
      // limitaion
      if (prev.length >= 100) {
        console.warn("Cart limit reached (max 100 items)");
        return prev;
      }

      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // limitaion 
        if (existing.quantity >= 99) {
          console.warn("Maximum quantity per item reached (99)");
          return prev;
        }
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    if (id <= 0) {
      console.warn("Invalid item id:", id);
      return;
    }
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
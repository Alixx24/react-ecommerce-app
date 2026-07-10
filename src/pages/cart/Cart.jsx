import Button from "../../components/button/Button";
import Container from "../../components/Container/container";
import CartItem from "../../components/cartItem/CartItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
    const { cartItems } = ShoppingCartContext();

    return (
        <>
            <Container>
                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className="bg-gray-100 rounded p-6">
                    <p className="text-right">100: total amount</p>
                    <p className="text-right">800: total amount</p>
                    <p className="text-right">600: total amount</p>
                </div>

                <Button className="mt-2" variant="success">
                    ثبت سفارش
                </Button>
            </Container>
        </>
    )
}

export default Cart
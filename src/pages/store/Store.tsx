import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { getProducts } from "../../services/api";
import type { Products } from "../../types/server";

function Store() {
    const [products, setProducts] = useState<Products[]>([]);
    
    useEffect(() => { // ✅ Changed to curly braces
        getProducts().then((result) => {
            setProducts(result);
        }).catch((error) => {
            console.error("Failed to fetch products:", error);
        });
    }, []); // ✅ Empty dependency array

    return (
        <div>
            <Container>
                <h1 className="text-right mt-5">Products</h1>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {products.map((item) => ( // ✅ Fixed map syntax
                        <Link 
                            key={item.id} // ✅ Added key
                            to={`/product/${item.id}`} // ✅ Using actual ID
                        >
                            <ProductItem {...item} /> {/* ✅ Passing product data */}
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Store;
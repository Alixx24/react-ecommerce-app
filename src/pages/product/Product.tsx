import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button";
import type { IProducts } from "../../types/server";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProducts>()

    const { cartItems } = ShoppingCartContext();
    return (
        <Container>
            <div className="h-65 shadow t-4">
                <div className="bg-slate-500">
                    <img className="w-24" src="" alt="" />
                </div>
                <span>{product?.title}</span>
                <span>{product?.price}</span>
                <span>{product?.description}</span>

                <div>
                    <Button className="mt-2 py-3" variant="primary" style={{ margin: "25px 60px" }}>
                        Add to card
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Product
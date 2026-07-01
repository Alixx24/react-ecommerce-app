import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button";

function Product() {
    const params = useParams();
    return (
        <Container>
            <div className="h-65 shadow t-4">
                <div className="bg-slate-500">
                    <img className="w-24" src="" alt="" />
                </div>
                <div>
                   <Button variant="primary" style={{ margin: "25px 60px" }}>
    Add to card
</Button>
                </div>
            </div>
        </Container>
    )
}

export default Product
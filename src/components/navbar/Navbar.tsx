import { Link } from "react-router-dom"
import Container from "../container/Container"

function Navbar() {
    return (
        <div className="h-14 border-b shadow flex items-center">
            <Container>
                <div className="flex justify-between px-4">
                    <ul className="flex gap-4">
                        <li className="ml-4"><Link to="/">Home</Link></li>
                        <li className="ml-4"><Link to="/store">Shop</Link></li>
                    </ul>

                    <div className="flex">
                        <Link to="/cart">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded">
                            Cart
                        </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Navbar
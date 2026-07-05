import Button from "../button/Button";

function CartItem() {
    return (
        <div className="flex flex-row-reverse mt-4">
            <img
                className="rounded w-20"
                src=""
                alt=""
            />
            <div className="mr-4">
                <h3>title</h3>
                <div className="mt-2">
                    <Button className="mr-2" variant="primary">+</Button>
                    <span className="mx-2">{2}</span>
                    <Button className="mr-2" variant="primary">-</Button>
                    <Button variant="danger">remove</Button>

                </div>
            </div>

        </div>
    )
}
export default CartItem
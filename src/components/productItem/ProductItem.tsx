import type { Products } from "../../types/server";

type TProductItem = Products;

function ProductItem({ title, price, description, image }: TProductItem) {
    return (
        <div className="shadow border rounded pb-2">
            <img className="rounded-t" src="{image}" alt="" />
            <div className="flex justify-between items-center px-4 mt-2">
                <h2>{title}}</h2>
                <span className="font-bold">{price}$</span>
                <div className="...">
                    <p className="line-clamp-2 text-right text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
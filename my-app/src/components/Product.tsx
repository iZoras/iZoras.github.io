import { IProduct } from "../models";
import OrangeButton from "./button";
import white_cart_img from "../img/cart_img_white.png";
import "../styles/product-style/product.css";
import { useNavigate } from "react-router-dom";

export interface ProductProps {
    product: IProduct;
    addToCart: (id: number) => void;
}

export default function Product({ product, addToCart }: ProductProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product-card?id=${product.id}`);
    };

    const handleAddToCart = () => {
        addToCart(product.id);
    };

    return (
        <div
           
            data-testid={"title"}
            className="product-container flex flex-col shadow p-4"
        >
            <img
                src={product.url}
                alt={product.title}
                className="w-1/3 product-image"
            />
            <span onClick={handleClick} className="font-bold cursor-pointer">
                {product.title}
            </span>
            <div className="flex flex-row">
                <img src="" alt="" />
                <p>
                    {product.amount}
                    {product.typeOfMeasurement}
                </p>
                <br />
                <br />
            </div>

            <p>
                <span className=" text-gray-500">Штрихкод: </span>
                <span className="font-bold">{product.barcode}</span>
            </p>
            <p>
                <span className=" text-gray-500">Производитель: </span>
                <span className="font-bold">{product.manufacturer}</span>
            </p>
            <p>
                <span className=" text-gray-500">Бренд: </span>
                <span className="font-bold">{product.brand}</span>
            </p>
            <p>
                <span className=" text-gray-500">Ключ: </span>
                <span className="font-bold">{product.keywords}</span>
            </p>
            <br />
            <br />
            <div className="flex justify-between items-center ">
                <span className="font-bold">
                    {product.price.sum}
                    {product.price.typeOfCurrency}
                </span>
                <OrangeButton
                    onClick={handleAddToCart}
                    className={"product-btn flex flex-row "}
                >
                    <span data-testid={`click${product.id}`}>В корзину</span>
                    <img src={white_cart_img} alt="" />
                </OrangeButton>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header-style/header.css";
import location_img from "../img/gps_icon.png";
import mail_img from "../img/mail_icon.png";
import logo_img from "../img/logo_img.svg";
import m_glass_input_img from "../img/magn_glass_for_btn.png";
import woman_img from "../img/woman.jpg";
import arrow_img from "../img/arrow.png";
import shopping_cart_img from "../img/shopping_cart_img.png";
import OrangeButton from "./button";
import GreyInput from "./greyInput";

interface HeaderProps {
    title: string;
    cart_price: number;
}

const Header: React.FC<HeaderProps> = ({ title, cart_price }) => {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [priceSum, setPriceSum] = useState(1000);
    const [currency, setCurrency] = useState('₸')
    const [itemsInCart, setItemsInCart] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header">
            {screenSize.width > 1090 && (
                <div className="section-wrapper">
                    <div className="header-section justify-between whitespace-nowrap items-center">
                        <div className="flex gap-10">
                            <div className="flex items-center ">
                                <img
                                    src={location_img}
                                    alt="location_img"
                                    className="mr-4"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold">
                                        г. Кокчетав, ул. Ж. Ташенова 129Б
                                    </span>
                                    <span className="text-slate-600">
                                        (Рынок Восточный)
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img
                                    src={mail_img}
                                    alt="mail_img"
                                    className="mr-4"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold">
                                        opt.sultan@mail.ru
                                    </span>
                                    <span className="text-slate-600">
                                        На связи в любое время
                                    </span>
                                </div>
                            </div>
                        </div>

                        <nav className="flex gap-2">
                            <Link to={""}>О компании</Link>
                            <Link to={""}>Доставка и оплата</Link>
                            <Link to={""}>Возврат</Link>
                            <Link to={""}>Контакты</Link>
                        </nav>
                    </div>
                </div>
            )}

            <div className="section-wrapper border border-b-gray-300 border-t-gray-300">
                <div className="header-section justify-around">
                    <img className="mr-8 ml-0" src={logo_img} alt="logo" />
                    <OrangeButton className="">
                        <span className="text-white">Каталог</span>
                        <div className="button-pick">
                            <span className="square_1"></span>
                            <span className="square_2"></span>
                            <span className="square_3"></span>
                            <span className="square_4"></span>
                        </div>
                    </OrangeButton>

                    <GreyInput />

                    <div className="flex whitespace-nowrap items-center gap-2">
                        <div className="flex flex-col items-end">
                            <span className="font-bold">
                                +7 (777) 490-00-91
                            </span>
                            <span className="text-sm text-gray-500">
                                время работы: 9:00-20:00
                            </span>
                            <span className="text-sm text-gray-500 underline">
                                Заказать звонок
                            </span>
                        </div>
                        <img className="rounded-full" src={woman_img} alt="" />
                    </div>

                    <OrangeButton className="">
                        <span className="text-white">Прайс-лист</span>
                        <img src={arrow_img} alt="" />
                    </OrangeButton>

                    <div className="flex items-center mr-0">
                        <div className=" relative">
                            <img src={shopping_cart_img} alt="" />
                            <div className="absolute bg-orange-500 text-white notification">{itemsInCart}</div>
                        </div>
                        <div className="flex flex-col">
                            <span>Корзина</span>
                            <span>{priceSum}{' ' + currency}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

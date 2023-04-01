import * as React from "react";
import "../styles/footer-styles/footer-styles.css";
import logo_img from "../img/footer_logo_img.svg";

import arrow from "../img/arrow_img.svg";
import OrangeButton from "./button";
import telegram_img from "../img/telegram.svg";
import whatsap_img from "../img/whastap.svg";

import another_arrow from "../img/arrow.png";

export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
    public render() {
        return (
            <div className="footer-container">
                <div className="footer-wrap flex">
                    <div className="first-col flex flex-col my-auto">
                        <div className="flex flex-col">
                            <div className="logo-img">
                                <img src={logo_img} alt="" />
                            </div>
                            <p>
                                Компания «Султан» — снабжаем
                                <br /> розничные магазины товарами <br />
                                "под ключ" в Кокчетаве и Акмолинской <br />
                                области
                                <br />
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Подпишись на скидки и акции</p>

                            <div className="flex input-wrap rounded-full">
                                <input
                                    className=" bg-transparent"
                                    type="text"
                                    placeholder="Введите ваш E-mail"
                                />
                                <OrangeButton className="arrow-btn">
                                    <img src={arrow} alt="" />
                                </OrangeButton>
                            </div>
                        </div>
                    </div>
                    <div className="second-col flex flex-col">
                        <h1 className="footer-headline">Меню сайта:</h1>
                        <ul>
                            <li className="white-text">О компании</li>
                            <li className="white-text">Доставка и оплата</li>
                            <li className="white-text">Возврат</li>
                            <li className="white-text">Контакты</li>
                        </ul>
                    </div>
                    <div className="third-col flex flex-col">
                        <h1 className="footer-headline">Категории:</h1>
                        <ul>
                            <li className="white-text">Бытовая химия</li>
                            <li className="white-text">Косметика и гигиена</li>
                            <li className="white-text">
                                Товары для детей и мам
                            </li>
                            <li className="white-text">Посуда</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="footer-headline">Скачать прайс-лист:</h1>
                        <OrangeButton className="price-list-btn">
                            <span className="btn-text">Прайс-лист</span>
                            <img src={another_arrow} alt="" />
                        </OrangeButton>
                        <span>Связь в мессенджерах:</span>
                        <div className="flex social-btn-wrap">
                            <img src={whatsap_img} alt="" />
                            <img src={telegram_img} alt="" />
                        </div>
                    </div>

                    <div>
                        <h1 className="footer-headline">Контакты:</h1>

                        <div>
                            <h1 className="footer-headline">
                                +7 (777) 490-00-91
                            </h1>
                            <ul>
                                <li>время работы: 9:00-20:00</li>
                                <li className="underline">Заказать звонок</li>
                            </ul>
                        </div>
                        <div>
                            <span className="footer-headline">
                                opt.sultan@mail.ru{" "}
                            </span>
                            <br />
                            <span>На связи в любое время</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

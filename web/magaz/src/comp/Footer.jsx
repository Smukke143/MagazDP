import React from "react";
import VisaIco from "../assets/visa.svg";
import MasterCardIco from "../assets/mastercard.svg";
import VkIco from "../assets/vk.svg";
import TgIco from "../assets/tg.svg";

export const Footer = () =>{
    return (
        <footer>
            <div className="Footer__content">
                <div className="Footer__payment-system">
                    <img src={VisaIco} alt="visa" />
                    <img src={MasterCardIco} alt="Master card" />
                    <p>© 2022, Anthony Blessed</p>
                </div>
                <div className="Footer__contacts">
                    <p>Контакты:</p>
                    <img src={VkIco} alt="VK" />
                    <img src={TgIco} alt="Telegram" />
                </div>
                <a href="/FAQ">Как заказать доставку по Москве?</a>
            </div>
        </footer>
    )
}
import React from "react";
import Logo from "../assets/mainLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileText  } from "@fortawesome/free-regular-svg-icons"
import { Nav } from "./Nav";

export const Header = () => {
    return (
        <>
            <header>
                <button className="Header__btn"><FontAwesomeIcon className="btn__ico" icon={faUser}/> Личный кабинет</button>
                <a href="/"><img className="Header__logo" src={Logo} alt="logo" /></a>
                <button className="Header__btn">Корзина<FontAwesomeIcon className="btn__ico" icon={faFileText} /></button>
            <Nav />
            </header>
        </>
    );
};

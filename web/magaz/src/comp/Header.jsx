import React from "react";
import Logo from "../assets/mainLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileText  } from "@fortawesome/free-regular-svg-icons"
export const Header = () => {
    return (
        <>
            <header>
                <a href="/">
                    <button className="Header__btn"><FontAwesomeIcon className="btn__ico" icon={faUser}/>
                        Личный кабинет
                    </button>
                </a>
                <a href="/"><img className="Header__logo" src={Logo} alt="logo" /></a>
                <a href="/Cart">
                    <button className="Header__btn">
                        Корзина<FontAwesomeIcon className="btn__ico" icon={faFileText} />
                    </button>
                </a>
            </header>
        </>
    );
};

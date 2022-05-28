import React from "react";
export const Cart = () => {
    return(
        <div className="Cart__Wrapper">
            <h1>Корзина</h1>
            <table className="Cart__Conteiner">
                <tr className="Cart__Header">
                    <th colspan="2">ТОВАР</th>
                    <th>ЦЕНА</th>
                    <th>КОЛ-ВО</th>
                    <th>ИТОГ</th>
                </tr>
                <tr className="Cart__Content">
                    <td colspan="1">
                        <img src={require("../assets/12.png")}/>
                    </td>
                    <td>Худака от Антохи</td>
                    <td className="Price">2500</td>
                    <td>1</td>
                    <td className="Price">2500</td>
                </tr>
            </table>
        </div>
    )
};

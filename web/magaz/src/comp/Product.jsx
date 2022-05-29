import React from "react";
import { useForm } from "react-hook-form";

export const Product = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="Product__Wrapper">
            <div className="Product__Content">
                <div className="Img__Wrapper">
                    <img src={require("../assets/12.png")} />
                </div>
                <div className="Product__Caption">
                    <h2>ANTHONY BELLESED Hoodie Skull Kiss</h2>
                    <span className="Price">9000</span>
                    <ul className="Product__Materials">
                        <li>Рисунок: Принт</li>
                        <li>Плотность ткани: 460гр/м</li>
                        <li>Состав: 100% хлопок</li>
                    </ul>
                    <form className="Product__Form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Выберите размер:</label>
                        <input {...register("size")} 
                            type="radio"
                            name="size"
                            value="S"
                        />
                        <input {...register("size")} 
                            type="radio"
                            name="size"
                            value="M"
                        />
                        <input {...register("size")} 
                            type="radio"
                            name="size" 
                            value="L"
                        />
                        <input {...register("size")} 
                            type="radio"
                            name="size" 
                            value="XL"
                        />
                        <input type="button" value="В Корзину"/>
                    </form>
                </div>
                    <div className="Product__ID">
                        <span>артикул: AB202245</span>
                    </div>
            </div>
        </div>
    )
}
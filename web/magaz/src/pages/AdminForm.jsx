import React from "react";
import { useForm } from "react-hook-form";

export const AdminForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="Admin__Wrapper" onSubmit={handleSubmit(onSubmit)}>
            <form className="Admin__Form">
                <label>Admin panel</label>
                {errors.title && <span>{errors.title?.message}</span>}
                <input 
                    type="text"
                    name="title"
                    placeholder="Название товара*"
                    {...register("title",
                    { 
                        required: "Введите название товара!!!", 
                        minLength: {
                            value: 4,
                            message: "Кол-во символов меньше 4"
                        }   
                })}/>
                {errors.desc && <span>{errors.desc?.message}</span>}
                <input 
                    type="text"
                    name="desc"
                    placeholder="Описание товара*"
                    {...register("desc",
                    { 
                        required: "Введите описание товара!!!", 
                        minLength: {
                            value: 10,
                            message: "Кол-во символов меньше 10"
                        }   
                })}/>
                {errors.price && <span>{errors.price?.message}</span>}
                <input 
                    type="number"
                    name="price"
                    placeholder="Цена товара*"
                    {...register("price",
                    { 
                        required: "Введите цену на товар!!!", 
                })}/>
                {errors.material && <span>{errors.material?.message}</span>}
                <input 
                    type="text"
                    name="material"
                    placeholder="Матерьял товара*"
                    {...register("material",
                    { 
                        required: "Введите матерьял у торара!!", 
                })}/>
                {errors.printType && <span>{errors.printType?.message}</span>}
                <input 
                    type="text"
                    name="printType"
                    placeholder="Тип принта*"
                    {...register("printType",
                    { 
                        required: "Введите тип принта у торара!!", 
                })}/>
                {errors.plotnostTkani && <span>{errors.plotnostTkani?.message}</span>}
                <input 
                    type="text"
                    name="plotnostTkani"
                    placeholder="Плотность ткани*"
                    {...register("plotnostTkani",
                    { 
                        required: "Введите плотность ткани у торара!!", 
                })}/>
                <input 
                    type="text"
                    name="image"
                    placeholder="Введите ссылку на изображение(URL)*"
                    {...register("image",
                    { 
                        required: "Введите ссылку на изображение торара!!", 
                })}/>
                <input type="submit"/>
            </form>
        </div>
    )
};

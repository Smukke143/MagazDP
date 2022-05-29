import React from "react";
import { useForm } from "react-hook-form";

export const Admin = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className="Admin__Wrapper">
            <form className="Admin__Form" onSubmit={handleSubmit(onSubmit)}>
            <label>Admin authorization</label>
                <input 
                    {...register("email", 
                    { 
                        required: "Введите Почту!", 
                        minLength: {
                            value: 5,
                            message: "Кол-во символов меньше 5"
                        }
                    })} 
                    placeholder="Email*"
                    name="email"
                    />
                    <span>{errors.email?.message}</span>
                <input 
                    {...register("password", 
                    { 
                        required: "Введите пароль!",
                        minLength: {
                            value: 5,
                            message: "Кол-во символов меньше 5"
                        }
                    })} 
                    type="password" 
                    placeholder="Password*"
                    name="password"
                />
                <span>{errors.password?.message}</span>
                <input type="submit" text="Войти"/>
            </form>
        </div>
    )
};

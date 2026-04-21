
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/inputtext";
import { InputPassword } from "../components/ui/inputpassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";


type FormData = {
    email: string;
    password: string;
}

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus diisi"),
})

export default function LoginForm(){
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
     } = useForm<FormData>({
        resolver: zodResolver(schema)
     });
 
    
    
    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message} 
                />

                <div>
                    <Button label="Login" variant="primary"/>
                </div>
            </form>
        </div>
    );
};
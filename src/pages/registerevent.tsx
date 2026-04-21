
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/inputtext";
import { InputPassword } from "../components/ui/inputpassword";
import { TextArea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Import } from "lucide-react";


type FormData = {
    email: string;
    nama: string;
    password: string;
    password_confirm: string;
    bio: string;
    event: string;
}

const schema = z.object({
    nama: z.string().min(1, "nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus diisi"),
    password_confirm: z.string().min(8, "Password harus diisi"),
    bio: z.string().min(1, "Bio Harus diisi!"),
    event: z.string().min(1, "Event Harus diisi!"),
})

export default function RegisterForm(){
     const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm<FormData>({
       resolver : zodResolver(schema)

    });
 
    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <InputText
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />
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
                <InputPassword
                    label="Password_confirm"
                    nama="password_confirm"
                    register={register}
                    error={errors.password_confirm?.message} 
                />

                <TextArea 
                    label="Bio"
                    name="bio"
                    register={register}
                    error={errors.bio?.message}
                />

                <Select
                    label="Event"
                    name="event"
                    register={register}
                    error={errors.event?.message}
                    options={[
                        { label: "Flash Sale ", value: "Flash Sale " },
                        { label: "Diskon 50%", value: "Diskon 50%" },
                    ]}
                />

                <div>
                    <Button type="submit" label="Daftar"/>
                </div>
            </form>
        </div>
    );
};
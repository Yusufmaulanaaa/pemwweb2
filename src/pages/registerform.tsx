import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/inputtext";
import { InputPassword } from "../components/ui/inputpassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";

type FormData = {
    email: string;
    nama: string;
    password: string;
    password_confirm: string;
}

// 1. Perbaikan Schema: Tambahkan .refine untuk mencocokkan password [cite: 119, 123]
const schema = z.object({
    nama: z.string().min(1, "nama harus diisi"),
    email: z.string().min(1, "Email harus diisi").email("Format email salah"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirm: z.string().min(8, "Konfirmasi password harus diisi")
}).refine((data) => data.password === data.password_confirm, {
    message: "Password tidak sama",
    path: ["password_confirm"], 
});

export default function RegisterForm() {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log("LOGIN DATA:", data); // Akan muncul di console jika berhasil [cite: 79, 81]
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* 2. Pastikan props 'name' sesuai dengan yang diharapkan komponen Atom [cite: 134, 139] */}
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
                    label="Password Confirm"
                    nama="password_confirm"
                    register={register}
                    error={errors.password_confirm?.message} 
                />

                <div>
                    {/* 3. WAJIB: Tambahkan type="submit" agar tombol bisa memicu form [cite: 54, 195, 198] */}
                    <Button type="submit" label="Register" variant="primary"/>
                </div>
            </form>
        </div>
    );
}
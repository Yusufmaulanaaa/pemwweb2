import { useState } from "react";

interface InputPasswordProps {
    label: string;
    nama: string; // Saran: Gunakan 'name' agar standar dengan React Hook Form
    error?: string;
    register: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    error,
    register,
}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1"> {/* Tambahkan gap agar label & input berjarak  */}
            <label className="font-medium" htmlFor={nama}>
                {label}
            </label>

            <div className="relative">
                <input
                    id={nama}
                    // Tambahkan w-full agar input menjadi panjang 
                    className="border rounded-xl px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type={show ? "text" : "password"}
                    {...register(nama)}
                    placeholder="Masukan Password Anda" // Sesuaikan placeholder
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    // Tambahkan posisi absolute agar tombol Show/Hide ada di dalam input 
                    className="absolute right-2 top-2.5 text-sm text-gray-500 hover:text-gray-700"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Tambahkan warna merah untuk error [cite: 186] */}
        </div>
    );
};
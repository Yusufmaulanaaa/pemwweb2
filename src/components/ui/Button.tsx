interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    type?: "button" | "submit";
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    variant= "primary",
    type= "button",
    isLoading= false,
    className,
}) => {
    const baseStyle = 
    "px-10 py-3 rounded font-medium transition-all deration-200";
    const varianStyle = 
    variant === "primary"
    ? "bg-red-900 text-white hover:bg-rd-700"
    : "border border-red-900 text-red-900 hover:bg-red-100";
    return(
        <button className={`${baseStyle} ${varianStyle} ${className}`}>
            {label}
        </button>
    );
};

export default Button;
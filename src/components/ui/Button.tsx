interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  isLoading = false,
}) => {
  const baseStyle =
    "px-6 py-2 rounded font-medium transition-all duration-200 cursor-pointer";

  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-50";

  return (
    <button
      type={type} // ✅ dipakai
      onClick={onClick}
      disabled={isLoading} // ✅ dipakai
      className={`${baseStyle} ${variantStyle} ${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Loading..." : label} {/* ✅ dipakai */}
    </button>
  );
};

export default Button;
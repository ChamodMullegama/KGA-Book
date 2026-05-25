const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "px-8 py-4 rounded-full font-semibold transition-all text-lg";

  const styles = {
    primary: "bg-blood hover:bg-red-700 text-white glow-red",
    secondary: "border border-white/40 hover:border-white hover:bg-white/5",
    outline: "border-2 border-blood hover:bg-blood hover:text-white"
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
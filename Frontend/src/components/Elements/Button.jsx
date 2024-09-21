const Button = ({
  typeButton = "submit",
  onSubmit,
  onClick,
  children,
  color = "bg-blue-500",
  textColor = "text-white",
  size = "py-2 px-4",
  textSize = "text-lg",
  margin = "mt-5",
  ...props
}) => {
  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      type={typeButton}
      className={`${color} ${margin} ${margin} hover:bg-blue-700 ${textColor} font-bold ${size} rounded focus:outline-none focus:shadow-outline ${textSize}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;

const InputElement = ({
  value,
  type,
  placeholder,
  onChange,
  name,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className="bg-slate-200 border rounded w-full py-2 px-3 text-slate-900 border-none outline-none"
      value={value}
    />
  );
};
export default InputElement;

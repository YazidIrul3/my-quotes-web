const Label = ({ children, ...props }) => {
  return (
    <label className="block text-slate-900 text-sm font-bold mb-2" {...props}>
      {children}
    </label>
  );
};

export default Label;

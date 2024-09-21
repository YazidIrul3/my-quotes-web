import InputElement from "../Elements/Input";
import Label from "../Elements/Label";

const FormInput = ({
  type,
  placeholder,
  name,
  onChange,
  children,
  bgForm,
  ...props
}) => {
  return (
    <div className={`flex flex-col mt-2 py-1 w-full h-full ${bgForm}`}>
      <Label children={children} />
      <InputElement
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default FormInput;

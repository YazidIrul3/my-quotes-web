import Button from "../Elements/Button";
import InputElement from "../Elements/Input";
import Label from "../Elements/Label";
import { IoClose } from "react-icons/io5";
import SelectQuotesCategory from "./SelectQuotesCategory";

const FormPostQuotes = ({
  currentQuotesLength,
  childreen,
  type,
  placeholder,
  onChange,
  name,
  onClose,
  onSubmit,
  value,
  valueSelect,
}) => {
  return (
    <div className="bg-slate-700 min-w-full min-h-full w-full h-full top-0 right-0 left-0 absolute bg-opacity-30">
      <div className=" z-10 flex justify-center items-center min-w-full min-h-full w-full h-full">
        <form
          onSubmit={onSubmit}
          className=" w-96 opacity-100 bg-yellow-500 p-4"
        >
          <div className=" flex flex-row justify-between">
            <Label children={childreen} />
            <p>{`${currentQuotesLength}/150`}</p>
            <div className="text-lg hover:text-red-700" onClick={onClose}>
              <IoClose />
            </div>
          </div>
          <InputElement
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
          />

          <SelectQuotesCategory onChange={onChange} valueSelect={valueSelect} />
          <Button children="Update" typeButton="submit" />
        </form>
      </div>
    </div>
  );
};

export default FormPostQuotes;

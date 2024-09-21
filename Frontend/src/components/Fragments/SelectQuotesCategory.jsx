import quotesCategory from "../../common/quotesCategorys";
import Label from "../Elements/Label";

const SelectQuotesCategory = ({ valueSelect, onChange }) => {
  return (
    <div className="flex flex-col mt-3">
      <Label children={"Category :"} />

      <select
        name="category"
        value={valueSelect}
        onChange={onChange}
        className=" bg-slate-50 p-2"
      >
        {quotesCategory?.map((item, i) => {
          return <option key={i}>{item?.label}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectQuotesCategory;

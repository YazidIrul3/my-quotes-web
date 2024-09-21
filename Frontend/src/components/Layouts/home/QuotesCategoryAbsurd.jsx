import { useEffect, useState } from "react";
import Card from "../../Fragments/Card";
import { Spinner } from "@chakra-ui/react";
import { IoFilter } from "react-icons/io5";

const QuotesCategoryAbsurd = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("A - Z");

  const fetchQuotesCategoryAbsurd = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/quotes/Absurd");

      const dataJson = await data.json();

      setData(dataJson?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;

    setFilter(value);
    console.log(filter);
  };

  useEffect(() => {
    fetchQuotesCategoryAbsurd();
  }, [filter]);

  return (
    <div className="p-4">
      <div className="flex flex-row justify-end mb-2 ">
        <div className="flex justify-center items-center bg-slate-200 p-2 rounded-full">
          <div className=" text-xl">
            <IoFilter />
          </div>
          <select
            name="filter"
            onChange={handleFilter}
            className=" bg-slate-200"
          >
            <option>A - Z</option>
            <option>Z - A</option>
          </select>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3 ">
        {isLoading ? (
          <Spinner />
        ) : (
          data
            ?.sort((a, b) => {
              if (filter === "A - Z") return b?.quotes - a?.quotes;
              if (filter === "Z - A") return a?.quotes - b?.quotes;
            })
            ?.map((item) => <Card key={item?._id} quotes={item} />)
        )}
      </div>
    </div>
  );
};

export default QuotesCategoryAbsurd;

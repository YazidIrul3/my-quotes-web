import { useEffect, useState } from "react";
import FormPostQuotes from "../Fragments/FormPostQuotes";
import Button from "../Elements/Button";
import { useToast } from "@chakra-ui/react";
import CardDashboard from "../Fragments/CardDashboard";

const AddQuotes = () => {
  const [data, setData] = useState({
    quotes: "",
    category: "Love",
  });
  const [formAddQUotes, setFormAddQuotes] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const toast = useToast();

  const handleOnChnage = async (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/quotes", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quotes: data?.quotes,
          category: data?.category,
        }),
      });

      const dataJson = await response.json();

      if (dataJson?.success) {
        toast({
          position: "top",
          title: "Success",
          description: dataJson.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setFormAddQuotes(false);
      }

      if (dataJson?.error) {
        toast({
          position: "top",
          title: "Error",
          description: dataJson.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full">
      <div>
        <Button
          children="Add Product"
          color="bg-slate-900"
          textSize="text-sm"
          size="px-3 py-1"
          onClick={() => setFormAddQuotes(true)}
        />
      </div>

      {formAddQUotes ? (
        <FormPostQuotes
          currentQuotesLength={data?.quotes.length}
          childreen="Quotes:"
          type={"text"}
          placeholder={"Quotes"}
          name={"quotes"}
          onSubmit={handleOnSubmit}
          onChange={handleOnChnage}
          onClose={() => setFormAddQuotes(false)}
        />
      ) : null}
    </div>
  );
};

export default AddQuotes;

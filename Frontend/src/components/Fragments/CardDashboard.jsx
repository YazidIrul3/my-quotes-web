import { useToast } from "@chakra-ui/react";
import moment from "moment/moment";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import FormPostQuotes from "./FormPostQuotes";
import { useState } from "react";

const CardDashboard = ({ quotes, deleteId, editId, fetchData }) => {
  const toast = useToast();
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState({
    quotes: quotes?.quotes,
    category: quotes?.category,
  });

  const handleOnChnage = async (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const deleteQuotes = async (id) => {
    try {
      const data = await fetch("http://localhost:8000/api/quotes/" + id, {
        method: "DELETE",
        credentials: "include",
      });

      const dataJson = await data.json();

      if (dataJson.success) {
        toast({
          position: "top",
          title: "Success",
          description: "Deleted Quotes Succesfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        fetchData();
      }

      if (dataJson.error) {
        toast({
          position: "top",
          title: "Deleted Quotes is Failed",
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

  const handleOnSubmit = async (e, id) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/quotes/" + id, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

        setShowUpdate(false);
        fetchData();
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
    <div className="flex flex-col justify-between gap-5 p-2 max-w-sm rounded-md shadow-blue-600 shadow-md min-h-full">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">My Quotes</h1>
          <div className="flex">
            <div
              className="text-lg p-2 font-bold text-amber-400 rounded-full"
              onClick={() => setShowUpdate(true)}
            >
              <MdModeEditOutline />
            </div>
            <div
              className="text-lg p-2 font-bold text-red-500 rounded-full"
              onClick={() => deleteQuotes(deleteId)}
            >
              <MdDelete />
            </div>
          </div>
        </div>
        <p className="text-sm">{`"${quotes?.quotes}"`}</p>
      </div>

      <div className="flex justify-between">
        <p>{quotes?.category}</p>
        <p>{moment(quotes?.createdAt).format("LL")}</p>
      </div>

      {showUpdate ? (
        <FormPostQuotes
          currentQuotesLength={data?.quotes.length}
          childreen="Quotes:"
          type={"text"}
          placeholder={"Quotes"}
          name={"quotes"}
          onSubmit={(e) => handleOnSubmit(e, editId)}
          onChange={handleOnChnage}
          onClose={() => setShowUpdate(false)}
          value={data?.quotes}
          valueSelect={data?.category}
        />
      ) : null}
    </div>
  );
};

export default CardDashboard;

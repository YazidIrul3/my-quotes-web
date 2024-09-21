import { Spinner, useSafeLayoutEffect, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardDashboard from "../Fragments/CardDashboard";
import FormPostQuotes from "../Fragments/FormPostQuotes";

const MyQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchALlQuotes = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/quotes");

      const dataJson = await data.json();

      setIsLoading(false);

      setQuotes(dataJson?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchALlQuotes();
  }, []);

  return (
    <div className="">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 p-4 mt-5 min-h-full">
        {isLoading ? (
          <Spinner />
        ) : (
          quotes?.map((item) => (
            <CardDashboard
              key={item?._id}
              quotes={item}
              deleteId={item?._id}
              editId={item?._id}
              fetchData={fetchALlQuotes}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyQuotes;

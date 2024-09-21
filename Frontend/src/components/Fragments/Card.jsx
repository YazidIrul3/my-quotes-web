import moment from "moment/moment";

const Card = ({ quotes }) => {
  return (
    <div className="flex flex-col justify-between gap-5 p-2 max-w-sm rounded-md shadow-blue-700 min-h-full shadow-md ">
      <div className=" flex flex-col gap-3">
        <h1 className="font-bold text-lg">My Quotes</h1>
        <p className="text-sm">{`"${quotes?.quotes}"`}</p>
      </div>

      <div className="flex justify-between">
        <p>{quotes?.category}</p>
        <p>{moment(quotes?.createdAt).format("LL")}</p>
      </div>
    </div>
  );
};

export default Card;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AllCategory = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row gap-3 p-4 font-semibold">
      <Link
        to={""}
        className={`w-44 focus:outline-none focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center py-1 px-2 rounded-full ${
          location.pathname === "/home"
            ? "bg-slate-900 text-slate-50"
            : "bg-slate-300 text-slate-900"
        } shadow-lg`}
      >
        All
      </Link>
      <Link
        to={"love"}
        className={`w-44 focus:outline-none focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center py-1 px-2 rounded-full ${
          location.pathname === "/home/love"
            ? "bg-slate-900 text-slate-50"
            : "bg-slate-300 text-slate-900"
        } shadow-lg`}
      >
        Love
      </Link>
      <Link
        to={"religi"}
        className={`w-44 focus:outline-none focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center py-1 px-2 rounded-full ${
          location.pathname === "/home/religi"
            ? "bg-slate-900 text-slate-50"
            : "bg-slate-300 text-slate-900"
        } shadow-lg`}
      >
        Religi
      </Link>
      <Link
        to={"motivation"}
        className={`w-44 focus:outline-none focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center py-1 px-2 rounded-full ${
          location.pathname === "/home/motivation"
            ? "bg-slate-900 text-slate-50"
            : "bg-slate-300 text-slate-900"
        } shadow-lg`}
      >
        Motivation
      </Link>
      <Link
        to={"absurd"}
        className={`w-44 focus:outline-none focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center py-1 px-2 rounded-full ${
          location.pathname === "/home/absurd"
            ? "bg-slate-900 text-slate-50"
            : "bg-slate-300 text-slate-900"
        } shadow-lg`}
      >
        Absurd
      </Link>
    </div>
  );
};

export default AllCategory;

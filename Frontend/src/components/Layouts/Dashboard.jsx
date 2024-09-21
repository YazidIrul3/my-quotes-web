import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashbord = () => {
  const { user } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className=" gap-3 flex flex-row h-screen w-screen">
      <div className="xl:w-2/12 lg:w-2/12 w-4/12 bg-blue-500 gap-5 flex flex-col justify-start py-10 ">
        <div className="mx-auto p-5 ">
          <div className="text-6xl">
            <CgProfile />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-5 text-center xl:text-lg lg:text-lg text-sm">
          <Link
            to={"addquotes"}
            className=" text-slate-50 w-full hover:bg-blue-700 px-3 py-1 font-bold"
          >
            Add Quotes
          </Link>
          <Link
            to={"myquotes"}
            className=" w-full text-slate-50 hover:bg-blue-700 px-3 py-1 font-bold"
          >
            My Quotes
          </Link>
          <Link
            to={"myquotes"}
            className=" w-full text-slate-50 hover:bg-blue-700 px-3 py-1 font-bold"
          >
            My Colection
          </Link>
        </div>
      </div>

      <main className=" h-screen w-full scroll-smooth overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashbord;

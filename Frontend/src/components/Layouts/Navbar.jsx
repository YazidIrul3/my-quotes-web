import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { logout } from "../../store/authSlice";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [dashboard, setDashboard] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:8000/api/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dataJson = await data.json();

      if (dataJson.success) {
        dispatch(logout(null));

        navigate("/");
        toast({
          position: "top",
          title: "Success",
          description: "Success For Logout",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }

      if (dataJson.error) {
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
    <nav className="flex relative justify-between items-center text-slate-900 w-screen py-4 px-4">
      <div className=" font-extrabold flex items-center text-lg">
        <h1>MY QUOTES</h1>
      </div>

      <div
        className="flex gap-11 items-center"
        onClick={() => setDashboard(!dashboard)}
      >
        <div className="text-3xl relative">
          {user !== null && <CgProfile />}
        </div>

        {dashboard && (
          <Link
            to={"/dashboard"}
            className="absolute -bottom-4 right-16 -translate-x-1/2 bg-slate-900 px-2 font-bold text-slate-50"
          >
            Dashbord
          </Link>
        )}

        <button
          onClick={handleLogout}
          className={`bg-blue-500 $ hover:bg-blue-700 text-slate-50 font-bold px-3 py-1 rounded focus:outline-none focus:shadow-outline`}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

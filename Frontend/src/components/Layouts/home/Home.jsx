import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AllCategory from "./AllCategory";

const Home = () => {
  const { user } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  return (
    <section>
      <Navbar />

      <div className="container flex flex-col justify-center mx-auto">
        <AllCategory />
        <Outlet />
      </div>
    </section>
  );
};

export default Home;

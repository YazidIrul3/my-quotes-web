import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import FormInput from "../Fragments/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { login } from "../../store/authSlice";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "./Navbar";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [displayPassword, setDisplayPasswrod] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // const { dataJson } = usePostUser(data, "login");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchData = await fetch("http://localhost:8000/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const dataJson = await fetchData.json();
      setIsLoading(true);

      if (dataJson?.success) {
        dispatch(login(dataJson));
        toast({
          position: "top",
          title: "Success",
          description: dataJson.message,
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        navigate("/home");
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
    <section>
      <div className="mt-10 flex flex-col justify-center mx-auto w-80 p-2 bg-slate-50 shadow-md">
        <h1 className=" text-blue-400 font-bold text-3xl mx-auto">Login</h1>

        <form onSubmit={handleOnSubmit} className=" flex flex-col">
          <FormInput
            children="Username :"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleOnChnage}
            required
          />

          <div className="relative">
            <FormInput
              type={displayPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              onChange={handleOnChnage}
              children="password :"
              required
            />

            <div
              className="absolute text-lg right-2 top-1/2 translate-y-1/2"
              onClick={() => setDisplayPasswrod(!displayPassword)}
            >
              {displayPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </div>
          </div>

          <Button
            typeButton="submit"
            children={isLoading ? <Spinner /> : "Login"}
          />
          <p className="text-center text-sm mt-1">
            If you don't have an account
            <Link to="/signup" className="text-blue-400 font-semibold ml-1">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

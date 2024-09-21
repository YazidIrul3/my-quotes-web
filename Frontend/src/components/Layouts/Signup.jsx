import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import FormInput from "../Fragments/FormInput";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [displayPassword, setDisplayPasswrod] = useState(false);
  const [displayConfirmPassword, setDisplayConfirmPasswrod] = useState(false);

  const toast = useToast();

  const handleOnChnage = (e) => {
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
      const fetchData = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataJson = await fetchData.json();

      if (data?.password === data?.confirmPassword) {
        if (dataJson?.success) {
          toast({
            position: "top-right",
            title: "Account created",
            description: dataJson.message,
            duration: 2000,
            isClosable: true,
          });
        }

        setData({
          username: "",
          password: "",
          confirmPassword: "",
        });
      }

      if (data?.password !== data?.confirmPassword) {
        toast({
          position: "top",
          title: "Error",
          description: "password and confirm password is not some",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
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
    <div className="mt-10 flex flex-col justify-center mx-auto w-80 p-2 bg-slate-50 shadow-md">
      <h1 className=" text-blue-400 font-bold text-3xl mx-auto">SignUp</h1>

      <form className="flex flex-col" onSubmit={handleOnSubmit}>
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
            children="Password :"
            required
          />

          <div
            className="absolute text-lg right-2 top-1/2 translate-y-1/2"
            onClick={() => setDisplayPasswrod(!displayPassword)}
          >
            {displayPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>

        <div className="relative">
          <FormInput
            type={displayConfirmPassword ? "text" : "password"}
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleOnChnage}
            children="Confirm Password :"
            required
          />

          <div
            className="absolute text-lg right-2 top-1/2 translate-y-1/2"
            onClick={() => setDisplayConfirmPasswrod(!displayConfirmPassword)}
          >
            {displayConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>

        <Button children="Signup" />

        <p className="text-center text-sm mt-1">
          Already have an account?
          <Link to="/" className="text-blue-400 font-semibold ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

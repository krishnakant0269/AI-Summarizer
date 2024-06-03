/* eslint-disable no-unused-vars */
import { Input } from "./Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";

function SignUp() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signUp_bg w-screen h-screen">
      <div className="flex justify-center mt-5 w-[500px]  bg-gray-300 font-santoshi mx-auto vertical-align:top items-center max-h-full p-10 rounded-[20px]">
        <div>
          <span className="font-bold px-5 text-3xl flex justify-center mb-4">
            Sign Up With
          </span>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form className="w-[380px]">
            <div className="flex justify-between mb-10">
              <div className=" bg-white  w-[48%] pt-[11px] flex justify-center h-12 font-semibold rounded-lg hover:border-solid hover:border-2 hover:border-black hover:cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  className="h-5 mr-2 mt-[2px]"
                />
                Google
              </div>
              <div className="bg-[#262d3c] text-white pt-[10px] w-[48%] justify-center h-12  rounded-lg flex hover:border-solid hover:border-2 hover:border-white hover:cursor-pointer">
                <img
                  src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                  className="h-[23px] mr-2 mt-[2px]"
                  alt=""
                />
                Github
              </div>
            </div>
            <Input
              label="Username"
              className="mb-3 px-20 py-20 border-none border-white bg-white rounded-2xl w-full"
              placeholder="Enter Username"
              type="text"
            />
            <Input
              label="Email"
              className="mt- mb-3 px-20 py-20 border-none border-white rounded-2xl w-350"
              placeholder="Enter email"
              type="email"
            />
            <Input
              label="Password"
              className="mt- mb-5 px-20 py-20 border-none border-white rounded-2xl w-350"
              placeholder="Enter password"
              type="password"
            />
            <button
              type="submit"
              className="flex justify-center w-[100%] h-10 pt-2 flex-wrap mb-2 rounded-lg p-1 w-39 text-white font-montserrat font-bold bg-black"
            >
              Sign up
            </button>
            <div>
              <span> Already a member? </span>
              <Link
              to="/login" 
              className=" text-blue-400 underline"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

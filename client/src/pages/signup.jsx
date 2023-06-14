import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../hooks/useAuthHooks";
import axios from "axios";
import { useSignUp } from "../hooks/useSignUp";

function SignupForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const res = await axios.post("https://api-aiasum-u-sub2sub.onrender.com/user/register", {
        email: userEmail,
        password,
      });
      if (res.status === 200) {
        setIsloading(false);
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN", payload: res.data });
        setUserEmail("");
        setPassword("");
        navigate("/dashboard", { replace: true });
      } else {
        setError(res.response.data.message);
        console.log(error);
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
      if (error?.response) {
        setError(error?.response?.data?.message);
      } else {
        setError(error?.message);
      }
    }
  };

  useEffect(() => {
    setError(null);
  }, [userEmail, password]);

  return (
    <div
      className={`w-full h-screen bg-fixed flex flex-col justify-center items-center relative 
           bg-[center_bottom_-17rem] bg-[length:100%_auto] bg-no-repeat bg-[#E5E5E5]`}
    >
      <Helmet>
        <title>AiAsum | Signup</title>
      </Helmet>
      <form className="w-[347px] h-[406px]">
        <h2 className="text-[#093545] text-4xl font-normal tracking-normal text-center mb-10">
          Create new account
        </h2>
        <p className="text-[#093545] text-base leading-5 tracking-normal text-center mb-8 font-bold">
          {` Are you ready to increase the number of your youtube subscribers :) `}
        </p>
        <input
          type="email"
          placeholder="Email"
          required={true}
          value={userEmail}
          disabled={isloading}
          onChange={(e) => setUserEmail(e.target.value)}
          className="block pl-4 h-12 text-white placeholder:text-white w-[300px] outline-none rounded-[10px] mt-0 mx-auto border-0 bg-[#093545] placeholder:bg-[#093545]"
        />
        <input
          type="password"
          placeholder="Password"
          required={true}
          value={password}
          disabled={isloading}
          onChange={(e) => setPassword(e.target.value)}
          className="block pl-4 h-12 w-[300px] outline-none rounded-[10px] bg-[#093545] mx-auto border-0 mt-[32px] mb-[23px]"
        />

        <button
          type="submit"
          onClick={handleFormSubmit}
          disabled={
            userEmail.trim() === "" || password.trim() === "" || isloading
          }
          className="block h-12 pl-0 text-base font-normal leading-5 tracking-normal text-center mt-12 bg-pinkPrimary text-black cursor-pointer w-[300px] outline-none rounded-[10px] mx-auto border-0 disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          {isloading ? "Signing up..." : "Sign up"}
        </button>
        {error && (
          <p className="text-center text-red-700 font-bold mt-1 py-2 px-3 border border-red-700 rounded-md bg-red-200">
            {error}
          </p>
        )}
      </form>
      <Link to="../login" className="font-bold mt-5 underline text-darkPrimary">
        I already have an account
      </Link>
      <button
        type="button"
        className="w-20 h-20 cursor-pointer p-1 absolute rounded-full bottom-0 left-[5px] bg-[url('https://veb-dasturchi.github.io/img/Dark%20Mode.svg')]"
        onClick="changeColor()"
      />
    </div>
  );
}

export default SignupForm;

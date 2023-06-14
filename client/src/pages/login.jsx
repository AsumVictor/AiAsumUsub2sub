import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../hooks/useAuthHooks";
import axios from "axios";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const res = await axios.post("https://api-aiasum-u-sub2sub.onrender.com/user/auth", {
        email: userEmail,
        password,
      });
      if (res.status === 200) {
        setIsloading(false);
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN", payload: res.data });
        setUserEmail('')
        setPassword('')
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
      className={`w-full h-screen bg-fixed flex flex-col justify-center items-center relative bg-[center_bottom_-17rem] bg-[length:100%_auto] bg-no-repeat bg-[#E5E5E5]`}
    >
      <Helmet>
        <title>AiAsum | Login</title>
      </Helmet>
      <form className="w-[347px] h-[450px]">
        <h2 className="text-[#093545] text-6xl font-normal tracking-normal text-center mb-10">
          Sign in
        </h2>
        <p className="text-[#093545] text-base leading-5 tracking-normal text-center mb-8 font-bold">
          {` Welcome back :) `}
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
        <label
          htmlFor="check"
          className="text-sm font-medium leading-4 tracking-normal text-left cursor-pointer text-[#093545] mb-[35px]"
        >
          <input
            type="checkbox"
            id="check"
            className="relative cursor-pointer before:block before:absolute before:w-4 before:h-4 before:top-0 before:left-0 before:rounded-sm before:bg-teal-900 checked:after:block checked:after:w-1 checked:after:h-2 checked:after:absolute left-[-10px] top-[-2px] before:content-none before:border-[2px] before:border-black checked:after:content-none checked:after:border-white checked:after:border-t-0 checked:after:border-l-0 checked:after:border-r-[2px] checked:after:border-b-[2px] checked:after:rotate-45 checked:after:top-[2px] checked:after:left-[6px]"
          />
          Remember me
        </label>
        <a
          href="#"
          className="text-sm font-medium leading-4 tracking-normal text-right no-underline text-black ml-8"
        >
          Forgot password?
        </a>
        <button
          type="submit"
          disabled={
            userEmail.trim() === "" || password.trim() === "" || isloading
          }
          onClick={handleFormSubmit}
          className="block h-12 pl-0 text-base font-normal leading-5 tracking-normal text-center mt-12 bg-pinkPrimary text-black cursor-pointer w-[300px] outline-none rounded-[10px] mx-auto border-0 disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          {isloading ? "...Loging in" : "Login"}
        </button>
        {error && (
          <p className="text-center text-red-700 font-bold mt-1 py-2 px-3 border border-red-700 rounded-md bg-red-200">
            {error}
          </p>
        )}
      </form>
      <Link
        to="../signup"
        className="font-bold mt-10 underline text-darkPrimary"
      >
        Create new account
      </Link>
      <button
        type="button"
        className="w-20 h-20 cursor-pointer p-1 absolute rounded-full bottom-0 left-[36px] bg-[url('https://veb-dasturchi.github.io/img/Dark%20Mode.svg')]"
        onClick="changeColor()"
      />
    </div>
  );
}

export default Login;

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className={`w-full h-screen bg-fixed flex flex-col justify-center items-center relative bg-[center_bottom_-17rem] bg-[length:100%_auto] bg-no-repeat bg-[#E5E5E5]`}
    >
      <Helmet>
                <title>AiAsum | Login</title>
            </Helmet>
      <form className="w-[347px] h-[406px]">
        <h2 className="text-[#093545] text-6xl font-normal tracking-normal text-center mb-10">
          Sign in
        </h2>
        <p className="text-[#093545] text-base leading-5 tracking-normal text-center mb-8 font-bold">
         {` Welcome back :) `}
        </p>
        <input
          type="text"
          placeholder="Username"
          required={true}
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          className="block pl-4 h-12 text-white placeholder:text-white w-[300px] outline-none rounded-[10px] mt-0 mx-auto border-0 bg-[#093545] placeholder:bg-[#093545]"
        />
        <input
          type="password"
          placeholder="Password"
          required={true}
          value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
          disabled={userName.trim() === '' || password.trim() === ''}
          className="block h-12 pl-0 text-base font-normal leading-5 tracking-normal text-center mt-12 bg-pinkPrimary text-black cursor-pointer w-[300px] outline-none rounded-[10px] mx-auto border-0 disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          Login
        </button>

      </form>
      <Link to='../signup' className="font-bold mt-10 underline text-darkPrimary">
       Create new account
      </Link>
      <button
        type="button"
        className="w-20 h-20 cursor-pointer p-1 absolute rounded-full bottom-0 left-[36px] bg-[url('https://veb-dasturchi.github.io/img/Dark%20Mode.svg')]"
        onclick="changeColor()"
      />
    </div>
  );
}

export default Login;

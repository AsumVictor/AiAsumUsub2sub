import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Signup() {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');


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
            
       
            <button
          type="submit"
          disabled={userName.trim() === '' || password.trim() === ''}
          className="block h-12 pl-0 text-base font-normal leading-5 tracking-normal text-center mt-12 bg-pinkPrimary text-black cursor-pointer w-[300px] outline-none rounded-[10px] mx-auto border-0 disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          Sign up
        </button>
          </form>
          <Link to='../login' className="font-bold mt-5 underline text-darkPrimary">
       I already have an account
      </Link>
          <button
            type="button"
            className="w-20 h-20 cursor-pointer p-1 absolute rounded-full bottom-0 left-[5px] bg-[url('https://veb-dasturchi.github.io/img/Dark%20Mode.svg')]"
            onclick="changeColor()"
          />
        </div>
      );
}

export default Signup
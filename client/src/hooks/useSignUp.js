import { useState } from "react";
import { useAuthContext } from "./useAuthHooks";
import axios from 'axios'

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  
  const signUp = async (email, password) => {
try {
    setIsloading(true);
    const res = await axios.post("https://api-aiasum-u-sub2sub.onrender.com/user/register", {
      email,
      password,
    });
    if (res.status === 200) {
      setIsloading(false);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({ type: "LOGIN", payload: res.data });
    } else {
      setError(res.response.data.message);
      console.log(error)
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

  return { signUp, isloading, error, setError };
};

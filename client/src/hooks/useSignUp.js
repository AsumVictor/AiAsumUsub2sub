import { useState } from "react";
import { useAuthContext } from "./useAuthHooks";

export const useSignUp = () =>{
    const [error, setError] = useState(null)
    const [isloading, setIsloading] = useState(null)

    const signUp = async (email, password) =>{

    }
}
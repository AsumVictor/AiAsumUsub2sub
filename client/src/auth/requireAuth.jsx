import { useAuthContext } from "../hooks/useAuthHooks";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () =>{
    const { user } = useAuthContext();
if(!user){
   return <Navigate to={'../login'} />
}

if(user){
   return <Outlet />
}

}

export default RequireAuth
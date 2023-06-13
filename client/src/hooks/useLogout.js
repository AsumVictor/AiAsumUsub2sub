import { useAuthContext } from "./useAuthHooks"

 const useLogOut = () =>{
    const {dispatch} = useAuthContext()
    const logout = () => {
        localStorage.removeItem("user")
        dispatch({user: null})
    }

    return {logout}
}

export default useLogOut
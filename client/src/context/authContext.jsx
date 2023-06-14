import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const userStorage = JSON.parse(localStorage.getItem("user")) 
  let user
  if(userStorage){
   user = userStorage
  }else{
    user: null
  }
  const [state, dispatch] = useReducer(authReducer, { 
    user: user
  })

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type: 'LOGIN', payload: user})
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}
import axios from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from "react";

interface UserContextData {
  userName: string
  getGitUser:() =>string
  setUser:(user_name:string) =>void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export function UsersProvider({ 
  children,
} : UserProviderProps) {
  const [userName,setUserName] = useState('')



   function getGitUser(){
    return userName
   
  }
  function setUser(user_name:string){
    setUserName(user_name)

  }
  

  return(
    <UserContext.Provider value={{
      getGitUser,
      setUser,
      userName,
    }}>
      {children}
    </UserContext.Provider>
  )
}
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loggedUser, setLoggedUser] = useState()
    const nevigate = useNavigate()

    function login(email, password){
        if(user.email == email && user.password == password){
            setLoggedUser({...loggedUser, ...{name:user.name, email:user.email},

         });
         return "login success"
        }else {
            setLoggedUser(null);
        }
    }

    function logout(){
        setLoggedUser(null)
        nevigate('/')
    }

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem("user"));
        setUser({...user, ...u});
      }, []);
      console.log(loggedUser, "in authProvider")

  return (
    <AuthContext.Provider value={{login, loggedUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext}
import './Home.css'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../Contexts/UserContext'
import axios  from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import { Toast } from 'react-toastify/dist/components'
import { useNavigate } from "react-router-dom"
export default function Home(){
  const [userGit,setUserGit] = useState('')
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  async function buscarGitUser(){
    try {
      const response =  await axios.get(`https://api.github.com/users/${userGit}/repos`)
      if (response.data){
        setUser(userGit)
        navigate("/repos")
      }
    } catch (error) {
      toast.error('🦄 Você errou o nome do usuário!', {
        position: "top-right",
        
        });
    }
  }
  return(
   
      <div onSubmit={buscarGitUser} className="content">
        
        <div  className="container">
          <div className="logoCenter">
            <img src="/images/avatar.svg"></img>
          </div>
            <input value={userGit} onChange={(e) => setUserGit(e.target.value)} className="UserInput" type="text" placeholder="User Name"></input>
            <button className="button-62 buttonLogin"  onClick={buscarGitUser} >Login</button>
        </div>

    
      </div>
   
  )
}
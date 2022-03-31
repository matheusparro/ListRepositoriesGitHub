
import './Repos.css'
import {UserContext} from '../Contexts/UserContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

interface repos {
  name:[string]

}
export default function Repos(){
  const {userName} = useContext(UserContext)
  const [repos, setRepos] = useState<repos[]>([]);
  async function fetchData() {
    try {
      const response =  await axios.get(`https://api.github.com/users/${userName}/repos`)
      if (response.data){
        setRepos(response.data)
      }
    } catch (error) {
      toast.error('🦄 Você errou o nome do usuário!', {
        position: "top-right",
        
        });
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return(
    <div className="content">
      <div className="container2">
        <div className="divTitle">
          <h1>Repositórios do {userName} </h1>
        </div>
        <ul>
        {repos.map(repo => (
          <li>{repo.name}</li>
         
        ))}
        </ul>
      </div>

    </div>
  )
}
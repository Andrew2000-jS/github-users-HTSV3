  
import { Redirect, Route } from "react-router"
import useAuth from "../../context/useAuth"

export default function PublicRoute(props) {
  const { isLogged } = useAuth()

  if (isLogged()) return <Redirect to="/projetcs" />

  return (
    <Route {...props}/>
  ) 
}
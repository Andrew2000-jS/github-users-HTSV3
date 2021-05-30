import { Redirect, Route, useLocation } from "react-router"
import useAuth from "../../context/useAuth"


export default function PrivateRoute({hasRole: role, ...props}) {
  const location = useLocation()
  const { isLogged } = useAuth()


  if (!isLogged()) return <Redirect to={{ pathname: '/', state: { from: location}}}/>

  return (
    <Route {...props}/>
  )
}
import {createContext, useState} from "react"

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [user, setUser] = useState(window.localStorage.getItem('database'))

  const isLogged = () => !!user
  const logout = () => setUser(null)

  const contextValue = {
    user,
    isLogged,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const Login = () => {
  
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {
    login('Cristobal Torres')
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        onClick={onLogin}
        className="btn btn-primary">
        Login
      </button>
    </div>
  )
}

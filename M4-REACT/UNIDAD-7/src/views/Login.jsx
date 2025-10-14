import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
const  Login = ()=>{
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email, password)
        setUser({
            email,
            password
        })
    }

    return(
        <div>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Entrar</button>            
                </form>
        </div>
    )
}
export default Login
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"


export default function Navbar() {

    const {user, setUser } = useContext(UserContext)

    console.log(user)
     
    return (
        <div>
            <NavLink to='/'  className={({ isActive }) => isActive ? 'text-red' : "text-green" }>Home</NavLink>
            <NavLink to='/personajes' className={({ isActive }) => isActive ?  'text-red' : "text-green" }>Personajes</NavLink>
            { !user && <NavLink to='/login' className={({ isActive }) => isActive ?  'text-red' : "text-green" }>Login</NavLink>}
            {
                user != null? 
                <NavLink to='/admin' className={({ isActive }) => isActive ?  'text-red' : "text-green" }>Panel Admin</NavLink>
                :
                null
            }
           {user &&  <button onClick={()=> setUser(null)}> Cerrar Sesion </button>}
        </div>
    )
}
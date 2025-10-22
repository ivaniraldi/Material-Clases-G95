import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const user = {
      email,
      password
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json' // Opcional, pero común si la API espera JSON
        },
        body: JSON.stringify(user)
      }) 
      const data = await res.json()
      console.log(data.token)

      // localStorage.setItem("nombre_item", info) GUARDAMOS UN ITEM EN LOCALSTORAGE
      // localStorage.getItem("nombre_item") OBTENER EL DATO DEL ITEM
      // localStorage.removeItem("nombre_item") ELIMINAR UN ITEM
      // localStorage.clear() BORRA TODOS LOS DATOS DEL LOCALSTORAGE

    if(data.token){
        localStorage.setItem("token", data.token)
      alert("Sesion iniciada correctamente")
      navigate("/profile")

    }else{
      alert("Credenciales incorrectas")
    }

    } catch (error) {
      console.log(error)
    }
  }


  const titulo = localStorage.getItem("titulo")

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div>

      <h1>Iniciar sesión en {titulo}</h1>
      <form onSubmit={(e)=>handleSubmit(e)}> 
        <label htmlFor="Email">Email</label>
        <br />
        <input type="email" name="email" id="emailinput" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Contraseña</label>
        <br />
        <input type="password" name="password" id="passwordinput" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button type="submit" className="btn btn-primary mt-3">Entrar</button>
      </form>
      </div>
  </div>
  ); 
  
};
export default Login;

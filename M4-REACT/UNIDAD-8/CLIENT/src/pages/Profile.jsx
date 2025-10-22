import { useEffect, useState } from "react";


const Profile = () => {
  const token = localStorage.getItem("token") != undefined ? localStorage.getItem("token") : null;

  const [userInfo, setUserInfo] = useState(null)

  const getUserInfo = async () =>{
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await res.json()
      console.log(data)
      setUserInfo(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  return (
  <div>
    {token == null? "Debes iniciar sesión para ver esta página.": <div>
      <h3>Email: {userInfo?.email}</h3>
      <h3>ID: {userInfo?.id}</h3>
      </div>}
  </div>

  )
  
};
export default Profile;

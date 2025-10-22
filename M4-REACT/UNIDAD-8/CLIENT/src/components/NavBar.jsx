import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate }  from 'react-router-dom';

function NavBar() {

    const token = localStorage.getItem("token") != undefined? localStorage.getItem("token") : null

    const [tema, setTema] = useState(true)

    const changeTema = () =>{
        if(tema){
            setTema(false)
            localStorage.setItem("tema", tema)
        }else{
            setTema(true)
            localStorage.setItem("tema", tema)
        }
    }

const navigate = useNavigate()
    const logOut = ()=>{
        localStorage.clear()
        navigate("/login")
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JWT - REACT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Link to="/">Home</Link>
            {token? null: <Link to="/login">Login</Link>}
              {token? null: <Link to="/register">Register</Link>}
               {token?  <Link to="/profile">Profile</Link>: null}

                {token? <button className='btn btn-danger' onClick={logOut}>Cerrar Sesión</button>: null}

                <button onClick={()=> changeTema()}>Cambiar tema: {tema? "Claro": "Oscuro"}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
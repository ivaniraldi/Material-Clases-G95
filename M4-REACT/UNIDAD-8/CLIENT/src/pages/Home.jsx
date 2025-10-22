const Home = () => {

  const productos = ["Producto A", "Producto B"]
  const smoking = false
  const nombreTienda = "TiendaPrueba"

  localStorage.setItem("titulo", nombreTienda)

  const titulo = localStorage.getItem("titulo")
  return <div>
    Home

    {titulo}


  </div>;
};
export default Home;

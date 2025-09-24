import { useRef } from "react";

export default function Dropdown() {
  const dropdownRef = useRef(null);

  const parrafoRef = useRef(null)

  const cambiarColor = ()=>{
    if(parrafoRef.current.style.color == "white"){
      parrafoRef.current.style.color = "purple"
    }else{
      parrafoRef.current.style.color = "white"
    }
  }

  const abrirDropdown = () => {
    dropdownRef.current.style.display = "block"; // mostramos el menú
  };

  const cerrarDropdown = () => {
    dropdownRef.current.style.display = "none"; // ocultamos el menú
  };

  return (
    <div>
      <button onClick={abrirDropdown}>Abrir</button>
      <button onClick={cerrarDropdown}>Cerrar</button>

      <div
        ref={dropdownRef}
        style={{ display: "none", border: "1px solid #ccc", padding: "10px" }}
      >
        <p>Opción 1</p>
        <p>Opción 2</p>
        <p>Opción 3</p>
      </div>
      <p id="test" ref={parrafoRef} style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed rem quisquam temporibus iste, totam voluptas accusamus iusto ipsam dicta molestiae non maxime placeat consequuntur commodi, nihil unde corporis neque.</p>
      <button onClick={cambiarColor}>Cambiar Color del Parrafo</button>
    </div>
  );
}

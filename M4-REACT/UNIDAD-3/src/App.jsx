import { useState } from 'react'
import './App.css'

function App() {
    const [products, setProducts] = useState(["Producto 1", "Producto 1", "Producto 3"])
    const [colors, setColors] = useState(["red", "green", "blue", "orange", "yellow"])
    const [product, setProduct] = useState("")
    const [tareas, setTareas] = useState([
      {
        nombre: "Terminar el ejercicio",
        id: 0,
        completada: true
      }
    ])
    const [tarea, setTarea] = useState("")

    const enviarForm = (e)=>{
      e.preventDefault() //Evita que se recargue la web
      //console.log(e)

      /*
      let anterioresProductos = products
      anterioresProductos.push(product)
      setProducts(anterioresProductos)
      */

     if(product.length > 0){ //Si el input NO esta vacío
      setProducts([...products, product]) //Copiamos el arreglo inicial y le sumamos el elemento a agregar
      setProduct("") //Vaciamos el input
      alert("Producto agregado con éxito!") // Le avisamos al usuario
     }else{ //Si el input esta vacío
      alert("Debes escribir un producto") //Mos tramos el error
     }
    }

    const enviarTarea = (e)=>{
      e.preventDefault()
      if(tarea.length > 0){
        let nuevaTarea = {
          nombre: tarea,
          id: Math.random(),
          completada: false
        }
        console.log(nuevaTarea)
        setTareas([...tareas, nuevaTarea])
        setTarea("")
        alert("Nueva tarea agregada")
      }else{
        alert("Debes escribir una tarea!")
      }

    }
    
  return (
    <>
      <h1>Productos</h1>

      <form action="submit" onSubmit={(e) => enviarForm(e)}>
        <input type="text" placeholder='Ingrese su producto' 
        value={product} // Definimos el valor para que podamos manejar lo que tiene escrito externamente
        onChange={(e)=> setProduct(e.target.value)}/> 
        <p>Producto a agregar: {product}</p>
        <button type='submit'>Agregar</button>
      </form>
      
      <ul>
        {products.map((p, indice) => {
          //console.log("El indice del producto es " + indice)
          return <li key={indice}>{p}</li>
        })}
      </ul>
      <h2>Colores</h2>
      <div>
        {colors.map((c, i)=>{
          return <p key={i} style={{color: `${c}`}} >{c}</p>
        })}
      </div>

      <div>
        <h2>Tareas</h2>
        <form action="submit" onSubmit={(e) => enviarTarea(e)} >
          <input type="text" placeholder='Escribe la tarea' value={tarea} onChange={(e) => setTarea(e.target.value)} />
          <button type='submit'>Enviar</button>
        </form>
        <ul>
          {
            tareas.map((t) =>{
              return (
                <li key={t.id}>
                  <span>{t.nombre}</span> <input type="checkbox" defaultChecked={t.completada}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App

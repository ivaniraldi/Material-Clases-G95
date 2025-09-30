import { Table } from "react-bootstrap";

const InfoTable = () => {
  const data = [
    {
      name: "BrowserRouter",
      description: "Envuelve la aplicación y habilita el enrutamiento basado en la URL del navegador.",
      example: `<BrowserRouter>\n  <App />\n</BrowserRouter>`
    },
    {
      name: "Routes",
      description: "Contenedor que agrupa las diferentes rutas de la aplicación.",
      example: `<Routes>\n  <Route path="/" element={<Home />} />\n</Routes>`
    },
    {
      name: "Route",
      description: "Define una ruta específica con su camino (path) y el componente a renderizar.",
      example: `<Route path="/about" element={<About />} />`
    },
    {
      name: "Navigate",
      description: "Permite redirigir al usuario a otra ruta de manera programática.",
      example: `<Navigate to="/login" replace />`
    },
    {
      name: "Link",
      description: "Crea enlaces de navegación interna entre rutas de la app.",
      example: `<Link to="/contact">Ir a Contacto</Link>`
    }
  ];

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Componente / Función</th>
          <th>Descripción</th>
          <th>Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><code>{item.name}</code></td>
            <td>{item.description}</td>
            <td>
              <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                {item.example}
              </pre>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoTable;

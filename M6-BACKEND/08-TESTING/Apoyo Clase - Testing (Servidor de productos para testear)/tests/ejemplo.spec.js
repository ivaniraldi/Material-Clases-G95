const request = require("supertest");
const server = require("../index.js");

describe("Operaciones CRUD", () => {
  it("Obteniendo un 200", async () => {
    const response = await request(server).get("/productos").send();
    const status = response.statusCode;
    expect(status).toBe(200);
  });
  it("Obteniendo un 404", async () => {
    const response = await request(server).get("/productoss").send();
    const status = response.statusCode;
    expect(response.body).toBeInstanceOf(Object);
    expect(status).toBe(404);
  });
  it("Obteniendo un producto", async () => {
    const { body } = await request(server).get("/productos/1").send();
    const producto = body;
    expect(producto).toBeInstanceOf(Object);
  });
  it("Obteniendo una lista de productos", async () => {
    const { body } = await request(server).get("/productos").send();
    const producto = body;
    expect(producto).toBeInstanceOf(Array);
  });
  it("Enviando un nuevo producto", async () => {
    const id = Math.floor(Math.random() * 999);
    const producto = { id, nombre: "Nuevo producto" };
    const response = await request(server).post("/productos").send(producto);

    const response2 = await request(server).get("/productos").send()
    expect(response2.body).toContainEqual(producto);
  });

   it('Modificar un producto que no existe', async () => {
    const producto = { id: 40, nombre: 'Producto inexistente' };
    const response = await request(server).put('/productos').send(producto);
    const status = response.statusCode;
    expect(status).toBe(404);
  });

   it("Modificando un producto que si existe", async () => {
    const producto = { id:1 , nombre: "Modficación del producto" };
    const response = await request(server).put("/productos").send(producto);
    expect(response.body).toContainEqual(producto);
    expect(response.statusCode).toBe(201)
  });
});

const productList = document.getElementById('productos');

const getProducts = async () =>{
    const res = await fetch('http://localhost:3000/productos');
    const data = await res.json();
    return data
}

const renderProducts = async () =>{
    const products = await getProducts();

    let html = ""

    products.forEach(product => {
        html  += `
        <div id=${product.id}>
            <h2>${product.nombre}</h2>
            <p>Precio: $${product.precio}</p>
        </div>
        `;
    });
    productList.innerHTML = html;
}

renderProducts();


const addProductForm = document.getElementById('formulario');

addProductForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const nuevoProducto = {
        id: Date.now(),
        nombre,
        precio
    };

    await fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    });
    
    renderProducts();
    addProductForm.reset();
});

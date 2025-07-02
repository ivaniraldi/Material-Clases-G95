document.addEventListener("keydown")



console.log("JS Conectado hola");
const body = document.querySelector("body");
body.style.backgroundColor = "white";
let colorInput = document.querySelector("#color").value;

function suma(a = 0, b = 0) {
  console.log("hola mundo");
  return a + b;
}

function invertirColores() {
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

function pintar(color = "aqua") {
  body.style.backgroundColor = color;
  const suma2 = suma(8, 8);
  console.log(
    "Estoy usando la funcion suma dentro de otra funcion, el resultado fue: " +
      suma2
  );
}

function clickColor() {
  let colorInput = document.querySelector("#color").value;
  pintar(colorInput);
}

let suma1 = suma(2, 1);

console.log(suma1);

//funcion declarativa

function resta1(a, b) {
  return a - b;
}

//funcion de expresion

let resta2 = function (a, b) {
  return a - b;
};

//funcion de flecha

let resta3 = (a, b) => {
  return a - b;
};


let saludar = (ele) =>{
    const elementoSeleccionado = document.querySelector("."+ ele)
    alert("Hola!")
}

const btnAdd = document.querySelector("#btn-add")

btnAdd.addEventListener("click", saludar)
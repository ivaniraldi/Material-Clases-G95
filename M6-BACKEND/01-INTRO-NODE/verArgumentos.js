const argumentos = process.argv.slice(2)

console.log('Argumentos:', argumentos);

if(argumentos[0] === 'hola'){
    console.log('¡Hola! ¿Cómo estás?');
}

if(argumentos[0] === 'chau'){
    console.log('¡Chau! Hasta luego.');
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Primero creamos el Array para almacenar el nombre de cada uno de los amigos que se van a agregar
let listaAmigos = [];

//Creamos la función para agregar un amigo a la lista(Array)
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Utilizamos la funcion if para validar si el campo está vacío, si no mostra la alerta
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //Agregamos el nombre a la lista y limpiamos el campo de texto
    listaAmigos.push(nombre);
    input.value = "";

    //Actualizamos la lista en la interfaz del usuario
    mostrarAmigos();
}

//Creamos la función para mostrar la lista de amigos en el DOM
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    // Recorrer la lista de amigos y crear elementos <list>
    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

//Creamos la función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos primero.");
        return;
    }

    //Utilizamos random para agregar la funcion aleatoria del amigo secreto
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indice];

    //Mostramos el resultado en la interfaz del usuario
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
const nuevaTarea = document.querySelector('#nuevaTarea')
const agregarTarea = document.querySelector('#agregarTarea')
const totalSpan = document.querySelector('#totalSpan')
const realizadasSpan = document.querySelector('#realizadasSpan')
const ulLista = document.querySelector("ul")

const tareas = [
    { id: 01, nombre: "Hacer la cama", completado: false},
    { id: 02, nombre: "Barrer", completado: false},
    { id: 03, nombre: "Lavar", completado: false} 
];

tareas.forEach(tarea => {ulLista.innerHTML += `<li> ${tarea.id} - ${tarea.nombre} <button onclick= "borrar"> x </button> <button onclick= "checkT(${tarea.id})"> completar </button></li>`
totalSpan.innerHTML = tareas.length})

function renderT(){
    let html =""
    for (let tarea of tareas){
        html += `<li> ${tarea.id} - ${tarea.nombre} <button onclick= "borrar(${tarea.id})"> x </button> <button onclick= "checkT(${tarea.id})"> Completar </button> </li>`
    }
    ulLista.innerHTML = html
    totalSpan.innerHTML = tareas.length
    realizadasSpan.innerHTML = tareas.filter((tarea) => tarea.completado === true).length
}

agregarTarea.addEventListener('click', () => {
    const valorDeinput = nuevaTarea.value
       tareas.push({
           id: Date.now(), nombre: valorDeinput, completado: false
       })
       nuevaTarea.value = ""
       renderT();
})

function borrar(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    renderT()   
}

function checkT(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas[index].completado = true
}
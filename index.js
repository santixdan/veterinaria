let citas = []
let mascota = {}
// let filtrar = document.createElement("select");
// let opciones = ["abierta", "cerrada", "anulada"];
// let eliminar = document.createElement("button")
let iman = {
    perro: "./magenes/perrx.jpg",
    gato: "./magenes/gatx.jpg",
    pez: "./magenes/pex.jpg",
    loro: "./magenes/lorx.jpg"
}

function agendar() {
    mascota = {
        nombre: document.getElementById("txt-nom").value,
        propietario: document.getElementById("txt-pro").value,
        telefono: document.getElementById("txt-tel").value,
        tipo: document.getElementById("tipo").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        sintomas: document.getElementById("txt-sin").value,
        estado:"abierta"
    }
    citas.push(mascota)
}
function borrar() {
    document.getElementById("txt-nom").value = ""
    document.getElementById("txt-pro").value = ""
    document.getElementById("txt-tel").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("txt-sin").value = ""
}
function pintar() {
    let tableBody = document.getElementById("cite");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    citas.forEach((item,index) => {
        let celda = document.createElement("td")
        let fila = document.createElement("tr")
        fila.id = "miTabla"

        let perrito = document.createElement("img")
        perrito.src = iman[item.tipo]
        celda = document.createElement("td")
        celda.id = "masc-img"
        celda = perrito
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Nombre de la mascota: ${item.nombre}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Nombre del propietario: ${item.propietario}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Teléfono: ${item.telefono}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Tipo de mascota: ${item.tipo}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Fecha de la cita: ${item.fecha}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Hora de la cita: ${item.hora}`
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.id = "celdaa"
        celda.textContent = `Sintomas de la mascota: ${item.sintomas}`
        fila.appendChild(celda)

        // celda = document.createElement("td")
        // let estado = document.createElement("select")
        // estado.id = "estado"
        // estado.addEventListener("change", () => {
        //     citas[index].estado = document.getElementById("estado").value
        // })
        // for (let i = 0; i < opciones.length; i++) {
        //     let opcion = document.createElement("option")
        //     opcion.value = opciones[i]
        //     opcion.text = opciones[i]
        //     estado.appendChild(opcion)
        // }
        
        // // mascota.estado = document.getElementById("estado").value
        // celda.appendChild(estado)
        // fila.appendChild(celda)

        celda = document.createElement("td")
        let eliminar = document.createElement("button")
        eliminar.textContent = "❌"
        eliminar.addEventListener("click", () => {
            let eliminarFila = celda.closest("tr")
            if (eliminarFila) {
                citas.splice(item, 1)
                eliminarFila.remove()
            }
        })
        celda.appendChild(eliminar)
        fila.appendChild(celda)
        document.getElementById("cite").appendChild(fila)

        // citas.push(mascota)
    })
}
function validar() {
    if (!document.getElementById("txt-nom").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite el nombre de la mascota"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (!document.getElementById("txt-pro").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite el nombre del propietario"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (document.getElementById("txt-tel").value.length < 10) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite un número de teléfono valido"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (!document.getElementById("tipo").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor seleccione el tipo de mascota"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (!document.getElementById("fecha").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor seleccione una fecha valida"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (new Date(document.getElementById("fecha").value) < new Date()) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor seleccione una fecha valida"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (!document.getElementById("hora").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite una hora entre las 8am y las 6pm para la cita"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (document.getElementById("hora").value < '08:00' || document.getElementById("hora").value > '18:00') {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite una hora entre las 8am y las 6pm para la cita"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else if (!document.getElementById("txt-sin").value) {
        document.getElementById("alerta").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje").textContent = "Por favor digite los sintomas de la mascota"
        setTimeout(() => {
            document.getElementById("alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
    } else {
        agendar()
        pintar()
        borrar()
        // filtrar()
        document.getElementById("alerta2").setAttribute("style", "display:flex !important")
        document.getElementById("mensaje2").textContent = "Registro exitoso"
        setTimeout(() => {
            document.getElementById("alerta2").setAttribute("style", "display:none !important")
            document.getElementById("mensaje2").textContent = ""
        }, 3000);
    }
}
// function filtrar() {
//     document.getElementById("filtro").addEventListener("change", () => {
//         let opcionSeleccionada = document.getElementById("filtro").value;

//         let objetosFiltrados = citas.filter((objeto) => {
//             return objeto.estado === opcionSeleccionada;
//         });

//         // document.getElementById("cites").textContent = '';

//         objetosFiltrados.forEach((objeto) => {
//             let resultadoElement = document.createElement('div');
//             resultadoElement.textContent = objeto.nombre;
//             document.getElementById("cites").appendChild(resultadoElement);
//         });
//     });
// }



console.log(mascota);
console.log(citas);

// console.log(document.getElementById("miTabla"));
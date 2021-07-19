const url = "http://localhost:3000/mascotas"

function guardarMascota(nombre, tipo, raza, propietario) {
    axios.post(`${url}`,
        {
            id: Number,
            nombreMascota: nombre,
            tipo: tipo,
            raza: raza,
            propietario: propietario
        }
    )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

export function cambiarMascota(id, nombre, tipo, raza, propietario) {
    axios.put(`${url}/${id}`, {
        nombreMascota: nombre,
        tipo: tipo,
        raza: raza,
        propietario: propietario
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

let btn_guardar_mascota = document.getElementById("btn_guardar_mascota")

btn_guardar_mascota.addEventListener('click', () => {
    let nombre_mascota = document.getElementById("nombre_mascota").value
    let tipo = document.getElementById("tipo").value
    let raza = document.getElementById("raza").value
    let propietario = document.getElementById("lst_propietario").value
    if(nombre_mascota==="" || tipo==="" ||raza==="" || propietario==="" || propietario==="--Propietario de la mascota--"){
        alert("todos los campos son obligatorios")
        return false
    }
    guardarMascota(nombre_mascota, tipo, raza, propietario);
})
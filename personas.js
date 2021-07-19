const url = "http://localhost:3000/personas"

function guardarPersona(nombre, tipo, numero, telefono, direccion, ciudad) {
    axios.post(`${url}`,
        {
            id: Number,
            nombrePersona: nombre,
            tipoDocumento: tipo,
            numeroDocumento: numero,
            telefono: telefono,
            direccion: direccion,
            ciudad: ciudad
        }
    )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

export function cambiarPersona(url, id, nombre, tipo, numero, telefono, direccion, ciudad) {
    axios.put(`${url}/${id}`, {
        nombrePersona: nombre,
        tipoDocumento: tipo,
        numeroDocumento: numero,
        telefono: telefono,
        direccion: direccion,
        ciudad: ciudad
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

let btn_guardar_persona=document.getElementById("btn_guardar_persona")

btn_guardar_persona.addEventListener('click',()=>{
    let nombre_persona = document.getElementById("nombre_persona").value
    let tipo_persona = document.getElementById("tipo_documento").value
    let numero_persona = document.getElementById("num_documento").value
    let telefono_persona = document.getElementById("telefono").value
    let direccion_persona = document.getElementById("direccion").value
    let ciudad_persona = document.getElementById("ciudad").value
    if(nombre_persona==="" || tipo_persona==="" || tipo_persona=="--Tipo de Documento--" ||numero_persona==="" || telefono_persona==="" || direccion_persona==="" || ciudad_persona===""){
        alert("todos los campos son obligatorios")
        return false
    }
    guardarPersona(nombre_persona, tipo_persona, numero_persona, telefono_persona, direccion_persona, ciudad_persona);
})
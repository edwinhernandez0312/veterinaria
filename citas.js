const url = "http://localhost:3000/citas"
import { id_citas } from "./app.js"

export function guardarCita(fecha, propietario, mascota, sintomas) {
    axios.post(`${url}`,
        {
            id: Number,
            fecha: fecha,
            nombrePropietario: propietario,
            nombreMascota: mascota,
            sintomas: sintomas
        }
    )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

function cambiarCita(id, fecha, propietario, mascota, sintomas) {
    axios.put(`${url}/${id}`, {
        fecha: fecha,
        nombrePropietario: propietario,
        nombreMascota: mascota,
        sintomas: sintomas
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

let btn_cambiar_modal_citas = document.getElementById("btn_cambiar_modal_citas")
btn_cambiar_modal_citas.addEventListener('click', () => {
    console.log(id_citas);
    let cifecha_cam = document.getElementById("dt_fecha2").value
    let ciprop_cam = document.getElementById("lst_propietario3").value
    let cimasc_cam = document.getElementById("lst_mascotas2").value
    let cisint_cam = document.getElementById("txt_sintomas2").value
    if(cifecha_cam==="" ||ciprop_cam==="" ||ciprop_cam==="--Nombre del cliente--" ||cimasc_cam==="" ||cimasc_cam==="--Nombre de la mascota--" || cisint_cam===""){
        alert("todos los campos son obligatorios")
        return false
    }
    cambiarCita(id_citas, cifecha_cam, ciprop_cam, cimasc_cam, cisint_cam)
})
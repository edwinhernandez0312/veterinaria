//---------------- -------Personas---------------------------------------//
const url_personas = "http://localhost:3000/personas"
import { cambiarPersona } from "./personas.js"

let docum = document
let body_clientes = document.getElementById("registro_clientes")
let btn_cambiar_persona = document.getElementById("btn_cambiar_persona")
let btn_guardar_persona = document.getElementById("btn_guardar_persona")
let btn_agregar_persona = document.getElementById("btn_agregar_persona")

document.addEventListener('DOMContentLoaded', async function (e) {
    axios.get(url_personas)
        .then((response) => {
            for (let usuarios of response.data) {
                body_clientes.innerHTML += `
                <td>${usuarios.id} </td>
                <td>${usuarios.nombrePersona} </td>
                <td>${usuarios.tipoDocumento} </td>
                <td>${usuarios.numeroDocumento} </td>
                <td>${usuarios.telefono} </td>
                <td>${usuarios.direccion} </td>
                <td>${usuarios.ciudad} </td>
                <td> <button class="btn-warning editar" data-id=${usuarios.id} data-bs-toggle="modal" data-bs-target="#ven_modal_persona" id="btn_editar_persona">Editar</button> </td>
                <td> <button class="btn-danger eliminar" data-id=${usuarios.id}>Eliminar</button> </td>
                `
            }
        })
        .catch((error) => {
            console.log(error.response)
        });
});

let id_personas = 0
docum.addEventListener("click", (e) => {

    if (e.target.classList.contains("eliminar")) {
        id_personas = e.target.dataset.id
        let confirmar = confirm(`Confirmas que quieres eliminar la fila ${id_personas}?`)
        if (confirmar) {
            axios.delete(`${url_personas}/${id_personas}`)
                .then(response => {
                    alert('Eliminacion exitosa')
                })
                .catch(error => {
                    alert(error.response.statusText)
                })
        } else {
            alert("No se ha eliminado nada")
        }
    }
    if (e.target.classList.contains("editar")) {
        btn_guardar_persona.setAttribute("disabled", "true")
        btn_cambiar_persona.removeAttribute("disabled")
        id_personas = e.target.dataset.id
    }
})

if (btn_agregar_persona.click) {
    btn_cambiar_persona.setAttribute("disabled", "true")
    btn_guardar_persona.removeAttribute("disabled")
}

btn_cambiar_persona.addEventListener('click', () => {
    let nombre_persona_cam = document.getElementById("nombre_persona").value
    let tipo_persona_cam = document.getElementById("tipo_documento").value
    let numero_persona_cam = document.getElementById("num_documento").value
    let telefono_persona_cam = document.getElementById("telefono").value
    let direccion_persona_cam = document.getElementById("direccion").value
    let ciudad_persona_cam = document.getElementById("ciudad").value
    if(nombre_persona==="" || tipo_persona==="" ||numero_persona==="" || telefono_persona==="" || direccion_persona==="" || ciudad_persona===""){
        alert("todos los campos son obligatorios")
        return false
    }
    cambiarPersona(url_personas, id_personas, nombre_persona_cam, tipo_persona_cam, numero_persona_cam, telefono_persona_cam, direccion_persona_cam, ciudad_persona_cam)
})

//---------------- -------Mascotas---------------------------------------//
const url_mascotas = "http://localhost:3000/mascotas"
import { cambiarMascota } from "./mascotas.js"

let body_mascotas = document.getElementById("registro_mascotas")
let btn_cambiar_mascota = document.getElementById("btn_cambiar_mascota")
let btn_guardar_mascota = document.getElementById("btn_guardar_mascota")
let btn_agregar_mascota = document.getElementById("btn_agregar_mascota")

document.addEventListener('DOMContentLoaded', async function (h) {
    axios.get(url_mascotas)
        .then((resp) => {
            for (let mascotas of resp.data) {
                body_mascotas.innerHTML += `
                <td>${mascotas.id} </td>
                <td>${mascotas.nombreMascota} </td>
                <td>${mascotas.tipo} </td>
                <td>${mascotas.raza} </td>
                <td>${mascotas.propietario} </td>
                <td> <button class="btn-warning editar" data-id=${mascotas.id} data-bs-toggle="modal" data-bs-target="#ven_modal_mascota" id="btn_editar_mascota">Editar</button> </td>
                <td> <button class="btn-danger eliminar_masc" data-id=${mascotas.id}>Eliminar</button> </td>
                `
            }
        })
        .catch((error) => {
            console.log(error.resp)
        });
});

let lst_clientes = document.getElementById("lst_propietario")
document.addEventListener('DOMContentLoaded', () => {
    axios.get(url_personas)
        .then(r => {
            for (let i of r.data) {
                lst_clientes.innerHTML += `
                <option>${i.nombrePersona}</option>
                `
            }
        })
})

let id_mascotas = 0
docum.addEventListener("click", (h) => {

    if (h.target.classList.contains("eliminar_masc")) {
        id_mascotas = h.target.dataset.id
        let confirmar_elim = confirm(`Confirmas que quieres eliminar la fila ${id_mascotas}?`)
        if (confirmar_elim) {
            axios.delete(`${url_mascotas}/${id_mascotas}`)
                .then(response => {
                    alert('Eliminacion exitosa')
                })
                .catch(error => {
                    alert(error.response.statusText)
                })
        } else {
            alert("No se ha eliminado nada")
        }
    }
    if (h.target.classList.contains("editar")) {
        id_mascotas = h.target.dataset.id
        btn_guardar_mascota.setAttribute("disabled", "true")
        btn_cambiar_mascota.removeAttribute("disabled")
    }
})

if (btn_agregar_mascota.click) {
    btn_cambiar_mascota.setAttribute("disabled", "true")
    btn_guardar_mascota.removeAttribute("disabled")
}

btn_cambiar_mascota.addEventListener('click', () => {
    let nombre_mascota_cam = document.getElementById("nombre_mascota").value
    let tipo_cam = document.getElementById("tipo").value
    let raza_cam = document.getElementById("raza").value
    let propietario_cam = document.getElementById("lst_propietario").value
    if(nombre_mascota_cam==="" || tipo_cam==="" ||raza_cam==="" || propietario_cam==="" || propietario_cam==="--Propietario de la mascota--"){
        alert("todos los campos son obligatorios")
        return false;
    }
    cambiarMascota(id_mascotas, nombre_mascota_cam, tipo_cam, raza_cam, propietario_cam)
})

//---------------- -------Crear nueva cita---------------------------------------//
import { guardarCita } from "./citas.js"

let btn_agregar_cita = document.getElementById("btn_agregar_cita")
let lst_propietario2 = document.getElementById("lst_propietario2")
let lst_mascotas = document.getElementById("lst_mascotas")

document.addEventListener('DOMContentLoaded', () => {
    axios.get(url_personas)
        .then(r => {
            for (let o of r.data) {
                lst_propietario2.innerHTML += `
            <option>${o.nombrePersona}</option>
            `
            }
        })
})

document.addEventListener('DOMContentLoaded', () => {
    axios.get(url_mascotas)
        .then(j => {
            for (let a of j.data) {
                lst_mascotas.innerHTML += `
            <option>${a.nombreMascota}</option>
            `
            }
        })
})
btn_agregar_cita.addEventListener('click', () => {
    let txt_sintomas = document.getElementById("txt_sintomas").value
    let dt_fecha = document.getElementById("dt_fecha").value
    guardarCita(dt_fecha, lst_propietario2.value, lst_mascotas.value, txt_sintomas)
    
})

//---------------- -------Citas programadas-----------------------------------//

const url_citas = "http://localhost:3000/citas"

let btn_cambiar_modal_citas=document.getElementById("btn_cambiar_modal_citas")
let citas_prog = document.getElementById("citas")
document.addEventListener('DOMContentLoaded', async function (j) {
    axios.get(url_citas)
        .then((respuesta) => {
            for (let prog of respuesta.data) {
                citas_prog.innerHTML += `
                    <div class="card mt-2">
                        <div class="card-header text-end fs-4 fw-bold">${prog.fecha}</div>
                        <div class="card-body">
                            <h4 class="text-decoration-underline">Propietario:</h4>
                            <h3 class="fw-bold fst-italic">${prog.nombrePropietario}</h3>
                            <h4 class="text-decoration-underline">Mascota:</h4>
                            <h3 class="fw-bold fst-italic">${prog.nombreMascota}</h3>
                            <h4 class="text-decoration-underline">Enfermedad:</h4>
                            <h3 class="fw-bold fst-italic">${prog.sintomas}</h3>
                        </div>
                        <div class="card-footer">
                            <h5 class="fst-italic text-decoration-underline">ID de la cita: ${prog.id}</h5>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary elim_cita" data-id="${prog.id}" type="button" id="btn_eliminar">Eliminar</button>
                                <button class="btn btn-primary edit_cita" data-id="${prog.id}" type="button" data-bs-toggle="modal" data-bs-target="#ven_modal_cita" id="btn_editar">Editar</button>
                            </div>
                        </div>
                    </div>
                `
            }
        })
})

export let id_citas = 0
let docum2 = document

docum2.addEventListener("click", (j) => {
    if (j.target.classList.contains("elim_cita")) {
        id_citas = j.target.dataset.id
        console.log(id_citas);
        let confirmar1 = confirm(`Confirmas que quieres eliminar la cita ${id_citas}?`)
        if (confirmar1) {
            axios.delete(`${url_citas}/${id_citas}`)
                .then(response => {
                    alert('Eliminacion exitosa')
                })
                .catch(error => {
                    alert(error.response.statusText)
                })
        } else {
            alert("No se ha eliminado nada")
        }
    }
    if (j.target.classList.contains("edit_cita")) {
        id_citas = j.target.dataset.id
    }
})

let lst_propietario3=document.getElementById("lst_propietario3")
let lst_mascotas2=document.getElementById("lst_mascotas2")
document.addEventListener('DOMContentLoaded', () => {
    axios.get(url_personas)
        .then(r => {
            for (let o of r.data) {
                lst_propietario3.innerHTML += `
            <option>${o.nombrePersona}</option>
            `
            }
        })
})
document.addEventListener('DOMContentLoaded', () => {
    axios.get(url_mascotas)
        .then(j => {
            for (let a of j.data) {
                lst_mascotas2.innerHTML += `
            <option>${a.nombreMascota}</option>
            `
            }
        })
})


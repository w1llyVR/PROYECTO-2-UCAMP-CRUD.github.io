var arr = new Array();
var editable = false;
var indice = 0;
class Cita {
    constructor(nombre, doctor, fecha) {
        this._nombre = nombre;
        this._doctor = doctor;
        this._fecha = fecha;
    }
    set nombre(nombre) { this._nombre = nombre; }
    set doctor(doctor) { this._doctor = doctor; }
    set fecha(fecha) { this._fecha = fecha; }

    get nombre() { return this._nombre; }
    get doctor() { return this._doctor; }
    get fecha() { return this._fecha; }
}

function RenderListar() {
    const list = document.getElementById('lista');
    list.innerHTML = '';

    arr.forEach(function(element, index) {
        list.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element.nombre}</td>
                <td>${element.doctor}</td>
                <td>${element.fecha}</td>
                <td style="text-align: center;"><a onclick="CambiarValores(${index})" href="#" style="color: black;"><i class="fa-solid fa-pen-to-square"></i></a></td>
                <td style="text-align: center;"><a onclick="eliminarCita(${index})" href="#" style="color: black;"><i class="fa-solid fa-trash"></i></a></td>
            </tr>
            `;
    })


    document.getElementById('formulario').reset();
}

function AgregarCita() {

    if (editable == false) {
        var nombre = document.getElementById('nombre').value;
        var doctor = document.getElementById('doctor').value;
        var fecha = document.getElementById('fecha').value;
        arr.push(new Cita(nombre, doctor, fecha));

    } else {
        var Nombre = document.getElementById('nombre').value;
        var Doctor = document.getElementById('doctor').value;
        var Fecha = document.getElementById('fecha').value;
        console.log(Nombre, Doctor, Fecha, indice);
        arr[indice]._nombre = Nombre;
        arr[indice]._doctor = Doctor;
        arr[indice]._fecha = Fecha;
        editable = false;
        document.getElementById('button-crud').value = 'Agregar';

    }
    //localStorage.setItem('lista-citas', arr)
    RenderListar();
}

function eliminarCita(i) {
    arr.splice(i, 1);

    RenderListar();
}


function CambiarValores(i) {
    document.getElementById('nombre').value = arr[i]._nombre;
    document.getElementById('doctor').value = arr[i]._doctor;
    document.getElementById('fecha').value = arr[i]._fecha;
    document.getElementById('button-crud').value = 'Editar';
    indice = i;
    editable = true;
}

function getElements() {
    let localSt = localStorage.getItem('lista-citas');
    //arr = localSt.split(',');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].nombre + " " + arr[i].doctor + " " +
            arr[i].fecha);
    }
    //RenderListar();
}

getElements();
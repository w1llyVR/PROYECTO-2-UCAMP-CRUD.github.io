var arr = new Array();

class Cita {
    constructor(nombre, doctor, fecha) {
        this._nombre = nombre;
        this._doctor = doctor;
        this._fecha = fecha;
    }

    set nombre(nombre) { this.nombre = nombre; }
    set doctor(doctor) { this.doctor = doctor; }
    set fecha(fecha) { this.fecha = fecha; }

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
            <th scope="row">${index}</th>
            <td>${element.nombre}</td>
            <td>${element.doctor}</td>
            <td>${element.fecha}</td>
            <td style="text-align: center;"><a onclick="" href="#" style="color: black;"><i class="fa-solid fa-pen-to-square"></i></a></td>
            <td style="text-align: center;"><a onclick="eliminarCita(${index})" href="#" style="color: black;"><i class="fa-solid fa-trash"></i></a></td>
        </tr>
        `;
    })
    document.getElementById('formulario').reset();

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function AgregarCita() {
    var nombre = document.getElementById('nombre').value;
    var doctor = document.getElementById('doctor').value;
    var fecha = document.getElementById('fecha').value;

    arr.push(new Cita(nombre, doctor, fecha));
    RenderListar();
}

function eliminarCita(i) {
    arr.splice(i, 1);
    RenderListar();
}
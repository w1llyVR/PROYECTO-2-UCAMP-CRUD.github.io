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
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let th = document.createElement('th');
        let th_text0 = document.createTextNode(index + 1);
        let td_text1 = document.createTextNode(element.nombre);
        let td_text2 = document.createTextNode(element.doctor);
        let td_text3 = document.createTextNode(element.fecha);
        th.appendChild(th_text0);
        th.setAttribute('scope', 'row');
        td1.appendChild(td_text1);
        td2.appendChild(td_text2);
        td3.appendChild(td_text3);

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        list.append(tr);
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
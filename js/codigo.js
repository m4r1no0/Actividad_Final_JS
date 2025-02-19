const inputAgregar = document.querySelector('#nombreEquipo');
const inputMarca = document.querySelector('#marca');
const inputCant = document.querySelector('#cantidad');
const inputNombre = document.querySelector('#nombreInstru');
const inputId = document.querySelector('#idInstru');
const cuerpo = document.querySelector('#cuerpoTabla');
const save = document.querySelector('#guarda')
const modal = document.querySelector('.modal-dialog');
const black = document.querySelector('.modal-backdrop');
const cuerpoInstru = document.querySelector('#cuerpoInstru');

let nombresEquipo = [];
let marcas = [];
let cantidades = [];
let c = 0;
let x = 0;
let ids = [];
let nombresInstru = [];
    
    
function agregar(){ 
    
    let nombre = inputAgregar.value;
    let marca = inputMarca.value;
    let cant = inputCant.value;
    nombresEquipo.push(nombre);
    marcas.push(marca);
    cantidades.push(cant);
    const nuevoElemento = document.createElement('tr');
    
    const nuevoItem = document.createElement('td');
    const marcaItem = document.createElement('td');
    const cantItem = document.createElement('td');
    cantItem.classList.add('actualiza')
    cuerpo.appendChild(nuevoElemento);
    nuevoElemento.appendChild(nuevoItem);
    nuevoElemento.appendChild(marcaItem);
    nuevoElemento.appendChild(cantItem);

    nuevoItem.textContent = nombresEquipo[c];
    marcaItem.textContent = marcas[c];
    cantItem.textContent = cantidades[c];

    c++;

    inputAgregar.value = '';
    inputMarca.value = '';
    inputCant.value = '';

}

function agregarInstructor(){
    let idInstru = inputId.value;
    let nombreInstru = inputNombre.value;

    ids.push(idInstru);
    nombresInstru.push(nombreInstru);

    const cuerpoTabla = document.querySelector('#cuerpoInstru');
    const nuevoElemento = document.createElement('tr');
    
    const nombreTabla = document.createElement('td');
    const idTabla = document.createElement('td');

    cuerpoTabla.appendChild(nuevoElemento);
    nuevoElemento.appendChild(nombreTabla);
    nuevoElemento.appendChild(idTabla);

    nombreTabla.textContent = nombresInstru[x];
    idTabla.textContent = ids[x];

    inputId.value = '';
    inputNombre.value = '';
    x++;

}

const nombreInstruP = document.querySelector('#InstructorP');
const nombreEquipoP = document.querySelector('#nombreEquipoP');
const marcaP = document.querySelector('#marcaP');
const cantP = document.querySelector('#cantidadP');
const tablaP = document.querySelector('#cuerpoTablaP');


function prestamos(){
    let instructorP = nombreInstruP.value;
    let equipoP = nombreEquipoP.value;
    let marcaPr = marcaP.value
    let nombreEquipoPrestamo = nombreEquipoP.value;
    let indiceEquipo = -1;
    indiceEquipo = nombresEquipo.indexOf(nombreEquipoPrestamo);
    let marcaPrestamo = marcaP.value;
    let indiceMarca = -1;
    indiceMarca = marcas.indexOf(marcaPrestamo);
    let cantidadesP = parseFloat(cantP.value);


    if(indiceEquipo != -1 && indiceMarca != -1 && cantidades[indiceEquipo] > cantidadesP){
        cantidades[indiceEquipo] = cantidades[indiceEquipo]-cantidadesP
        const actualizar = document.querySelector('.actualiza')
        actualizar.textContent = cantidades[indiceEquipo];

        const cuerpoTablaPrestamo = document.querySelector('#cuerpoTablaP');
        const nuevoElemento = document.createElement('tr');
        
        const instructor = document.createElement('td');
        const equipo = document.createElement('td');
        const marca = document.createElement('td');
        const cantidad = document.createElement('td');

        cuerpoTablaPrestamo.appendChild(nuevoElemento);
        nuevoElemento.appendChild(instructor);
        nuevoElemento.appendChild(equipo);
        nuevoElemento.appendChild(marca);
        nuevoElemento.appendChild(cantidad);

        instructor.textContent = instructorP;
        equipo.textContent = equipoP;
        marca.textContent = marcaPr;
        cantidad.textContent = cantidadesP;



    }

}
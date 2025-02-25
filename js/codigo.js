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
let nombreInstruPrestamos = [];
let equiposPrestamos = [];
let marcasPrestamos = [];
let cantidadesPrestamos = [];



function guardar(){
    localStorage.setItem (miDato, JSON.stringify(nombresEquipo,marcas,cantidades,nombresInstru,nombreInstruPrestamos,equiposPrestamos,marcasPrestamos,cantidadesPrestamos))
}
    
    
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

        nombreInstruPrestamos.push(instructorP);
        equiposPrestamos.push(equipoP);
        marcasPrestamos.push(marcaPr);
        cantidadesPrestamos.push(cantidadesP);


        const cuerpoTablaPrestamo = document.querySelector('#cuerpoTablaP');
        const nuevoElemento = document.createElement('tr');
        
        const instructor = document.createElement('td');
        const equipo = document.createElement('td');
        const marca = document.createElement('td');
        const cantidad = document.createElement('td');
        cantidad.classList.add('actulizaD')

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

function devolver(){
    const inputNombreD =document.querySelector('#InstructorD');
    const inputNombreEquipoD =document.querySelector('#nombreEquipoD');
    const inputMarcaD =document.querySelector('#marcaD');
    const inputCantidadD =document.querySelector('#cantidadD');

    let indiceD = -1;

    let valorNombreD = inputNombreD.value;
    let valorNombreEquipoD = inputNombreEquipoD.value;
    let valorMarcaD = inputMarcaD.value
    let valorCant = inputCantidadD.value;
    let indiceEquipo = -1;
    indiceEquipo = equiposPrestamos.indexOf(valorNombreD);
    indiceD = marcasPrestamos.indexOf(valorMarcaD);
    let cantidadesD = parseFloat(valorCant);


    if(indiceEquipo != -1 && indiceD != -1 && cantidadesPrestamos[indiceEquipo] >= cantidadesD){
        cantidadesPrestamos[indiceEquipo] = cantidadesPrestamos[indiceEquipo]-cantidadesD
        const actualizaD = document.querySelector('.actulizaD')
        actualizaD.textContent = cantidadesPrestamos[indiceEquipo];

        const cuerpoTablaDevolver = document.querySelector('#cuerpoTablaD');
        const nuevoElemento = document.createElement('tr');
        
        const instructor = document.createElement('td');
        const equipo = document.createElement('td');
        const marca = document.createElement('td');
        const cantidad = document.createElement('td');

        cuerpoTablaDevolver.appendChild(nuevoElemento);
        nuevoElemento.appendChild(instructor);
        nuevoElemento.appendChild(equipo);
        nuevoElemento.appendChild(marca);
        nuevoElemento.appendChild(cantidad);

        instructor.textContent = valorNombreD;
        equipo.textContent = valorNombreEquipoD;
        marca.textContent = valorMarcaD;
        cantidad.textContent = valorCant;
    }
}


window.onload = function(){
    const data = localStorage.getItem('miDato');
    if (data) {
        return JSON.parse(miDato);
      } else {
        console.log('No se encontraron datos bajo esa clave');
        return [];
      };

}
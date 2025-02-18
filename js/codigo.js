const inputAgregar = document.querySelector('#nombreEquipo');
const inputMarca = document.querySelector('#marca');
const inputCant = document.querySelector('#cantidad');
const inputNombre = document.querySelector('#nombreInstru');
const inputId = document.querySelector('#idInstru');
const cuerpo = document.querySelector('#cuerpoTabla');
const save = document.querySelector('#guarda')
const modal = document.querySelector('.modal-dialog');
const black = document.querySelector('.modal-backdrop');
let nombres = [];
let marcas = [];
let cantidades = [];
let c = 0;
    
    
function agregar(){ 
    
    let nombre = inputAgregar.value;
    let marca = inputMarca.value;
    let cant = inputCant.value;
    nombres.push(nombre);
    marcas.push(marca);
    cantidades.push(cant);
    let nuevoElemento = document.createElement('tr');
    
    const nuevoItem = document.createElement('td');
    const marcaItem = document.createElement('td');
    const cantItem = document.createElement('td');
    cuerpo.appendChild(nuevoElemento);
    nuevoElemento.appendChild(nuevoItem);
    nuevoElemento.appendChild(marcaItem);
    nuevoElemento.appendChild(cantItem);

    nuevoItem.textContent = nombres[c];
    marcaItem.textContent = marcas[c];
    cantItem.textContent = cantidades[c];

    c++;

    inputAgregar.value = '';
    inputMarca.value = '';
    inputCant.value = '';

}
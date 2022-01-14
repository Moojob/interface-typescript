import {Temperature} from './classes/Temperature';
import {frigo} from './classes/frigo';
import {ventilo} from './classes/ventilo';
import {observe} from './interfaces/observe'

let temps: Temperature = new Temperature(25) ;
let nbrVentilo=0;

//  const ventilo1 :  observe = new ventilo ('ventilo1')
// const ventilo2 : observe = new ventilo('ventilo2')
// const ventilo3 : observe = new ventilo('ventilo3')

const frigo1 : observe = new frigo('frigo1')
const frigo2 : observe = new frigo('frigo2')

// temps.subscribe(ventilo1)
// temps.subscribe(ventilo2)
// temps.subscribe(ventilo3)
temps.subscribe(frigo1)
temps.subscribe(frigo2)

let temperatureControl = document.querySelector('#temperature') as HTMLInputElement
temperatureControl.addEventListener('change', (e: Event) => {
    temps.setTemperature(temperatureControl.value);
})

let btnAddVentilo = document.querySelector('#add-ventilo') as HTMLButtonElement
btnAddVentilo.addEventListener("click", (e: Event) => {
    nbrVentilo++;
    let newVentilo: observe = new ventilo("ventilo"+nbrVentilo.toString(), temps)
    temps.subscribe(newVentilo)
})

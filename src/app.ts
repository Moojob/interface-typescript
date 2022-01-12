import {Temperature} from './classes/Temperature';
import {frigo} from './classes/frigo';
import {ventilo} from './classes/ventilo';
import {observe} from './interfaces/observe'

let temps: Temperature= new Temperature (25)

const ventilo1:observe = new ventilo ('ventilo1')
const ventilo2 : observe = new ventilo('ventilo2')
const ventilo3 : observe = new ventilo('ventilo3')

const frigo1 : observe = new frigo('frigo1')
const frigo2 : observe = new frigo('frigo2')

temps.subscribe(ventilo1)
temps.subscribe(ventilo2)
temps.subscribe(ventilo3)
temps.subscribe(frigo1)
temps.subscribe(frigo2)

temps.setTemperature(40)
temps.setTemperature(-5)
temps.unsubscribe(ventilo2)
temps.setTemperature(50)

import {observe} from '../interfaces/observe';

export class frigo implements observe {
    constructor (private name:string){

    }
    update (temps: number){
        if(temps < 0){
            console.log('Arret du frigo', this.name)
        }
    }
}
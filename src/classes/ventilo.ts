import {observe} from '../interfaces/observe';

export class ventilo implements observe {
     puissance : number = 9000;
    constructor (private name: string){

    }
    update (temps: number){
        if (temps > 30 ){
            console.log('Démarrer le ventilo', this.name);
        }
        else{
            console.log('Il ne fait pas chaud car le', this.name, 'à démarrer');
        }
    }
}

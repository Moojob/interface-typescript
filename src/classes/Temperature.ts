import {observe} from '../interfaces/observe';
import {subject} from '../interfaces/subject';

export class Temperature implements subject {
     observes:observe[]=[];
    constructor(private Temperature :number){
        this.notifyobservers()
    }
    subscribe(obs:observe){
        this.observes.push(obs)
    }
    unsubscribe(obs:observe){
        const idx = this.observes.indexOf(obs)
        this.observes.splice(idx, 1)
    }
    notifyobservers(){
        for (const elm of this.observes){
            elm.update(this.Temperature)
        }
    }
    setTemperature(temps){
        this.Temperature=temps
        this.notifyobservers()
    }
}
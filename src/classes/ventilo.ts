import {observe} from '../interfaces/observe';
import { subject } from '../interfaces/subject';

export class ventilo implements observe {
    private  puissance: number = 400;
    private htmlDiv: HTMLDivElement;
    private htmlButton: HTMLButtonElement;
    private htmlInput: HTMLInputElement;

    constructor(private name: string, tempsObservable: subject) {
        let container = document.querySelector("#ventilo-container") as HTMLDivElement
        let ventiloDiv = document.createElement('div')
        ventiloDiv.className = "ventilo-div"
        let div = document.createElement('div')
        this.htmlButton = document.createElement('button')
        this.htmlButton.innerText = "Se désabonner"
        this.htmlButton.addEventListener('click', (e: Event) => {
            if (this.htmlButton.innerText === "Se désabonner") {
                this.htmlButton.innerText = "S'abonner"
                
                tempsObservable.unsubscribe(this)
            } else {
                this.htmlButton.innerText = "Se désabonner"
                tempsObservable.subscribe(this)
                
            }
        })

        this.htmlInput = document.createElement('input')
        this.htmlInput.setAttribute('type', 'number')
        this.htmlInput.valueAsNumber
        this.htmlInput.addEventListener('click', (e: Event) => {
            this.htmlInput
          
        })
        div.innerText = this.name;
        div.className = 'ventilo-off'
        container.append(div)
        div.id = this.name
        this.htmlDiv = div
        ventiloDiv.append(this.htmlInput)
        ventiloDiv.append(div)
        ventiloDiv.append(this.htmlButton)
        
        container.append(ventiloDiv)
    }
    update (temps: number){
        if (temps > this.htmlInput.valueAsNumber ) {
            console.log(this.htmlInput.valueAsNumber);
            console.log('Démarrer le ventilo', this.name);
            // let div = document.querySelector("#"+this.name)
            
            this.htmlDiv.className = 'ventilo-on'
        }
        else{
            console.log('Il ne fait pas chaud car le', this.name, 'à démarrer');
            // let div = document.querySelector('#' + this.name)
            this.htmlDiv.className = 'ventilo-off'
            
        }

    }
}

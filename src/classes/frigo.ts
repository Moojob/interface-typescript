import {observe} from '../interfaces/observe';
import { subject } from '../interfaces/subject';

export class frigo implements observe {
    private  puissance: number = 400;
    private htmlDiv: HTMLDivElement;
    private htmlButton: HTMLButtonElement;
    private htmlInput: HTMLInputElement;

    constructor(private name: string, tempsObservable: subject) {
        let container = document.querySelector("#frigo-container") as HTMLDivElement
        let frigoDiv = document.createElement('div')
        frigoDiv.className = "frigo-div"
        let div = document.createElement('div')
        this.htmlButton = document.createElement('button')
        this.htmlButton.innerText = "Eteindre"
        this.htmlButton.addEventListener('click', (e: Event) => {
            if (this.htmlButton.innerText === "Eteindre") {
                this.htmlButton.innerText = "Allumer"
                tempsObservable.unsubscribe(this)
            } else {
                this.htmlButton.innerText = "Eteindre"
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
        frigoDiv.append(this.htmlInput)
        frigoDiv.append(div)
        frigoDiv.append(this.htmlButton)

        container.append(frigoDiv)
    }
    update (temps: number){
        if (temps > this.htmlInput.valueAsNumber){
            console.log(this.htmlInput.valueAsNumber);
            console.log('Démarrer le frigo', this.name);
            // let div = document.querySelector("#"+this.name)
            this.htmlDiv.className = 'frigo-on'
        }
        else{
            console.log('Il ne fait pas chaud car le', this.name, 'à démarrer');
            // let div = document.querySelector('#' + this.name)
            this.htmlDiv.className = 'frigo-off'
            
        }

    }
}

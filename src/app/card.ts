export class Card {
    showDetails: boolean;
    constructor(public id:number, public title : string, public detail: string){
        this.showDetails =  false
    }
}

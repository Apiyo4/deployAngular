import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = [new Card(1, "Modules", "Used to group different files"),
    new Card(2, "Input binding", "Passing parent properties from Parent property to child property"),
    new Card(3, "Directive", "A directive is a function that executes whenever the Angular compiler finds it in the DOM.")]
  getDetails(ind:number){
    this.cards[ind].showDetails = true
  }
  hideCardDetail(done:boolean, i: number){
      if(done){
        this.cards[i].showDetails = false
      }
  }

  constructor() { }

  ngOnInit() {
  }

}

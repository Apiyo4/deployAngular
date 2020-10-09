import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() card: Card;
  @Output() isDone = new EventEmitter<boolean>()
  hideD(dt : boolean){
    this.isDone.emit(dt)
  }
  constructor() { }

  ngOnInit() {
  }

}

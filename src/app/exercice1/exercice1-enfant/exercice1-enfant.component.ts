import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  constructor() { }

  @Input()
  compteur: number;

  @Output()
  changeCompteur = new EventEmitter<number>();	
  
  ngOnInit() {
  }

  Incrementer(): void {
    this.compteur++;
    this.changeCompteur.emit(this.compteur);
  }

  Decrementer(): void {
    this.compteur--;
    this.changeCompteur.emit(this.compteur);
  }

}

import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public compteur: number = 5; 

  constructor() { }

  ngOnInit() {
  }

  MettreAJourCompteur(nouveauCpt): void {
    this.compteur = nouveauCpt;
  }



}

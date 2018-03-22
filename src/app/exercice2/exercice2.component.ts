import { Component, NgModule, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('f') public compteur: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ChangeText(): void {

    this.valeur = (<HTMLInputElement>this.compteur.nativeElement).value;
  }

}

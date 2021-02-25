import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boodschapp',
  templateUrl: './boodschapp.component.html',
  styleUrls: ['./boodschapp.component.css']
})
export class BoodschappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  boodschap: string;
  boodschappen = [];
  boodschappenAf = [];
  stuks: number = null;
  naamButton = "Verwijder";
  selectedIndex: number;
  aantalBoodschappen: number;
  aantalBoodschappenAf: number;
  sorteer = "Sorteer";
  isSorteer = false;

  toggleDisplayDiv() {
    this.isSorteer = !this.isSorteer;
  }

  onClick() {
    this.boodschappen.push({ artikel: this.boodschap, stuks: this.stuks });
    this.boodschap = '';
    this.stuks = null;
    this.aantalBoodschappen = this.boodschappen.length;
    this.sorteer = "Sorteer";
  }

  verwijderArtikel(artikel: string, i: number) {
    this.naamButton = "Verwijder " + artikel + " van de lijst."
    this.selectedIndex = i;

  }

  verwijderNu(i: number) {

    if (i !== -1) {

      this.boodschappen.splice(i, 1);
      this.selectedIndex = -1;
      this.aantalBoodschappen = this.boodschappen.length;
    }
  }

  vinkAf(artikel: string, stuks: number, i: number) {

    if (i !== -1) {
      this.boodschappenAf.push({ artikel: artikel, stuks: stuks });
      this.boodschappen.splice(i, 1);
      this.selectedIndex = -1;
      this.aantalBoodschappen = this.boodschappen.length;
      this.aantalBoodschappenAf = this.boodschappenAf.length;
    }
  }

  sorteerAB() {
    //this.boodschappen.sort((eerste, tweede) => (eerste > tweede ? 1 : -1));
    if (this.isSorteer) {
      this.boodschappen.sort((a, b) => (a.artikel < b.artikel) ? 1 : -1);
      this.sorteer = "Sorteer Z -> A";
      this.isSorteer = false;
    } else {
      this.boodschappen.sort((a, b) => (a.artikel > b.artikel) ? 1 : -1);
      this.sorteer = "Sorteer A -> Z";
      this.isSorteer = true;
    }
    this.selectedIndex = null;
  }

  onBlur() {
    if (this.stuks == null) {
      this.stuks = 1;
    }
  }

  enter(event) {
    if (event.keyCode === 13) {
      if (this.boodschap != null && this.boodschap.length >= 2) {
        this.onBlur();
        this.onClick();
      }
    }
  }
}

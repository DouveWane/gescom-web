import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {
  header_Tab={
    title:"Nouvelle Rubriques"
  }
  constructor() { }

  ngOnInit() {
  }

}

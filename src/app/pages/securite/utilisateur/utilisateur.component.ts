import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  header_Tab={
    title:"Nouveau Utilisateur",
    option_1:"General",
    option_2:"Description",
  }
  constructor() { }

  ngOnInit() {
  }

}

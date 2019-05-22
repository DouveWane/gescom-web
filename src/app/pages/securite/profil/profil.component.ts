import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  header_Tab={
    title:"Nouveau Profil"
  }
  constructor() { }

  ngOnInit() {
  }

}

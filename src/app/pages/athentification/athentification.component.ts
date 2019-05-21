import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-athentification',
  templateUrl: './athentification.component.html',
  styleUrls: ['./athentification.component.css']
})
export class AthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    environment.isHiddenDashbord=false;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // jquery declare var $:any;
})
export class HomeComponent implements OnInit {
user={
  firstname:"Priyanka",
  lastName:"ABC",
  pin:'087'
};
user2=Number(Math.pow(2,10));

  constructor() { }

  ngOnInit(): void {
  }

}

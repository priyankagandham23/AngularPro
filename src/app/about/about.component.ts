import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
name='priyanka gandham';
d1=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

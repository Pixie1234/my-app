import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Туризам во Македонија';
  imagePath: string = 'assets/image.png';
  constructor() { }

  ngOnInit() {
  }

}

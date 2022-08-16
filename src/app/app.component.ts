import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldBridgelabz';
  imgUrl = "../assets/Bl_logo_square_jpg.jpg";
  ngOnInit(): void{
    this.title="Hello From Bridgelabzz";
  }
  
}

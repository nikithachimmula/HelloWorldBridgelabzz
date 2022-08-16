import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldBridgelabz';
  imgUrl = "../assets/Bl_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string="";
  ngOnInit(): void{
    this.title="Hello From Bridgelabzz";
  }
  //Event Binding
  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}

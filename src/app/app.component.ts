import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldBridgelabz';
  ngOnInit(): void{
    this.title="Hello From Bridgelabzz";
  }
}

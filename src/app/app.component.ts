import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Counter-App';
  name: string = "Ajinkya";

  count: number = 0

  increaseCount=()=> {
    this.count = this.count + 1
  }

  decreaseCount = () => {
    if(this.count>0){ this.count = this.count - 1}
   
  }

  resetCount = () => {
    this.count = 0
  }
}

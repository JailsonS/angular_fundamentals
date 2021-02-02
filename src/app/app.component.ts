import { Component } from '@angular/core';
import { People } from './people';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    // template: ``
})
export class AppComponent {

  title = 'Title';
  
  peopleone = new People(1, 'Jailson');
  peopletwo = new People(2, 'Joao');

  names = [
    this.peopleone.name,
    this.peopletwo.name
  ];

  bgColor = '#FF00CC';

  // click events
  changeColor = () => {
    this.bgColor = '#FF0000';
  }
}

// ng generate class nomedaclasse
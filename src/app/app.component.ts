import { AppService } from './app.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-raf';
  imageSource = 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg';
  imageTitle = 'Pexels Image';
  width = 250;
  height = 250;
  colspan = 5;
  isActive = false;
  i: number = 1;
  username: string = "me@example.com";
  friends: string[];

  // constructor(){
  // let service = new AppService(); //bad approach, this is tightly coupled.
  constructor(service: AppService) {   // Service is decoupled here as a parameter. THis is good practice and this is called Dependecy Injection, i.e.; Injecting the dependency to the parameter of the function....
    this.friends = service.getFriends();
  }
  onSave() {
    this.isActive = !this.isActive;
    let title_copy: string = this.title;
    this.title = title_copy ? "This is My App, not Rafeen's!" : this.title;
  }
  // Event Binding Example
  onClick() {
    let temp: number = this.i;
    console.log("Button was clicked!" + this.i);
    this.i = temp + 1;
  }
  // Event Binding Example
  onDivClick() {
    console.log("Div was Clicked!")
  }
  //Event Filtering Example
  onKeyUp() {
    console.log("Enter was pressed!" + this.i);
    this.i = this.i + 1;
  }
  onKeyUpOutputText(email) {
    console.log(email)
  }
  onTwoWayBinding() {
    console.log("Username: " + this.username);
  }
}


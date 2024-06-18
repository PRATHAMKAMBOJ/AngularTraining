import { Component , EventEmitter, Input, Output, computed, input, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!:string;   //     || Input decorator use to send objects to another components
  @Input({required: true}) name!:string;     //     || Input decorator use to send objects to another components
  @Output() select= new EventEmitter();

  // avatar =input.required<string>();                         ||   Another way for Input decorator 
  // name = input.required<string>();                          ||   Another way for Input decorator 
  //private randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);  
  //public selectedUser = signal(DUMMY_USERS[randomIndex]);    ||   Standard way to send a signal consisting an object
  
  //imagePath = computed(()=> 'assets/users/' + this.avatar());||    // Using computed we compute the incoming value from signal
  //selectedUser = DUMMY_USERS[randomIndex];  //  Using Dummy-User.ts file we will export some dummy users and directly use them in our HTML (**Note** - The default access specifier for the methods in this class is Public which we can use in pur HTML but if it is private then we cant use it.)
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }// Standard getter use to send object to HTML
  

  onSelectUser(){
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);     ||      In this way we can assign value to a signal
    //console.log(this.avatar +' | '+ this.name);
    console.log('this.id',this.id)
    this.select.emit(this.id);
  }
  
}

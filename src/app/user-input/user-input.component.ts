import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  even: string[] =[]
  odd: string[] = [];


  onSubmit(userText: string) {

    const data = userText.split(" ");

      for (var obj of data) {
        if  (obj != ""){
          if((obj.length%2) == 0){
            this.even.push(obj);
          }else{
            this.odd.push(obj)
          }
        }
      }
    console.log(this.odd);
    console.log(this.even);

  }



}

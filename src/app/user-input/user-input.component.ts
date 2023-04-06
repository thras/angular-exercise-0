import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @ViewChild(NgForm) form!: NgForm;

  onSubmit(userText: string) {
    const even: string[] =[]
    const odd: string[] = [];
    const data = userText.split(" ");
    for (var odj of data) {
      if((odj.length%2) == 0){
        odd.push(odj);
      }else{
        even.push(odj)
      }

    }

    console.log(odd);
    console.log(even);
  }



}

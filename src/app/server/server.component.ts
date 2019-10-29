import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  textDisplayed: boolean = true;
  myArray = []
  inc: number = 1;


  setStatus(){
    this.textDisplayed = !this.textDisplayed;
    this.myArray.push(this.myArray.length + 1);
  }

  constructor() { }

  ngOnInit() {
  }

}

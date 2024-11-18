import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
  options:string[] = ["Where To Go", "Where To Eat", "Places To Stay ","What To Do"];

  constructor(){}
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.css'
})
export class CardMainComponent implements OnInit {
  imgBack:string = "https://th.bing.com/th/id/R.645010afaaca5129ee94eff4c62b7479?rik=73rW49RnKytkKQ&pid=ImgRaw&r=0";
  type:string[] = ["IMPLEMENTANDO1", "IMPLEMENTANDO2"];
  title:string = "IMPLEMENTANDO";
  descrpt:string = "IMPLEMENTANDO, IMPLEMENTANDO, IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

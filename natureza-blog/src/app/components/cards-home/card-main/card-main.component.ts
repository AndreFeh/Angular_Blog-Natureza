import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.css'
})
export class CardMainComponent implements OnInit {
  @Input()
  imgBack:string = "https://th.bing.com/th/id/R.645010afaaca5129ee94eff4c62b7479?rik=73rW49RnKytkKQ&pid=ImgRaw&r=0";
  @Input()
  type:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO"];
  @Input()
  title:string = "IMPLEMENTANDO";
  @Input()
  descrpt:string = "IMPLEMENTANDO, IMPLEMENTANDO, IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.css'
})
export class CardMainComponent implements OnInit {
  @Input()
  imgBack:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  type:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO"];
  @Input()
  title:string = "IMPLEMENTANDO";
  @Input()
  descrpt:string = "IMPLEMENTANDO, IMPLEMENTANDO, IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

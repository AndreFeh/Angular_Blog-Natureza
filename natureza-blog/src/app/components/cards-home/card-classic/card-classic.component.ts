import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-classic',
  templateUrl: './card-classic.component.html',
  styleUrl: './card-classic.component.css'
})
export class CardClassicComponent implements OnInit {
  @Input()
  imgCard:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  type:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO", "IMPLEMENTANDO"];
  @Input()
  title:string = "IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

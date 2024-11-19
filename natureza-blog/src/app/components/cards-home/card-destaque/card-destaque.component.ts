import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-destaque',
  templateUrl: './card-destaque.component.html',
  styleUrl: './card-destaque.component.css'
})
export class CardDestaqueComponent implements OnInit{
  @Input()
  imgCard:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard1:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard2:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard3:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard4:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard5:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard6:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard7:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard8:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard9:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard10:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard11:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard12:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  imgCard13:string = "assets/img/404wallpaper-not-found.jpg";
  @Input()
  txtInput:string = "IMPLEMENTANDO";
  @Input()
  types:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO", "IMPLEMENTANDO"];

  constructor(){}
  ngOnInit(): void {
  }

}

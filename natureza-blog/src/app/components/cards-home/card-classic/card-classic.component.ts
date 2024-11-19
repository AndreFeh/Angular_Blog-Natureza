import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-classic',
  templateUrl: './card-classic.component.html',
  styleUrl: './card-classic.component.css'
})
export class CardClassicComponent implements OnInit {
  @Input()
  imgCard:string = "https://teiasolutions.com.br/wp-content/uploads/2021/12/INOVACAO-DESENVOLVIMENTO-1.png";
  @Input()
  type:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO", "IMPLEMENTANDO"];
  @Input()
  title:string = "IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

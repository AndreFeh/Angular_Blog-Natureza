import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-destaque',
  templateUrl: './card-destaque.component.html',
  styleUrl: './card-destaque.component.css'
})
export class CardDestaqueComponent implements OnInit{
  @Input()
  imgCard:string = "https://uvn-brightspot.s3.amazonaws.com/assets/vixpt/p/praia-areia-negra-islandia-0920-1400x1300.jpg";
  @Input()
  txtInput:string = "IMPLEMENTANDO";
  @Input()
  types:string[]=["IMPLEMENTANDO", "IMPLEMENTANDO", "IMPLEMENTANDO"];

  constructor(){}
  ngOnInit(): void {
  }

}

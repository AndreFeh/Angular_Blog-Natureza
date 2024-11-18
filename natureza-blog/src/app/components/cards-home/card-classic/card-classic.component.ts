import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-classic',
  templateUrl: './card-classic.component.html',
  styleUrl: './card-classic.component.css'
})
export class CardClassicComponent implements OnInit {
  imgCard:string = "https://th.bing.com/th/id/R.6a40e94b978dbbf2409aec3586eda95c?rik=4MNfrPmaJYf%2fHA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-LlJRCmrXMB4%2fVVO4krykb_I%2fAAAAAAAAC_0%2fNna9dJwRfeQ%2fs1600%2fsala-luxo.jpg&ehk=mU8cPCFV9hz%2f8JgYNKtfwHXyQRSlEswGtq%2f7EYz19B4%3d&risl=&pid=ImgRaw&r=0";
  type:string[] = ["IMPLEMENTANDO1", "IMPLEMENTANDO2"];
  title:string = "IMPLEMENTANDO";

  constructor(){}
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { HeroService } from "../service/hero.service";
import { MessageService } from "../service/message.service";
import {Router} from "@angular/router";
import {ParentComponent} from "../common/parent/parent.component";


interface j{
  status:number;
  info:string
}

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})

export class HeroAddComponent implements OnInit {
  name:string;
  loading:boolean=false;

  constructor(
    private service:HeroService,
    private msg:MessageService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  sub(){
    if(!this.name){this.msg.show("请输入英雄姓名");return;}
    this.loading=true;
    this.service.addHero(this.name).subscribe((d:j)=>{
      console.log(d)
      this.loading=false;
      this.msg.show(d.info);
      this.name="";
    })
  }

  jump(){
    this.router.navigate(["/hero",{id:99}]);
  }

}

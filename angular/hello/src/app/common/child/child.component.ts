import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name:string;
  @Input() age:number;
  @Output() onSelect=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.onSelect.emit({age:++this.age});
  }

}

import { Component } from "@angular/core";

@Component({
  standalone: false,
  template: `

  <h3>Counter: {{counter}}</h3>

<button (click)="increment(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increment(-1)">-1</button>`,
  selector:"app-counter",

})
export class CounterComponent{

  public counter = 10;

  increment(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }

}

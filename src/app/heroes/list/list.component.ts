import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string[] = ["Siperman", "Batman", "Iroman", "Hulk"];
  public heroeborrado?:string = "";

  borrarUlitmoHeroe():void{
    this.heroeborrado = this.heroesNames.pop();
  }

}

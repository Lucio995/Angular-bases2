import { Component } from "@angular/core";
import { Character } from "../interfaces/characters.interface";


@Component({
  templateUrl: "./main-pages.component.html",
  selector: "app-dbz-main-page",
  standalone: false,
})
export class MainPageComponent{

  public caracters: Character[] = [{
    name:"Kriling",
    power:1000
  },
  {
    name:"Goku",
    power:9500,
  },{
    name:"Vegeta",
    power:7500,
  }];


  NewCharacter(character:Character):void{
      this.caracters.push(character);
  }

  onDeleteCharacter(index:number):void{
    // Elimina desde el índice que le pasamos y solo un elemnto
    this.caracters.splice(index,1);
  }
}

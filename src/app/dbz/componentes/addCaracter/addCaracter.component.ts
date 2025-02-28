import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from '../../interfaces/characters.interface';


@Component({
  templateUrl: "./addCaracter.component.html",
  selector: "dbz-add-caracter",
  standalone: false,
})
export class AddCaracterComponent {

  // esto es un ouput, basicamente el hijo le manda informacion al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public caracter:Character = {
    name:"",
    power: 0,
  }


  emitCaracter():void{

    console.log(this.caracter)

    // Si el nombre del personaje esta vacio no se envia nada, sino se envia el personaje

    if(this.caracter.name.length === 0){
      return;
    }

    this.onNewCharacter.emit(this.caracter);

    this.caracter = {name:"", power:0,}


  }
}

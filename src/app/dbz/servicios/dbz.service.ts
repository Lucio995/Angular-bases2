// Servicios: La idea de los servicios es tener toda la logica dentro de ellos, y que los componentes solo se encarguen de mostrar la información

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/characters.interface';

// @Injectable:Este decorador se usa para crear los servicios
@Injectable({
  providedIn: 'root',
})
export class DbzService {

  public caracters: Character[] = [{
    id: uuid(),
    name:"Kriling",
    power:1000
  },
  {
    id: uuid(),
    name:"Goku",
    power:9500,
  },{
    id: uuid(),
    name:"Vegeta",
    power:7500,
  }];


  NewCharacter(character:Character):void{

    const newCharacter: Character = {
      id: uuid(), ...character
    }

      this.caracters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
     // Elimina desde el índice que le pasamos y solo un elemnto
  //   this.caracters.splice(index,1);
  // }


  // .filter() se usa en arrays, crea un nuevo array con los elementos que cumplen una condición específica.
  // En este caso, se crea un nuevo array con todos los elementos que no tengan el id que le pasamos, asi se va a eliminar

  deletCharacterById(id:string){
      this.caracters = this.caracters.filter(character => character.id !== id);
  }


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  standalone: false,

})
export class ListDbzComponent {

  // El input sirve para pedirle informacion al padre, lo q hace es ponemos el @Input() y abajo el tipo de dato que queremos recibir, despues en el html de este componente ponemos entre corchetes el nombre de la variable q esta debajo del input y le ponemos el nombre del valor que queremos del padre
  @Input()
  public characterList: Character[] = [{
    // Este es un valor por defecto si no se pasa nada se pone esto
    name:"trunks",
    power:10,
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  deletCharacter(id:string):void{
      this.onDelete.emit(id);
  }


}

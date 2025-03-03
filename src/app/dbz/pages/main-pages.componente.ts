import { Component } from "@angular/core";
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../servicios/dbz.service';


@Component({
  templateUrl: "./main-pages.component.html",
  selector: "app-dbz-main-page",
  standalone: false,
})
export class MainPageComponent{

  // Esto le da acceso a todas las propiedades y métodos de la clase DbzService,es una buena practica poner el servicio en privado,
  // Lo q entendi es q se crean instancias de del servicio privado para poder acceder a sus propiedades y metodos y no hacerlo publico
  constructor(private dbzServices:DbzService){}

    get characters():Character[]{
      return [...this.dbzServices.caracters];
    }

    onDeleteCharacter(id:string):void{
        this.dbzServices.deletCharacterById(id);
    }


    onNewCharacter(character:Character):void{
      this.dbzServices.NewCharacter(character);
    }
}

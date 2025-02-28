import { Component } from "@angular/core";
import { Character } from "../interfaces/characters.interface";
import { DbzService } from "../servicios/dbz.service";


@Component({
  templateUrl: "./main-pages.component.html",
  selector: "app-dbz-main-page",
  standalone: false,
})
export class MainPageComponent{

  // Esto le da acceso a todas las propiedades y métodos de la clase DbzService
  constructor(public dbzServices:DbzService){

    
  }

}

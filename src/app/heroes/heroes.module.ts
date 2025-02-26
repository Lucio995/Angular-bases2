import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports:[
    // CommonModule es un módulo que contiene directivas comunes como NgIf, NgFor, Si creas un módulo independiente que no es el AppModule, debes importar CommonModule para usar estas directivas.
    CommonModule
  ]
})
export class HeroModule{

}

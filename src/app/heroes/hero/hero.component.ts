import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "iroman";
  public age:number = 45;

  // Al get en el html no se le ponen parentesis porque lo geters se usan como propiedades
  get CapitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changename():void{
    this.name = "Spiedrman";
  }

  changeAge():void{
    this.age = 30;
  }

  resetForm():void{
  this.name = "iroman";
  this.age = 45;
  }
}

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {

  text:string = "Un gran poder, requiere una gran responsabilidad.";
  author:string = "Ben Parker";
  mostrar:boolean = true;

  personajes:string[] = ["Spiderman", "Hulk", "Ironman"];

}

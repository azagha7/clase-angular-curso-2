import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  
  //Donde declaramos variables
  public unaVariable:string = "Soy un valor inicializado";

  //La ejecucion inicial del componente
  constructor() { 
    //Para asignar valores iniciales en nuestras variables
    //Parar inicializar importaciones realizadas

  }

  ngOnInit(): void {
    this.saludar();
    //Sirve para asignar valores iniciales a nuestros elementos
    //Realizar peticiones hhtp iniciales
  }

  //Zona de metodos (funciones)
  //Es donde ponemos la logica del componenete ya funcional

  saludar(){
    //alert("holamundo");
  }

}

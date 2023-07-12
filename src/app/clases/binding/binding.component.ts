import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  unaVariable = "holaaaa";
  unaVariableProperty = true;
  unaImagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg/1200px-Ara_Macao_%28Yarinacocha%2C_Pucallpa%29.jpg";
  unHidding = true;
  mensajeboton = "no me clickes";

  unaVariableTwoWay = "hola me cambio";
  
  ngOnInit(): void {
    
  }
  retornarMensaje(){
    return "hola soy un mensaje de función";
  }

  saludar(){
    alert("holamundo");
  }

  cambiarMensaje(){
    this.unaVariable = "hola mundo hola mundo hola mundo";
  }




}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calculadira',
  templateUrl: './ejercicio-calculadira.component.html',
  styleUrls: ['./ejercicio-calculadira.component.css']
})
export class EjercicioCalculadiraComponent implements OnInit {
  valorCalculadora= '';
  valorCalculadora2 = '';
  valorCalculadoraMostrado = '';
  operador = '';
  constructor() { }

  ngOnInit(): void {
  }

  escribirChange(numero:string){
    // this.valorCalculadoraMostrado= numero;
    // if(this.valorCalculadoraMostrado.indexOf("+")>0){
    //   this.operador = '+';
    //   this.valorCalculadoraMostrado = this.valorCalculadoraMostrado.replace("+", "");
    // }else if(this.valorCalculadoraMostrado.indexOf("-")>0){
    //   this.operador = '-';
    //   this.valorCalculadoraMostrado = this.valorCalculadoraMostrado.replace("-", "");
    // }else if(this.valorCalculadoraMostrado.indexOf("*")>0){
    //   this.operador = '*';
    //   this.valorCalculadoraMostrado = this.valorCalculadoraMostrado.replace("*", "");
    // }else if(this.valorCalculadoraMostrado.indexOf("/")>0){
    //   this.operador = '/';
    //   this.valorCalculadoraMostrado = this.valorCalculadoraMostrado.replace("/", "");
    // }else{
      if( this.operador == ''){
        this.valorCalculadora= this.valorCalculadoraMostrado;
      }else{
        this.valorCalculadora2= this.valorCalculadoraMostrado;
      }
    // }
    
  }

  escribirNumero(numero:string){
    this.valorCalculadoraMostrado+= numero;
    if( this.operador == ''){
      this.valorCalculadora= this.valorCalculadoraMostrado;
    }else{
      this.valorCalculadora2= this.valorCalculadoraMostrado;
    }
  }

  seleccionarOperador(operacion:string){
    this.operador = operacion;
    this.valorCalculadoraMostrado= '';
  }

  realizarOperacion(){
    switch (this.operador) {
      case '+':
        this.valorCalculadoraMostrado=(parseInt(this.valorCalculadora)+parseInt(this.valorCalculadora2)).toString();
        break;
      case '-':
        this.valorCalculadoraMostrado=(parseInt(this.valorCalculadora)-parseInt(this.valorCalculadora2)).toString();
        break;
      case '*':
        this.valorCalculadoraMostrado=(parseInt(this.valorCalculadora)*parseInt(this.valorCalculadora2)).toString();
        break;
      case '/':
        this.valorCalculadoraMostrado=(parseInt(this.valorCalculadora)/parseInt(this.valorCalculadora2)).toString();
        break;
    }
    this.operador = '';
    this.valorCalculadora2 = '';
    this.valorCalculadora = this.valorCalculadoraMostrado;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: String = "http://google.com.br";
  urlImage: String = "https://loremflickr.com/320/240/dog";
  cursoAngular: boolean = true;
  d: boolean = false;
  s: boolean = false;
  input: String = "";
  inputSalvo: String = "";
  isMouseOver: boolean = false;
  nome: String = '';
  nomeDoCurso: String = 'Angular';
  valorInicial: number = 15;

  pessoa: any = {
    nome: 'Marcos',
    idade: 23
  }

  
  getValor(){
    return 1;
  }

  doDisable(){
    if(!this.d)
      this.s = !this.s;
    this.d = true;
  }

  onKeyUp(evento: KeyboardEvent){
    this.input = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.inputSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getCurtirCurso(){
    return true;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}

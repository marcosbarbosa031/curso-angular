import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

 @Input() valor = 0;

 @Output() mudouValor = new EventEmitter();

  constructor() { }

  increment() {
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor
    });
  }

  decrement() {
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor
    });
  }

  ngOnInit() {
  }

}

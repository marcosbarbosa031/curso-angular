import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {
  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnInit() {
    this.log("OnInit");
  }

  ngOnChanges() {
    this.log("OnChanges");
  }

  ngDoCheck() {
    this.log("DoCheck");
  }

  ngAfterContentInit() {
    this.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    this.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("AfterViewInit");
  }

  ngAfterViewChecked() {
    this.log("AftetViewChecked");
  }

  ngOnDestroy() {
    this.log("OnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }

}

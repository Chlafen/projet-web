import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.sass'],
})
export class WrapperComponent implements OnInit {
  @Input('padding') p?: number;
  padding: string = '1rem';
  ngOnInit() {
    this.padding = `${this.p == null ? 1 : this.p}rem`;
  }
}

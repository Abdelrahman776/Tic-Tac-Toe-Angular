import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <button>{{ value }}</button> -->
    <button *ngIf="!value">{{ value }}</button>
    <button style="background-color:#D37676 !important" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button style=" background-color:#2233FF;" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important;color:white ; background-color:#B1AFFF; font-weight:bold;  }',
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}

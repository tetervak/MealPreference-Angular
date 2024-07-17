import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe,
    MatToolbar,
    MatIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  today: Date
  @Input() name: string = "Sheridan College"

  constructor() {
    this.today = new Date()
  }
}

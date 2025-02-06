import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {RouterLink} from "@angular/router";
import {PortionSize} from "../portion-size";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  userPreference: UserPreference;
  constructor(service: MealPreferenceService) {
    this.userPreference = service.userPreference;
  }

  protected readonly PortionSize = PortionSize;
}

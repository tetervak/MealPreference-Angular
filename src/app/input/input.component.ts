import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";
import {FormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {PortionSize} from "../portion-size";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect, MatLabel} from "@angular/material/select";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule, MatButtonModule,
    MatRadioModule, MatIconModule,
    MatCheckbox,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  userPreference: UserPreference = new UserPreference();

  constructor(private service: MealPreferenceService, private router: Router) {
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    this.userPreference.userName = this.userPreference.userName.trim();
    this.service.submitUserPreference(this.userPreference);
    this.router.navigate(["/output"]);
  }

  protected readonly PortionSize = PortionSize;
}

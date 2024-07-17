import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";
import {ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule, MatInputModule,
    MatCardModule, MatButtonModule,
    MatCheckboxModule,
    MatRadioModule, MatIconModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  userPreference: UserPreference = new UserPreference("", MealChoice.FISH, false);

  constructor(private service: MealPreferenceService, private router: Router) {
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    this.service.submitUserPreference(
      new UserPreference(
        this.userPreference.userName.trim(),
        this.userPreference.mealChoice,
        this.userPreference.notSpicy)
    );
    this.router.navigate(["/output"]);
  }
}

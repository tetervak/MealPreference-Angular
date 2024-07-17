import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
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
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    MatCardModule, MatButtonModule,
    MatCheckboxModule,
    MatRadioModule, MatIconModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  form: FormGroup;

  constructor(private service: MealPreferenceService, private router: Router) {
    this.form = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.pattern("(.|\\s)*\\S(.|\\s)*")]),
      mealChoice: new FormControl(MealChoice.FISH),
      notSpicy: new FormControl(false)
    })
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    this.service.submitUserPreference(
      new UserPreference(
        this.form.value.userName.trim(),
        this.form.value.mealChoice,
        this.form.value.notSpicy)
    );
    this.router.navigate(["/output"]);
  }
}

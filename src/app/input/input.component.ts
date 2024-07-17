import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  form: FormGroup;

  constructor(private service: MealPreferenceService, private router: Router) {
    this.form = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.pattern("(.|\s)*\S(.|\s)*")]),
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

import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";
import {UserPreference} from "../user-preference";
import {MealChoice} from "../meal-choice";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  form: FormGroup;

  constructor(private service: MealPreferenceService, private router: Router) {

    this.form = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.pattern(/\S/g)]),
      mealChoice: new FormControl(MealChoice.FISH)
    })
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    let userPreference: UserPreference = new UserPreference();
    userPreference.userName = this.form.value.userName.trim();
    userPreference.mealChoice = this.form.value.mealChoice;
    this.service.submitUserPreference(userPreference);
    this.router.navigate(["/output"]);
  }
}

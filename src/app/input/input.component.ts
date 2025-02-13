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
      userName: new FormControl<string>("", [Validators.required, Validators.pattern("(.|\\s)*\\S(.|\\s)*")]),
      mealChoice: new FormControl<MealChoice>(MealChoice.FISH),
      notSpicy: new FormControl<boolean>(false),
      portionSize: new FormControl<number>(2)
    })
  }

  protected readonly MealChoice = MealChoice;

  onSubmit(): void {
    this.service.submitUserPreference(
      new UserPreference(
        this.form.value.userName.trim(),
        this.form.value.mealChoice,
        this.form.value.notSpicy,
        this.form.value.portionSize
        )
    );
    this.router.navigate(["/output"]);
  }
}

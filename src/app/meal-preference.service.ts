import { Injectable } from '@angular/core';
import {UserPreference} from "./user-preference";
import {MealChoice} from "./meal-choice";

@Injectable({
  providedIn: 'root'
})
export class MealPreferenceService {

  userPreference: UserPreference = new UserPreference('', MealChoice.FISH, false);

  submitUserPreference(userPreference: UserPreference): void {
    this.userPreference = userPreference;
    console.log("submitted user preference: ", userPreference);
  }
}

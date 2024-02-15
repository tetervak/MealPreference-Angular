import {MealChoice} from "./meal-choice";

export class UserPreference {
  userName: string;
  mealChoice: MealChoice;

  constructor(userName: string, mealChoice: MealChoice) {
    this.userName = userName;
    this.mealChoice = mealChoice;
  }
}

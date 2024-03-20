import {MealChoice} from "./meal-choice";

export class UserPreference {
  userName: string;
  mealChoice: MealChoice;
  notSpicy: boolean;

  constructor(userName: string, mealChoice: MealChoice, notSpicy: boolean) {
    this.userName = userName;
    this.mealChoice = mealChoice;
    this.notSpicy = notSpicy;
  }
}

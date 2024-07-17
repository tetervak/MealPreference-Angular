import {MealChoice} from "./meal-choice";

export class UserPreference {
  userName: string = "";
  mealChoice: MealChoice = MealChoice.FISH;
  notSpicy: boolean = false;

  constructor(userName: string, mealChoice: MealChoice, notSpicy: boolean) {
    this.userName = userName;
    this.mealChoice = mealChoice;
    this.notSpicy = notSpicy;
  }
}

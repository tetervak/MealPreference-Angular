import {MealChoice} from "./meal-choice";

export class UserPreference {
  userName: string = "";
  mealChoice: MealChoice = MealChoice.FISH;
  notSpicy: boolean = false;
  portionSize: number = 2;

  constructor(userName: string, mealChoice: MealChoice, notSpicy: boolean, portionSize: number) {
    this.userName = userName;
    this.mealChoice = mealChoice;
    this.notSpicy = notSpicy;
    this.portionSize = portionSize;
  }
}

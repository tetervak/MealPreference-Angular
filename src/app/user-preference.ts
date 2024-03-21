import {MealChoice} from "./meal-choice";

export class UserPreference {

  constructor(
    public userName: string,
    public mealChoice: MealChoice,
    public notSpicy: boolean) {
  }
}

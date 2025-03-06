import {MealChoice} from "./meal-choice";
import {PortionSize} from "./portion-size";

export class UserPreference {
  userName: string = "";
  mealChoice: MealChoice = MealChoice.FISH;
  notSpicy: boolean = false;
  portionSize: PortionSize = PortionSize.MEDIUM;
}

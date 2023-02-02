import { FruitController } from "./Controllers/FruitController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  
 fruitController = new FruitController()

}

window["app"] = new App();

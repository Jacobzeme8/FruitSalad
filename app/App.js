import { FruitController } from "./Controllers/FruitController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayerController } from "./Controllers/PlayerController.js";

class App {
playerController = new PlayerController()
fruitController = new FruitController()

}

window["app"] = new App();

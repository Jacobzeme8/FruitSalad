// import { Value } from "./Models/Value.js"
import { Fruit } from "./Models/Fruit.js"
import { Player } from "./Models/Player.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
 /** @type {import('./Models/Player').Player[]} */

  players = loadState('players', [Player])
  /** @type {import('./Models/Player').Player} */
  activePlayer = null

  /** @type {import('./Models/Fruit').Fruit[]} */
fruits = [
 new Fruit ({name: "pear"}),
 new Fruit ({name: 'apple',}),
 new Fruit ({name: 'banana'}),
 new Fruit ({name: 'mango'}),
  
]
  /** @type {import('./Models/Fruit').Fruit} */
activeFruit = null

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

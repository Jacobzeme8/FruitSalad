import { generateId } from "../Utils/generateId.js"

export class Player{

constructor(data){
  
  this.id = generateId()
  this.name = data.name
  this.score = data.score || 0

}

get ListTemplate(){
  return `
  <div>
  <h1 onclick="app.playerController.setActivePlayer('${this.id}')"> ${this.name} </h1>
  </div>
  `
}

get ActivePlayerTemplate(){
  return`
  <div>
    <h1> ${this.name} </h1>
    <h2> ${this.score}</h2>
    <form onsubmit = "" >
      <input id ="fruit-input" type = "text" />
    </form>

  </div>
  `
}

}
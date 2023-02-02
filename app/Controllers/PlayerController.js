import { appState } from "../AppState.js";
import { playerService } from "../Service/PlayerService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { loadState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayers(){
    let template = ''
    appState.players.forEach(p => template += p.ListTemplate)
    setHTML('playerList', template)
    console.log(template)
}

function _drawPlayer(){
    let player = appState.activePlayer
    setHTML('active-player', player.ActivePlayerTemplate)
}


export class PlayerController {
    constructor(){
        console.log('I am the player controller!!!!!!!');
        appState.on('players', _drawPlayers)
        appState.on('activePlayer', _drawPlayer)
        appState.on('activeFruit', this.setActiveFruit)
        _drawPlayers()
    }

    formHandler(){
        try{
            window.event.preventDefault()
            // console.log('Submitted!')
            const form = event?.target
            const formData = getFormData(form)
            // console.log(formData)
            playerService.createPlayer(formData)
            form.reset()
            // _drawPlayers()
            
        } catch (error){
            Pop.error(error)
        }
    }

    fruitForm(){
        try {
            window.event.preventDefault()
            const form = event?.target
            const formData = getFormData(form)
            playerService.compareFruit(formData)
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }


    setActivePlayer(playerId){
        try {
            let player = appState.players.find(p => p.id == playerId)
            playerService.setActivePlayer(player)
            // _drawPlayer()
            this.randomFruit()
        } catch (error) {
            Pop.error(error)
        }
        
        

    }

    randomFruit(){
        let fruits = appState.fruits
        let fruit = fruits[Math.floor(Math.random()*fruits.length)]
        appState.activeFruit = fruit
        console.log(appState.activeFruit);
        
    }

    setActiveFruit(){
        let template = appState.activeFruit.template
        setHTML('fruit', template)
        
    }


}
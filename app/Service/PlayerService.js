import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"

class PlayerService {
    compareFruit(formData) {
        throw new Error("Method not implemented.");
    }
    setActivePlayer(player) {
        appState.activePlayer = player
        console.log(appState.activePlayer);
        appState.emit('activePlayer')
    }
    createPlayer(formData) {
        let player = new Player(formData)
        appState.players.push(player)
        console.log(appState.players)
        saveState('players', appState.players)
        appState.emit('players')
    }

}

export const playerService = new PlayerService()
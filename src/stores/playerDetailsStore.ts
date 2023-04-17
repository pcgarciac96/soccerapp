import { defineStore } from "pinia";
import { IStatePlayer } from '../interfaces/players.interface'

export const usePlayersStore = defineStore("playersStore", {
  state: (): {
    selectedPlayer:IStatePlayer[];
    playersList : IStatePlayer[];
    isOpen: boolean,
  } => {
   return{
    selectedPlayer:[],
    playersList:[],
    isOpen: false,
   }
  },
  actions: {
    setPlayers(players:IStatePlayer[]){
      this.playersList = players;
    },
    getPlayerSelected(player:IStatePlayer[]){
      this.selectedPlayer = player; 
    },
    closeModal(){
      this.isOpen = false;
      console.log("hola");
      
    }
  },
});

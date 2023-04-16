import { defineStore } from "pinia";
import { getPlayersList, getPlayerSelected } from '../services/futdbService'
import { IStatePlayer, selectedPlayer } from '../interfaces/players.interface'

export const usePlayersStore = defineStore("playersStore", {
  state: ():IStatePlayer => {
   return{
    selectedPlayer:{
      "id": 0,
      "resourceId": 0,
      "resourceBaseId": 0,
      "futBinId": 0,
      "futWizId": 0,
      "firstName": '',
      "lastName": '',
      "name": '',
      "commonName": '',
      "height": 0,
      "weight": 0,
      "birthDate": '',
      "age": 0,
      "league": 0,
      "nation": 0,
      "club": 0,
      "rarity": 0,
      "traits": [],
      "specialities": [],
      "position": '',
      "skillMoves": 0,
      "weakFoot": 0,
      "foot": "Right",
      "attackWorkRate": '',
      "defenseWorkRate": '',
      "totalStats": 0,
      "totalStatsInGame": 0,
      "color": '',
      "rating": 0,
      "ratingAverage": 0,
      "pace": 0,
      "shooting": 0,
      "passing": 0,
      "dribbling": 0,
      "defending": 0,
      "physicality": 0,
    },
    playersList:[],
    isOpen: false,
    image: '' 
   }
  },
  actions: {
    listPlayer(pagination:number){
      // let page = 1
      // console.log(pagination);
      // if (pagination == 0)

      
      getPlayersList(pagination)
      .then((res) => {
        console.log(res.items);
        this.playersList = res.items;
      })
      .catch((error: Error) => {
        console.log(error);
      });
    },
    getPlayerValues(id:number){
      getPlayerSelected(id)
      .then((res) => {
        console.log("hola");
        
        console.log(res.player);
        this.selectedPlayer = res.player;
        this.isOpen = true;
        // this.playersList = res.data.items;
      })
      .catch((error: Error) => {
        console.log(error);
      });
    },
    closeModal(){
      this.isOpen = false;
    }
  },
});

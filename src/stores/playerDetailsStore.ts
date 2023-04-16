import { defineStore } from "pinia";
import { getPlayersList, getPlayerSelected, getImagePlayerSelected } from '../services/futdbService'
import { IstatePlayer, selectedPlayer } from '../interfaces/players.interface'

export const usePlayersStore = defineStore("playersStore", {
  state: ():IstatePlayer => {
   return{
    selectedPlayer:{
        id:0,
        name:'',
        position: 0,
        gamePostion:''
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
        console.log(res.data.items);
        this.playersList = res.data.items;
      })
      .catch((error: Error) => {
        console.log(error);
      });
    },
    getPlayerValues(id:number){
      getPlayerSelected(id)
      .then((res) => {
        console.log("hola");
        
        console.log(res.data.player);
        this.selectedPlayer = res.data.player;
        this.isOpen = true;
        // this.playersList = res.data.items;
      })
      .catch((error: Error) => {
        console.log(error);
      });
      getImagePlayerSelected(id)
      .then((res) => {
        console.log("hola");
        
        console.log(res);
        
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

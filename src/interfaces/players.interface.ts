export interface selectedPlayer{
  id: number;
  name:string; 
  position: number;
  gamePostion:string
}
export interface IstatePlayer{
  selectedPlayer:selectedPlayer,
  playersList :selectedPlayer[],
  isOpen: boolean,
  image: string
}
// export interface Player{
//     id: number;
//     name:string;    
//   }
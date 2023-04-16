import { IPaginate } from "./pagination.interface";

export interface selectedPlayer {
  "id": number,
  "resourceId": number,
  "resourceBaseId": number,
  "futBinId": number,
  "futWizId": number,
  "firstName": string,
  "lastName": string,
  "name": string,
  "commonName": string,
  "height": number,
  "weight": number,
  "birthDate": string,
  "age": number,
  "league": number,
  "nation": number,
  "club": number,
  "rarity": number,
  "traits": [],
  "specialities": [],
  "position": string,
  "skillMoves": number,
  "weakFoot": number,
  "foot": "Right",
  "attackWorkRate": string,
  "defenseWorkRate": string,
  "totalStats": number,
  "totalStatsInGame": number,
  "color": string,
  "rating": number,
  "ratingAverage": number,
  "pace": number,
  "shooting": number,
  "passing": number,
  "dribbling": number,
  "defending": number,
  "physicality": number,
}
export interface IStatePlayer {
  selectedPlayer: selectedPlayer;
  playersList: selectedPlayer[];
  isOpen: boolean;
  image: string;
}
export interface IResponsePlayerSelected {
  player: selectedPlayer;
  
}

export interface IResponseClubs {
  pagination: IPaginate;
  items: IPlayers[];
}
export interface IPlayers {
  "id": number,
  "resourceId": number,
  "resourceBaseId": number,
  "futBinId": number,
  "futWizId": string,
  "firstName": string,
  "lastName": string,
  "name": string,
  "commonName": string,
  "height": number,
  "weight": number,
  "birthDate": Date,
  "age": number,
  "league": number,
  "nation": number,
  "club": number,
  "rarity": number,
  "traits":[]
}
// export interface Player{
//     id: number;
//     name:string;
//   }

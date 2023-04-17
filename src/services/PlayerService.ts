import { futdbApi } from '../config/futdbApi';
import { IResponsePlayerSelected, IStatePlayer } from '../interfaces/players.interface';

export const getPlayersList = (page:number): Promise<IStatePlayer[]>  => futdbApi.get("players?page="+page).then((res)=>res.data.items);
export const getPlayerSelected = (id:number): Promise<IResponsePlayerSelected[]>  => futdbApi.get("players/" + id).then((res)=>res.data.player);

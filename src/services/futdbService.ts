import { futdbApi } from '../config/futdbApi';
import { IResponsePlayerSelected, IPlayers } from '../interfaces/players.interface';

export const getPlayersList = (page:number): Promise<IPlayers[]>  => futdbApi.get("players?page="+page).then((res)=>res.data);
export const getPlayerSelected = (id:number): Promise<IResponsePlayerSelected[]>  => futdbApi.get("players/" + id).then((res)=>res.data);

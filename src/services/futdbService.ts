import { futdbApi } from '../config/futdbApi';
import { selectedPlayer } from '../interfaces/players.interface';

export const getPlayersList = (page:number): Promise<selectedPlayer[]>  => futdbApi.get("players?page="+page);
export const getPlayerSelected = (id:number): Promise<selectedPlayer[]>  => futdbApi.get("players/" + id);
export const getImagePlayerSelected = (id:number): Promise<selectedPlayer[]>  => futdbApi.get("players/" + id + "/image");
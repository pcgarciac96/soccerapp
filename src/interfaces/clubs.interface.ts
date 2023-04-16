import { IPaginate } from "./pagination.interface";

export interface IResponseClubs {
  pagination: IPaginate;
  items: IClubs[];
}
export interface IClubs {
  id: number;
  name: string;
  league: number;
}

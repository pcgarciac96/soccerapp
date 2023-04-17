import { futdbApi } from "../config/futdbApi";
import { IClubs } from "../interfaces/clubs.interface";

export const getClubList = (): Promise<IClubs[]> =>
  futdbApi.get("clubs").then((res) => res.data.items);

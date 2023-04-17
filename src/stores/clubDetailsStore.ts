import { defineStore } from "pinia";
import { IClubs } from "../interfaces/clubs.interface";

export const useClubsStore = defineStore("clubsStore", {
  state: (): {
    clubList: IClubs[];
    clubListBackup: IClubs[];
  } => {
    return {
      clubList: [],
      clubListBackup: [],
    };
  },
  actions: {
    setClubs(clubs: IClubs[]) {
      this.clubList = clubs;
      this.clubListBackup = clubs;
    },
    searchClub(searchText: string) {
      this.clubList = this.clubListBackup.filter((club) =>
        club.name.includes(searchText)
      );
    },
  },
});

<template>
  <SearchField />
  <Table />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Table from "../components/Table.vue";
import SearchField from "../components/SeachField.vue";
import { useClubsStore } from "../stores/clubDetailsStore";
import { getClubList } from "../services/ClubService";
import { IClubs } from "../interfaces/clubs.interface";
export default defineComponent({
  components: {
    Table,
    SearchField,
  },
  setup() {
    const prueba = useClubsStore();
    onMounted(() => {
      getClubList().then((res: IClubs[]) => {
        console.log(res);

        prueba.setClubs(res);
      });
    });
  },
});
</script>
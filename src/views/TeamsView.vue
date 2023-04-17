<template>
  <div class="mt-20">
    <SearchField />
    <Table />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Table from "../components/Table.vue";
import SearchField from "../components/SearchField.vue";
import { useClubsStore } from "../stores/clubDetailsStore";
import { getClubList } from "../services/ClubService";
import { IClubs } from "../interfaces/clubs.interface";
export default defineComponent({
  components: {
    Table,
    SearchField,
  },
  setup() {
    const clubStore = useClubsStore();
    onMounted(() => {
      getClubList().then((res: IClubs[]) => {
        clubStore.setClubs(res);
      });
    });
  },
});
</script>
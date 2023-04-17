<template>
  <div class="overflow-x-auto p-8">
    <table class="min-w-full border-collapse block md:table">
      <thead class="block md:table-header-group">
        <tr
          class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative"
        >
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            id
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Equipo
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            liga
          </th>
        </tr>
      </thead>
      <tbody
        class="block md:table-row-group"
        v-for="(item, i) in clubsStore.clubList"
        :key="i"
      >
        <tr
          class="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
        >
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">Name</span
            >{{ item.id }}
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">User Name</span
            >{{ item.name }}
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold"
              >Email Address</span
            >{{ item.league }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useClubsStore } from "../stores/clubDetailsStore";
export default defineComponent({
  setup() {
    const clubsStore = useClubsStore();
	return {
		clubsStore
	}
  },
});
</script>
<template>
  <section class="py-10 bg-gray-100 mt-20">
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <article
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
        v-for="(plan, i) in playersStore.playersList"
        :key="i"
      >
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/images/descarga.jfif" alt="Player Image" />
        </div>

        <div class="mt-1 p-2">
          <h2 ref="name" class="text-slate-700">{{ plan.name }}</h2>
          <h2 class="text-slate-700">{{ plan.position }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ i }}</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold text-blue-500">{{ plan.id }}</p>

            <button
              @click="getPlayerValues(plan.id)"
              class="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </article>
      <Modal v-if="playersStore.isOpen" />
    </div>
    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li class="mx-12">
            <button
              @click="prevPage()"
              class="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              Anterior
            </button>
          </li>

          <li class="mx-12">
            <button
              @click="nextPage()"
              class="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getPlayersList, getPlayerSelected } from "../services/PlayerService";
import { usePlayersStore } from "../stores/playerDetailsStore";
import Modal from "../components/ModalDetailsPlayers.vue";
import { IStatePlayer } from "../interfaces/players.interface";
export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    let page = ref(1);
    const playersStore = usePlayersStore();
    onMounted(() => {
      getPlayersList(1).then((res: IStatePlayer[]) => {
        playersStore.setPlayers(res);
      });
    });

    const getPlayerValues = (id: number) => {
      getPlayerSelected(id)
        .then((res: IStatePlayer[]) => {
          playersStore.getPlayerSelected(res);
          playersStore.isOpen = true;
        })
        .catch((error: Error) => {
          console.log(error);
        });
    };

    const nextPage = () => {
      if (playersStore.playersList.length === 0) {
        return;
      }
      getPlayersList(page.value + 1).then((res: IStatePlayer[]) => {
        playersStore.setPlayers(res);
      });
      page.value++;
    };

    const prevPage = () => {
      if (page.value === 0) {
        return;
      }
      getPlayersList(page.value - 1).then((res: IStatePlayer[]) => {
        playersStore.setPlayers(res);
      });
      page.value--;
    };

    return { page, playersStore, nextPage, prevPage, getPlayerValues };
  },
});
</script>
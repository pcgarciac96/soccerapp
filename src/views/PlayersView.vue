<template>
  <section class="py-10 bg-gray-100">
    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li class="page-item">
            <button
              @click="prevPage()"
              class="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              Anterior
            </button>
          </li>

          <li class="page-item">
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
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <article
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl "
        v-for="(plan, i) in playersList"
        :key="i"
      >
       
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Hotel Photo"
            />
            <div
              class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <button class="text-sm">Add to cart</button>
            </div>
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
      <Modal v-if="isOpen" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { usePlayersStore } from "../stores/playerDetailsStore";
import Modal from "../components/ModalDetailsPlayers.vue";
export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    return { page: 1 };
  },
  methods: {
    ...mapActions(usePlayersStore, [
      "listPlayer",
      "getPlayerValues",
      "closeModal",
    ]),

    nextPage() {
      if (this.playersList.length === 0) {
        return;
      }
      this.listPlayer(this.page + 1);
      this.page++;
    },
    prevPage() {
      if (this.page === 0) {
        return;
      }
      this.listPlayer(this.page - 1);
      this.page--;
    },
  },
  computed: {
    ...mapState(usePlayersStore, ["playersList", "isOpen"]),
  },
  mounted() {
    this.listPlayer(1);
  },
});
</script>
<template>
  <div class="modal" v-if="playerStore.isOpen">
    <div class="flex items-center justify-center modal-overlay">
      <div
        class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
      >
        <img
          class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="product designer"
        />
        <h1 class="text-lg text-gray-700">{{playerStore.selectedPlayer.name}}</h1>
        <h3 class="text-sm text-gray-400">Creative Director</h3>
        <p class="text-xs text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
          @click="prueba()"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import { mapState, mapActions } from "pinia";
import { defineComponent } from "vue";
import { usePlayersStore } from "../stores/playerDetailsStore";

export default defineComponent({
name: "ModalDetailsPlayers",
  setup() {
    const playerStore = usePlayersStore()
    const prueba = () =>{
      console.log("hola");
      playerStore.closeModal();
    }
    return{prueba, playerStore}
  },
  // methods: {
  //   ...mapActions(usePlayersStore, ["getPlayerValues", "closeModal"]),
  // },
  // computed: {
  //   ...mapState(usePlayersStore, ["selectedPlayer", "isOpen"]),
  // },
});
// console.log(modalStore);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 400px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
}

.modal-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.modal-body {
  font-size: 18px;
  margin-bottom: 16px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
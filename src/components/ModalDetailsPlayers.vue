<template>
  <div class="modal" v-if="playerStore.isOpen">
    <div class="flex items-center justify-center modal-overlay">
      <div
        class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs w-full"
      >
        <img
          class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src="../assets/images/descarga.jfif"
          alt="product designer"
        />
        <h1 class="text-lg text-gray-700">
          {{ playerStore.selectedPlayer.name }}
        </h1>
        <h3 class="text-sm text-gray-400">
          {{ playerStore.selectedPlayer.birthDate }}
        </h3>
        <h3 class="text-sm text-gray-400">
          edad: {{ playerStore.selectedPlayer.age }}
        </h3>
        <h3 class="text-sm text-gray-400">
          liga: {{ playerStore.selectedPlayer.league }}
        </h3>
        <h3 class="text-sm text-gray-400">
          Estatura: {{ playerStore.selectedPlayer.height }}
        </h3>
        <h3 class="text-sm text-gray-400">
          Posición: {{ playerStore.selectedPlayer.position }}
        </h3>

        <button
          class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
          @click="eventModalClose()"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from "vue";
import { usePlayersStore } from "../stores/playerDetailsStore";

export default defineComponent({
  name: "ModalDetailsPlayers",
  setup() {
    const playerStore = usePlayersStore();
    
    const eventModalClose = () => {
      playerStore.closeModal();
    };
    return { eventModalClose, playerStore };
  },
});
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
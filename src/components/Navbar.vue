<template>
  <header class="fixed w-full top-0 z-50">
    <div class="bg-white">
      <div class="md:grid grid-cols-3 gap-3 hidden">
        <div></div>
        <div>
          <img
            alt="logo"
            class="w-32 md:ml-40"
            src=""
            @click="$router.push('/')"
          />
        </div>
        <div></div>
      </div>
    </div>
    <div class="fixed w-full z-50">
      <nav class="bg-white shadow-xl">
        <div class="lg:flex lg:items-center md:justify-center justify-between">
          <div class="">
            <div class="flex items-center justify-between">
              <img
                alt="logo"
                class="w-36 ml-5 md:ml-32 mt-3 md:hidden flex"
                src=""
                @click="$router.push('/')"
              />
              <div class="md:flex lg:hidden bg-gradient-to-r to-gray-100">
                <button
                  @click="openMenu()"
                  type="button"
                  class="text-black hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="w-6 h-6 mr-5 mt-5 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="lg:flex"
              v-bind="{ block: showMenu, hidden: !showMenu }"
            >
              <ul
                class="bg-white-600 md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0"
              >
                <li class="bg-white h-8 px-2">
                  <router-link
                    to="/"
                    class="h-8 bg-gradient-to-r from-[##deedfa] to-gray-100 md:list-item block text-md font-semibold text-cyan-500 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-900"
                  >
                    Jugadores
                  </router-link>
                </li>

                <li class="bg-white h-8 px-2">
                  <router-link
                    to="/Teams"
                    class="h-8 bg-gradient-to-r from-[##deedfa] to-gray-100 md:list-item block md:ml-3 ml-0 text-md font-semibold text-cyan-500 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-900"
                  >
                    <span>Equipos</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    array: Array,
  },
  setup() {
    let showMenu = ref(false);
    function openMenu() {
      showMenu.value = !showMenu.value;
    }

    return {
      openMenu,
      showMenu,
    };
  },
};
</script>

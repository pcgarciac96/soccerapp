<template>
  <div class="flex justify-center">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li class="page-item" @click="prevPage()">
          <button
            @click="prevPage()"
            class="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
          >
            Anterior
          </button>
        </li>

        <li class="page-item" @click="nextPage()">
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
</template>
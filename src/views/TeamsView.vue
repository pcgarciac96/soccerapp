<template>
   <SearchField/>
    <Table/>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import Table from '../components/Table.vue'
import SearchField from '../components/SeachField.vue'
onMounted(() => {
  console.log("hola");
  
});
</script>
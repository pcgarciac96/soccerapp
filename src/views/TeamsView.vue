<template>
    <Table/>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import Table from '../components/Table.vue'
onMounted(() => {
  console.log("hola");
  
});
</script>
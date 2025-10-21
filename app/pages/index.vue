<template>
  <div class="text-purple-600">
    <h1>Código ao Ponto</h1>

    {{ data }}
  </div>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);

console.log(data.value);
</script>

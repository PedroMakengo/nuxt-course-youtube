<template>
  <div class="text-white">
    <div class="flex flex-wrap w-full max-w-[1224px] gap-4 mx-auto p-4">
      <div
        v-for="(currentCharacter, index) in data.results"
        :key="index"
        class="bg-[#313234] rounded-lg"
      >
        <img :src="currentCharacter.image" height="200" width="262" />
        <div class="grid grid-cols-[1fr, 48px]">
          <p>{{ currentCharacter.name }}</p>
          <p>{{ currentCharacter.status }}</p>
          <p>{{ currentCharacter.species }}</p>
          <p>{{ currentCharacter.origin.name }}</p>
          <span></span>
        </div>
        <NuxtLink :to="currentCharacter.url">Saiba Mais</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);

console.log(data.value);
</script>

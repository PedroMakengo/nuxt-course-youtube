<template>
  <section class="flex flex-col flex-wrap w-full max-w-[1224px] gap-8 mx-auto">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <ListingHeader title="Personagens" />

      <div class="flex flex-wrap gap-4 justify-center">
        <Card v-for="(currentCharacter, index) in data.results" :key="index">
          <img
            :src="currentCharacter.image"
            height="200"
            width="262"
            class="rounded-2xl h-[200px] object-cover"
          />

          <div class="grid grid-cols-[1fr,48px] text-white">
            <div class="flex flex-col gap-4">
              <p class="text-base font-bold">{{ currentCharacter.name }}</p>
              <div class="flex flex-col gap-2">
                <p>
                  {{ currentCharacter.status === "Alive" ? "Vivo" : "Morto" }}
                </p>
                <p>{{ currentCharacter.species }}</p>
                <p>{{ currentCharacter.origin.name }}</p>
              </div>
            </div>
            <span>
              <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
              <IconsHeartOutlined v-else />
            </span>
          </div>
          <SeeDocumentDetails :to="currentCharacter.url" class="mt-auto" />
        </Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);
</script>

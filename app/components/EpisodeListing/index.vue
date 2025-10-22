<template>
  <section class="flex flex-col gap-8">
    <ListingHeader title="Episódios" />

    <div class="flex gap-4 flex-wrap">
      <Card
        v-for="(currentEpisode, index) in data.results"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex gap-2 items-center">
          <IconsPlay />
          <p class="flex">
            {{ currentEpisode.name }} | {{ currentEpisode.episode }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <SeeDocumentDetails />
          <IconsHeartFilled />
        </div>
      </Card>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/episode"
);
</script>

<template>
  <NuxtLink
    :to="to"
    target="_blank"
    class="self-end bg-[#11b0c8] flex gap-2 py-[6px] pl-1 pr-2 rounded-[32px] text-sm items-center mt-auto"
  >
    <IconsInfo />
    Saiba Mais
  </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  to: String,
});
</script>

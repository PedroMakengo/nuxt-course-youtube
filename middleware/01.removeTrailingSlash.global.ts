import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const hasTrailingSlash = to.path !== "/" && to.path.endsWith("/");

  if (hasTrailingSlash) {
    const newPath = to.path.slice(0, -1);

    return navigateTo({ path: newPath, query: to.query, hash: to.hash });
  }
});

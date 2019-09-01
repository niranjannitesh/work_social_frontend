<template>
  <div class="font-sans bg-gb h-screen text-black flex flex-col overflow-hidden">
    <app-header />
    <div class="flex-1 flex">
      <app-sidebar class="hidden lg:block" />
      <no-ssr>
        <vue-custom-scrollbar class="flex-1 overflow-auto" style="height: calc(100vh - 84px)">
          <nuxt />
        </vue-custom-scrollbar>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/ui/AppHeader";
import AppSidebar from "../components/ui/AppSidebar";

export default {
  components: {
    AppHeader,
    AppSidebar,
    "vue-custom-scrollbar": () => import("vue-custom-scrollbar")
  }
};
</script>

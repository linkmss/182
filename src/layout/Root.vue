<script setup lang="ts">
import LeftSidebar from '@/components/Layout/Sidebar/LeftSidebar.vue'
import RightSidebar from '@/components/Layout/Sidebar/RightSidebar.vue'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<template>
  <div class="h-full">
    <Header />

    <div class="flex">
      <LeftSidebar />

      <div class="flex-grow">
        <slot />
      </div>

      <RightSidebar />
    </div>

    <Footer />
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Windmolens zijn wij</h1>
  </header>

  <RouterView />
</template>

<style>
  @import "../../web-library/src/lib/brand-b-tokens.css";

  body {
    margin: 0;
    padding: 2rem;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background: var(--brand-color-surface);
    color: var(--brand-color-on-surface);
  }

  h1 {
    margin-top: 0;
    font: var(--brand-font-xl);
    font-weight: bold;
  }
</style>

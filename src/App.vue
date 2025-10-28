<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b">
      <div class="max-w-6xl mx-auto px-4 h-14 flex items-center">
        <router-link to="/" class="font-semibold">Mini E-Commerce</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

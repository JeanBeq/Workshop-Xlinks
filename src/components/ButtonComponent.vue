<template>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  </script>
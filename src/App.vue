<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
    <header class="w-full bg-white bg-opacity-90 backdrop-blur-sm z-10">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-xl font-bold text-gray-800"><img class="object-cover w-40" src="/logo.png" alt=""></router-link>
        </div>
        <button @click="toggleMenu" class="md:hidden">
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
        <div :class="['md:flex', 'items-center', 'space-x-6', { 'hidden': !isMenuOpen }]">
          <div class="flex items-center">
            <router-link to="/acquereur" v-slot="{ isActive }">
              <a :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100']">Acquéreur</a>
            </router-link>
            <router-link to="/cedant" v-slot="{ isActive }">
              <a :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100']">Cédant</a>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <router-view></router-view>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">xLINKS.fr</h3>
            <p class="text-sm">La première plateforme de mise en relation pour la cession d'entreprises en France.</p>
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 class="text-lg font-semibold mb-2">Liens rapides</h4>
            <ul class="text-sm">
              <li><a href="#" class="hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="#" class="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-blue-400 transition-colors">Mentions légales</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/3">
            <h4 class="text-lg font-semibold mb-2">Suivez-nous</h4>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-blue-400 transition-colors"><Linkedin class="h-6 w-6" /></a>
              <a href="#" class="hover:text-blue-400 transition-colors"><Twitter class="h-6 w-6" /></a>
              <a href="#" class="hover:text-blue-400 transition-colors"><Facebook class="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center text-sm">
          <p>&copy; 2023 xLINKS.fr. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
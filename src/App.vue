<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Barre de navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-xl font-bold text-gray-800">XLINKS</router-link>
            </div>
          </div>
          <div class="flex items-center">
            <router-link to="/acquereur" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Acquéreur</router-link>
            <router-link to="/cedant" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Cédant</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <router-view></router-view>

    <!-- Pied de page -->
    <footer class="bg-white shadow mt-8">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Nous contacter</h3>
        <p class="text-gray-700">
          Vous avez une dernière question ? Vous souhaitez que l'on bloque un court RDV pour étudier votre projet de cession ou de reprise d'entreprise : <a href="mailto:transmission@xlinks.fr" class="text-blue-600 hover:underline">transmission@xlinks.fr</a>
        </p>
        <button-component @click="scheduleAppointment" class="mt-4">
          Bloquer un RDV directement dans notre agenda
        </button-component>
        <div class="mt-6 text-sm text-gray-500">
          <p>La solution pour reprendre une entreprise (TPE ou PME)</p>
          <p>XVAL — Evaluation d'entreprises et fonds de commerce</p>
          <p>XLINKS — newsletter de la transmission d'entreprises</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonComponent from './components/ButtonComponent.vue'

const scheduleAppointment = () => {
}
</script>
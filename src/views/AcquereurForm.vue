<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Inscription Acquéreur</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <!-- Barre de progression -->
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div :class="progressBarClass" class="h-2.5 rounded-full"></div>
              </div>
              <form @submit.prevent="submitForm">
                <!-- Étape 1: Coordonnées de l’acquéreur -->
                <div v-if="step === 1">
                  <h2 class="text-xl font-semibold mb-4">Coordonnées de l’acquéreur</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="mb-4">
                      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                      <input v-model="form.name" type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                      <input v-model="form.firstName" type="text" id="firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="company" class="block text-gray-700 text-sm font-bold mb-2">Société</label>
                      <input v-model="form.company" type="text" id="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                      <input v-model="form.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
                      <input v-model="form.phone" type="tel" id="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4 sm:col-span-2">
                      <label for="buyerType" class="block text-gray-700 text-sm font-bold mb-2">Type d’acquéreur</label>
                      <input v-model="form.buyerType" type="text" id="buyerType" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <button type="button" @click="nextStep" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Suivant
                    </button>
                  </div>
                </div>

                <!-- Étape 2: Cible recherchée -->
                <div v-if="step === 2">
                  <h2 class="text-xl font-semibold mb-4">Cible recherchée</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="mb-4 sm:col-span-2">
                      <label for="targetSector" class="block text-gray-700 text-sm font-bold mb-2">Secteurs d’activité (code NAF) visés</label>
                      <input v-model="form.targetSector" type="text" id="targetSector" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="targetEmployees" class="block text-gray-700 text-sm font-bold mb-2">Nombre de collaborateurs</label>
                      <input v-model="form.targetEmployees" type="number" id="targetEmployees" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4">
                      <label for="targetLocation" class="block text-gray-700 text-sm font-bold mb-2">Localisations géographiques</label>
                      <input v-model="form.targetLocation" type="text" id="targetLocation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                    <div class="mb-4 sm:col-span-2">
                      <label for="averageRevenue" class="block text-gray-700 text-sm font-bold mb-2">Niveau moyen de CA sur les 2 dernières années</label>
                      <input v-model="form.averageRevenue" type="number" id="averageRevenue" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <button type="button" @click="prevStep" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Précédent
                    </button>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const form = reactive({
  name: '',
  firstName: '',
  company: '',
  email: '',
  phone: '',
  buyerType: '',
  targetSector: '',
  targetEmployees: '',
  targetLocation: '',
  averageRevenue: ''
})

const step = ref(1)

const nextStep = () => {
  step.value = 2
}

const prevStep = () => {
  step.value = 1
}

const submitForm = () => {
  // Logique de soumission du formulaire
}

const progressBarClass = computed(() => {
  return step.value === 1 ? 'w-1/2 bg-blue-500' : 'w-full bg-blue-500'
})
</script>
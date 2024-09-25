<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Inscription Cédant</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="mb-4">
                    <label for="companyValue" class="block text-gray-700 text-sm font-bold mb-2">Valeur estimée de l'entreprise</label>
                    <input v-model="form.companyValue" type="number" id="companyValue" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="sector" class="block text-gray-700 text-sm font-bold mb-2">Secteur d'activité</label>
                    <input v-model="form.sector" type="text" id="sector" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="nafCode" class="block text-gray-700 text-sm font-bold mb-2">Code NAF</label>
                    <input v-model="form.nafCode" type="text" id="nafCode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="employeeSize" class="block text-gray-700 text-sm font-bold mb-2">Taille d’effectif</label>
                    <input v-model="form.employeeSize" type="number" id="employeeSize" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="location" class="block text-gray-700 text-sm font-bold mb-2">Localisation de l’entreprise</label>
                    <input v-model="form.location" type="text" id="location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="revenue" class="block text-gray-700 text-sm font-bold mb-2">Niveau de CA</label>
                    <input v-model="form.revenue" type="number" id="revenue" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4 sm:col-span-2">
                    <label for="tc" class="block text-gray-700 text-sm font-bold mb-2">TC</label>
                    <input v-model="form.tc" type="text" id="tc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    S'inscrire
                  </button>
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
import { reactive } from 'vue'

const form = reactive({
  companyValue: '',
  sector: '',
  nafCode: '',
  employeeSize: '',
  location: '',
  revenue: '',
  tc: ''
})

const submitForm = () => {
  // Logique de soumission du formulaire
}
</script>
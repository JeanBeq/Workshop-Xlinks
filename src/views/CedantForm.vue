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
                    <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                    <input v-model="form.firstName" type="text" id="firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                    <input v-model="form.lastName" type="text" id="lastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input v-model="form.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
                    <input v-model="form.phone" type="tel" id="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="companyName" class="block text-gray-700 text-sm font-bold mb-2">Nom de l'entreprise</label>
                    <input v-model="form.companyName" type="text" id="companyName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="naf" class="block text-gray-700 text-sm font-bold mb-2">Code NAF</label>
                    <input v-model="form.naf" type="text" id="naf" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="nbCollaborator" class="block text-gray-700 text-sm font-bold mb-2">Nombre de collaborateurs</label>
                    <input v-model="form.nbCollaborator" type="number" id="nbCollaborator" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="location" class="block text-gray-700 text-sm font-bold mb-2">Localisation de l’entreprise</label>
                    <input v-model="form.location" type="text" id="location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="averageTurnover" class="block text-gray-700 text-sm font-bold mb-2">Niveau moyen de CA</label>
                    <input v-model="form.averageTurnover" type="number" id="averageTurnover" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Prix</label>
                    <input v-model="form.price" type="number" id="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  </div>
                  <div class="mb-4">
                    <label for="dateOffre" class="block text-gray-700 text-sm font-bold mb-2">Date de l'offre</label>
                    <input v-model="form.dateOffre" type="date" id="dateOffre" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
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
import axios from 'axios'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  naf: '',
  nbCollaborator: '',
  location: '',
  averageTurnover: '',
  price: '',
  dateOffre: ''
})

const resetForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.companyName = ''
  form.naf = ''
  form.nbCollaborator = ''
  form.location = ''
  form.averageTurnover = ''
  form.price = ''
  form.dateOffre = ''
}

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/company/create', {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      company_name: form.companyName,
      naf: form.naf,
      nb_collaborator: form.nbCollaborator,
      location: form.location,
      average_turnover: form.averageTurnover,
      price: form.price,
      date_offre: form.dateOffre
    })
    if (response.status === 200) {
      console.log('Form submitted successfully:', response.data)
      resetForm()
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>
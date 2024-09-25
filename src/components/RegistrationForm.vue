<template>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Adresse email *</label>
        <input v-model="form.email" type="email" id="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom *</label>
        <input v-model="form.firstName" type="text" id="firstName" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Nom *</label>
        <input v-model="form.lastName" type="text" id="lastName" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone portable</label>
        <input v-model="form.phone" type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div>
        <label for="project" class="block text-sm font-medium text-gray-700">Projet (secteurs / localisation / investissement) *</label>
        <textarea v-model="form.project" id="project" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="3"></textarea>
      </div>
      <div>
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          S'inscrire
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    project: ''
  })
  
  const submitForm = () => {
    // Logique pour soumettre le formulaire
    console.log('Formulaire soumis:', form)
    // Réinitialiser le formulaire ou rediriger l'utilisateur
    alert('Merci pour votre inscription ! Vous recevrez bientôt notre newsletter.')
  }
  </script>
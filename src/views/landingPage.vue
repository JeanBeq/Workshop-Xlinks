<template>
    <div class="min-h-screen bg-gray-100">
      <main>
        <!-- Section principale -->
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Présentation de la newsletter -->
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 mb-6">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              XLINKS - La newsletter de la cession d'entreprises
            </h1>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Chaque lundi, recevez directement dans votre boite email le dossier complet de 3 entreprises "sélectionnées" à transmettre ou reprendre.
            </h2>
            <div class="mt-4 space-x-4">
              <router-link to="/acquereur" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Je suis acquéreur
              </router-link>
              <router-link to="/cedant" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Je suis cédant
              </router-link>
            </div>
          </div>
  
          <!-- Dossiers qualifiés -->
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Des dossiers qualifiés</h3>
            <p class="text-gray-700">
              Chaque lundi, nous vous transmettons 3 dossiers "qualifiés" d'entreprise à reprendre. Vous avez ensuite 7 jours pour vous positionner, et débuter le processus de transmission de manière exclusive directement avec le cédant et/ou son conseil.
            </p>
            <p class="text-gray-700 mt-4">
              PME ou TPE - Tous secteurs d'activité - de 100 KEUR à 10 MEUR de CA
            </p>
          </div>
  
          <!-- Statistiques -->
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">12 456 repreneurs enregistrés !</h3>
            <p class="text-gray-700">
              Décembre 2022 : 6 780 entreprises en recherche de croissance externe / 4 896 repreneurs individuels / 436 Fonds d'investissement / 344 conseils
            </p>
            <p class="text-gray-700 mt-4">
              xLINKS.fr est la première base de données de repreneurs d'entreprises en France. Notre processus de diffusion vous garantit la plus large diffusion en toute confidentialité : <a href="#" class="text-blue-600 hover:underline">en savoir plus</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  // Pas besoin de logique supplémentaire ici
  </script>
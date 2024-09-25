<template>
  <main class="container mx-auto px-4 pt-24">
    <section id="newsletter" class="py-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">La newsletter de la cession d'entreprises</h1>
      <p class="text-xl text-center mb-8 max-w-2xl mx-auto">
        Chaque lundi, recevez directement dans votre boite email le dossier complet de 3 entreprises "sélectionnées" à transmettre ou reprendre.
      </p>
    </section>

    <section id="dossiers" class="py-20">
      <h2 class="text-3xl font-bold mb-6">Des dossiers qualifiés</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <FileCheck class="h-12 w-12 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Processus exclusif</h3>
          <p>
            Vous avez 7 jours pour vous positionner et débuter le processus de transmission de manière exclusive directement avec le cédant et/ou son conseil.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <Building2 class="h-12 w-12 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Diversité des entreprises</h3>
          <p>
            PME ou TPE - Tous secteurs d'activité - de 100 KEUR à 10 MEUR de CA
          </p>
        </div>
      </div>
    </section>

    <section id="stats" class="py-20">
      <h2 class="text-3xl font-bold mb-6 text-center">Notre communauté en chiffres</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <Users class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <p class="text-3xl font-bold">12 456</p>
          <p class="text-gray-600">Repreneurs enregistrés</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <Building class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <p class="text-3xl font-bold">6 780</p>
          <p class="text-gray-600">Entreprises en recherche</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <UserPlus class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <p class="text-3xl font-bold">4 896</p>
          <p class="text-gray-600">Repreneurs individuels</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <Briefcase class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <p class="text-3xl font-bold">780</p>
          <p class="text-gray-600">Fonds et conseils</p>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20">
      <h2 class="text-3xl font-bold mb-6">Vous souhaitez diffuser une opportunité d'acquisition ?</h2>
      <p class="mb-4">
        Que vous souhaitiez transmettre votre entreprise ou que vous interveniez en tant que conseil d'un cédant, xLINKS.fr est la solution rapide et simple pour présenter votre dossier auprès de la plus grande base de repreneurs en France.
      </p>
      <p class="mb-6">
        Notre processus vous garantit la plus grande confidentialité.
      </p>
      <router-link to="/cedant" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
        Je m'enregistre
      </router-link>
    </section>
  </main>
</template>

<script setup>
import {Briefcase, Building, Building2, FileCheck, UserPlus, Users} from "lucide-vue-next";
</script>
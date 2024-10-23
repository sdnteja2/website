<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <div class="w-full bg-merah-600 flex items-center justify-between h-16 px-6 shadow-md">
        <!-- School Logo -->
        <UButton class="text-white text-lg" to="/">
          <!-- <img src="/logo.png" alt="School Logo" class="h-10" /> -->
          LOGO
        </UButton>

        <!-- Navigation Links -->
        <div class="flex space-x-6">
          <UButton class="text-white text-sm" to="/">
            Home
          </UButton>
          <UButton class="text-white text-sm" to="/about">
            About Us
          </UButton>
          <UButton class="text-white text-sm" to="/admissions">
            Admissions
          </UButton>
          <UButton class="text-white text-sm" to="/contact">
            Contact
          </UButton>
        </div>

        <!-- Dark Mode Toggle -->
        <div class="flex items-center">
          <DarkMode />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Customize the appearance of the buttons and navbar as needed */
</style>

<template>
  <footer class="bg-custom-green text-white py-8 px-4 mb-20">
    <div class="max-w-7xl mx-auto text-start">
      
      <!-- Kontakt -->
      <div class="mb-6">
        <a href="/kontakt" class="tracking-wider mb-2 focus:outline-none text-white hover:text-blue-400">
          Kontakt
        </a>
      </div>
      
      <!-- Impressum -->
      <div class="mb-6">
        <a href="/impressum" class="tracking-wider mb-2 focus:outline-none text-white hover:text-blue-400">
          Impressum
        </a>
      </div>

      <!-- Datenschutz -->
      <div class="mb-6">
        <a href="/datenschutz" class="tracking-wider mb-2 focus:outline-none text-white hover:text-blue-400">
          Datenschutz
        </a>
      </div>

      <!-- Copyright -->
      <div class="mt-4">
        <a href="/copyright" class="text-white hover:text-blue-400">© 2024 Zenesis. Alle Rechte vorbehalten.</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
footer {
  background-color: rgba(26, 43, 26, 1); /* Set the background color */
}

footer a {
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  text-transform: none; /* Remove uppercase transformation */
  font-weight: normal; /* Ensure normal font weight */
}

footer a:hover {
  color: #63b3ed;
}
</style>

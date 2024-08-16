<template>
  <div
    id="contact-call-mail"
    class="fixed bottom-0 left-0 right-0 flex justify-around bg-custom-green py-4 shadow-md md:hidden opacity-0 transition-opacity duration-500"
  >
    <a href="mailto:info@zenesis.de" class="flex flex-col items-center">
      <img src="../assets/mail.svg" alt="Email" class="h-9 w-9">
      <span class="text-xs text-white">E-Mail</span>
    </a>
    <a href="tel:+491234567890" class="flex flex-col items-center">
      <img src="../assets/call.svg" alt="Anrufen" class="h-9 w-9">
      <span class="text-xs text-white">Anruf</span>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      const footer = document.getElementById('contact-call-mail');
      
      if (scrollPosition >= documentHeight - 100) { // 100px from the bottom
        footer.style.opacity = '1';
      } else {
        footer.style.opacity = '0';
      }
    }
  }
}
</script>

<style scoped>
#contact-call-mail {
  background-color: rgba(26, 43, 26, 1); /* custom green background color */
}

/* Hide the contact-call-mail block on larger screens */
@media (min-width: 768px) {
  #contact-call-mail {
    display: none;
  }
}
</style>

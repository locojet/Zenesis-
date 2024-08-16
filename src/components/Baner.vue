<template>
  <div id="sec-0" class="foto-container relative w-full overflow-hidden bg-secondary">
    <!-- Overlay hinzufügen -->
    <div class="absolute inset-0 bg-secondary2 opacity-70"></div>
    <img class="picture-room" src="../assets/banner.jpg" >
    
    <div class=" haupt-ueberschrift absolute texto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 text-center  md:text-center">
      <h1 class="text-white  font-bold text-4xl -mt-20 sm:text-3xl sm:-mt-20  md:text-3xl md:mt-40 lg:text-4xl lg:-mt-18 ">
        Ihre persönliche Oase der Stille
      </h1>
      <div class="img-container">
    <button class="styled-button">Buchen</button>
  </div>
      
    </div>
    
  </div>
</template>

<style>
@media (max-width: 768px) {
  .foto-container {
    width: 100%;
    height: 75vh; /* Höhere Höhe in kleineren Bildschirmen */
    
    
    
  }

  

  

  .picture-room{
    height: 500px;
    object-fit: cover;
  }
  
.texto{
  margin-top: 7rem;
}

.haupt-ueberschrift {
  margin-top: 10rem;
}

  
  

}
@media (min-width: 768px) {
  .foto-container {
    height: 500px; /* Standardhöhe für größere Bildschirme */
  }

  .picture-room {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .absolute {
    
    padding: 4rem;
    margin-left: -1rem;
    
  }
  h1{
    margin-bottom: 2rem;
    margin-top: 9rem;
  }
  
}
</style>
<script>
export default {
  name: 'ParallaxSection',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const texto = document.querySelector('.texto');
      const scrollSpeed = 0.5;
      const scrolled = window.scrollY;

      if (texto) {
        texto.style.transform = `translate(-50%, -50%) translateY(${scrolled * scrollSpeed}px)`;
      }
    }
  }
};
</script>


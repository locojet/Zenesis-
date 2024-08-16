<template>
  <div id="sec-0" class="foto-container relative w-full overflow-hidden bg-primary">
    <!-- Overlay hinzufügen -->
    <div class="absolute inset-0 bg-secondary2 opacity-70"></div>
    <img class="picture-room" src="../assets/banner.jpg">

    <div class="haupt-ueberschrift absolute texto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
      <img class="ueberschrift-image" src="../assets/ueberschrift.png" alt="Überschrift">
      <div class="img-container mt-4">
        <button class="styled-button">Buchen</button>
      </div>
    </div>
  </div>
</template>

<style>
.foto-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--secondary); /* Ensure you have this color defined */
}

.picture-room {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.haupt-ueberschrift {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
}

.ueberschrift-image {
  width: 80%; /* Adjust the size of the image */
  max-width: 400px; /* Maximum width */
  margin-bottom: 2rem; /* Space below the image */
}

.styled-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4F627A; /* Button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #364f36; /* Hover color */
}

/* Mobile view */
@media (max-width: 768px) {
  .foto-container {
    height: 95vh; /* Adjust height for smaller screens */
  }

  .picture-room {
    
    height: 900px;
  }

  .haupt-ueberschrift {
    padding: 0 1rem;
    margin-top: 8rem;
  }
  .ueberschrift-image {
    width: 100%; /* Make image larger */
    max-width: 600px; /* Increase max-width */
   
  }
}

/* Larger screens */
@media (min-width: 768px) {
  .foto-container {
    height: 500px;
  }

  .haupt-ueberschrift {
    
    margin-top: 7rem;
  }

  .absolute {
    padding: 4rem;
  }

  .ueberschrift-image {
    max-width: 700px;
    margin-bottom: -2rem;
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

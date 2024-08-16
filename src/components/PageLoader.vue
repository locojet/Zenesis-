<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube">
      <img src="../assets/logoweisklein.png" alt="Logo">
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState === "complete") { 
          this.isloaded = true;
        } 
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(26, 43, 26, 1);
    z-index: 9999;
  }

  .cube {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px; /* Ajuste del ancho */
    height: 150px; /* Ajuste del alto */
    overflow: hidden;
    border-radius: 50%;
    animation: zoom 3s infinite alternate;

    img {
      width: 100%; /* Ajuste del ancho */
      height: auto;
      display: block;
    }

    .dots {
      display: flex;
      justify-content: space-between;
      width: 60px;
      margin-top: 10px;

      .dot {
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        animation: bounce 1.5s infinite;
      }

      .dot:nth-child(2) {
        animation-delay: 0.3s;
      }

      .dot:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.5);
    }
  }
</style>

<template>
  <div id="sec-1" class="bg-white py-24 sm:py-32 p-4 -mt-6 max-w-7xl">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight -mt-6 text-gray-900 sm:text-4xl text-center">Entfliehen Sie dem digitalen Lärm und finden Sie innere Ruhe.</h2>
        <p class="mt-0 text-lg leading-8 text-gray-600 text-center sm:-mb-5">Unsere Räume bieten Ihnen eine vollständige Auszeit von elektromagnetischen Strahlungen, WLAN und städtischem Lärm. Tauchen Sie ein in eine Welt der Ruhe und Entspannung.</p>
      </div>
      <div class="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-9 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        <!-- Entspannung in strahlungsfreien Räumen -->
        <article class="flex flex-col text-justify m-5 pt-0">
          <img src="../assets/foto-1.jpg" alt="Strahlungsfrei" class="w-full h-48 object-cover rounded-lg mb-4">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Strahlungsfrei</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">
                Entspannung in strahlungsfreien Räumen
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6">Unsere Räume sind komplett frei von elektromagnetischen Strahlungen, um Ihnen ein störungsfreies und gesundes Entspannungserlebnis zu bieten.</p>
          </div>
        </article>

        <!-- Ruhe und Stille -->
        <article class="flex flex-col text-justify m-5">
          <img src="../assets/foto-2.jpg" alt="Stille" class="w-full h-48 object-cover rounded-lg mb-4">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Stille</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">
                Ruhe und Stille
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6">Genießen Sie eine ununterbrochene Stille, ideal für Meditation, Nachdenken und tiefe Entspannung, fernab vom urbanen Lärm.</p>
          </div>
        </article>

        <!-- Rückzugsort für Hochsensible -->
        <article class="flex flex-col text-justify m-5">
          <img src="../assets/foto-3.jpg" alt="Hochsensibel" class="w-full h-48 object-cover rounded-lg mb-4">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Hochsensibel</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">
                Rückzugsort für Hochsensible
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6">Perfekt geeignet für Menschen mit Sensibilität gegenüber moderner Technologie und Reizüberflutung.</p>
          </div>
        </article>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const articles = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Artikel wird sichtbar und bleibt sichtbar
        entry.target.classList.add('article-visible');
        entry.target.classList.remove('article-hidden');
        // Beobachten einstellen, nachdem der Artikel sichtbar wird
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  articles.value = document.querySelectorAll('article');
  articles.value.forEach(article => {
    observer.observe(article);
    article.classList.add('article-hidden');
  });
});

onBeforeUnmount(() => {
  articles.value.forEach(article => {
    observer.unobserve(article);
  });
});
</script>

<style scoped>
#sec-1 {
  max-width: 75%;
  margin: 0 auto;
  margin-top: -4rem;
}

@media screen and (max-width: 768px) {
  #sec-1 {
    max-width: 100%;
  }
}

/* Grundlegende Transition für alle Artikel */
article {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.article-hidden {
  opacity: 0;
  transform: translateX(-100px);
}

.article-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Stil für Bilder in den Artikeln */
article img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem; /* Abgerundete Ecken */
  margin-bottom: 1rem;
}
</style>


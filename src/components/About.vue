<template>
  <div id="sec-2" class="bg-gray-100 py-12 text-justify">
    <div class="mx-auto max-w-7xl p-10 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-justify">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Über uns</h2>
        <p class="mt-6 text-lg leading-8 text-gray-700">
          Willkommen bei Zenesis – einem einzigartigen Rückzugsort, der aus der Überzeugung heraus entstanden ist, dass Stille und Entspannung essentiell für unser Wohlbefinden sind. Unsere Oase bietet einen sicheren Hafen für alle, die dem hektischen Alltag und den Auswirkungen der modernen Technologie entfliehen möchten.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-700">
          Unsere Philosophie basiert auf der heilenden Kraft der Stille. Wir bieten Ihnen einen Raum, der frei von elektromagnetischen Strahlungen, WLAN und städtischem Lärm ist, um Ihnen die Möglichkeit zu geben, vollständig abzuschalten und Ihre inneren Energien zu harmonisieren.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid mb-10 max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <article class="relative pl-4">
            <dt class="text-lg font-semibold leading-7 text-gray-900">Unsere Geschichte</dt>
            <dd class="mt-2 text-base leading-6 text-gray-600">
              Die Idee für Zenesis entstand aus dem Wunsch, Menschen einen Zufluchtsort zu bieten, an dem sie den Belastungen der digitalen Welt entkommen können. Unsere Gründer, inspiriert von den positiven Effekten der Stille, schufen diese Räume, um anderen zu helfen, ihren eigenen Weg zu innerer Ruhe und Gelassenheit zu finden.
            </dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-lg font-semibold leading-7 text-gray-900">Unsere Philosophie</dt>
            <dd class="mt-2 text-base leading-6 text-gray-600">
              Wir glauben an die transformative Kraft der Stille und haben es uns zur Aufgabe gemacht, einen Ort der Entspannung und Erneuerung zu schaffen. In unserer Oase können Sie abschalten, die Natur genießen und Ihre Sinne beruhigen.
            </dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-lg font-semibold leading-7 text-gray-900">Unser Team</dt>
            <dd class="mt-2 text-base leading-6 text-gray-600">
              Unsere Gründer sind leidenschaftliche Verfechter der Stille und haben ihre Erfahrungen und Kenntnisse genutzt, um diese einzigartigen Räume zu gestalten. Mit einer tiefen Hingabe zur Förderung des Wohlbefindens sind sie bestrebt, Ihnen den besten Service zu bieten.
            </dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-lg font-semibold leading-7 text-gray-900">Unsere Mission</dt>
            <dd class="mt-2 text-base leading-6 text-gray-600">
              Wir möchten jedem Besucher eine transformative Erfahrung bieten, die Körper und Geist belebt. Unser Ziel ist es, Ihnen die Möglichkeit zu geben, die heilende Kraft der Stille zu erfahren und Ihre inneren Energien wieder ins Gleichgewicht zu bringen.
            </dd>
          </article>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const articles = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Artikel wird sichtbar und bleibt sichtbar
          entry.target.classList.add('article-visible');
          entry.target.classList.remove('article-hidden');
          // Beobachten einstellen, nachdem der Artikel sichtbar wird
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  articles.value = document.querySelectorAll('article');
  articles.value.forEach((article) => {
    observer.observe(article);
    article.classList.add('article-hidden');
  });
});

onBeforeUnmount(() => {
  articles.value.forEach((article) => {
    observer.unobserve(article);
  });
});
</script>

<style scoped>
#sec-2 {
  max-width: 95%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  #sec-2 {
    max-width: 100%;
  }
}
/* Grundlegende Transition für alle Artikel */
article {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.article-hidden {
  opacity: 0;
  transform: translateY(50px);
}

.article-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

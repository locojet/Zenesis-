<template>
  <div id="nav" class="fixed-nav-container" :style="{ 'background-color': backgroundColor }">
    <Disclosure as="nav">
      <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div class="leiste-nav relative flex items-center justify-between">
          <!-- Logo auf der linken Seite -->
          <Menu as="div" class="relative mr-5">
            <a href="index.html">
              <MenuButton>
                <img class="logo" src="../assets/logoweisklein.png" alt="Logo" />
              </MenuButton>
            </a>
          </Menu>

          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Rechte Seite für mobile Menübutton -->
            <DisclosureButton
              @click="toggleMenu"
              class="relative inline-flex items-center justify-center rounded-md p-3 text-white focus:outline-none hover:scale-105 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6 scale-150" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div class="hidden sm:flex sm:items-center sm:justify-end w-full">
            <!-- Navigation Links -->
            <div class="flex items-center space-x-6">
              <div class="flex items-center space-x-6 pr-6">
                <!-- Linke Spalte -->
                <a
                  v-for="item in leftNavigation"
                  :key="item.name"
                  @click="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:bg-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>

              <div class="border-r border-gray-300 h-10"></div>

              <div class="flex items-center space-x-6 pl-6">
                <!-- Rechte Spalte -->
                <a
                  v-for="item in rightNavigation"
                  :key="item.name"
                  @click="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:bg-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel 
        v-bind:class="{ 'opacity-0': !open, 'opacity-100': open }"
        class="transition-opacity duration-300 sm:hidden"
      >
        <div class="flex justify-between px-4 pt-3">
          <!-- Linke Spalte -->
          <div class="space-y-2">
            <DisclosureButton
              v-for="item in leftNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[item.current ? 'text-white' : 'text-white hover:bg-secondary2 hover:text-white', 'block px-4 py-3 text-base font-medium']"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>

          <!-- Rechte Spalte -->
          <div class="space-y-2 border-l border-gray-300 pl-4">
            <DisclosureButton
              v-for="item in rightNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[item.current ? 'text-white' : 'text-white hover:bg-secondary2 hover:text-white', 'block px-4 py-3 text-base font-medium']"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>


<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted, onUnmounted } from 'vue';

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const leftNavigation = ref([
  { name: 'Start', href: '#sec-0', current: false },
  { name: 'Konzept', href: '#sec-1', current: false },
]);

const rightNavigation = ref([
  { name: 'Über uns', href: '#sec-2', current: false },
  { name: 'Kontakt', href: '#sec-4', current: false },
]);

const backgroundColor = ref('transparent'); // Startfarbe auf transparent setzen

const handleScroll = () => {
  const scrolled = window.scrollY;
  backgroundColor.value = scrolled > 50 ? 'rgba(26, 43, 26, 1)' : 'transparent'; // Ändere die Farbe nach Scrollen über 50 Pixel
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-nav-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.5s ease;
}

.leiste-nav {
  height: 120px;
}

.logo {
  width: 100px;
  height: auto;
}

/* Für größere Viewports: Navigation nach rechts verschieben */
@media (min-width: 1024px) { /* Tailwind's lg: breakpoint */
  .hidden.sm\:flex {
    justify-content: flex-end; /* Verschiebt den Inhalt nach rechts */
  }
}

body {
  padding-top: 5rem;
  transition: all ease-in-out 0.5s;
}

/* Mobile View */
.sm\:flex > div:first-child {
  border-right: none;
}

.sm\:flex > div:last-child {
  border-left: none;
}

.transition-opacity {
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.opacity-0 {
  opacity: 0;
  visibility: hidden;
}

.opacity-100 {
  opacity: 1;
  visibility: visible;
}
</style>

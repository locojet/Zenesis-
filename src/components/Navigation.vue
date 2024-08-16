<template>
  <div id="nav" class="fixed-nav-container" :style="{ 'background-color': backgroundColor }">
    <Disclosure as="nav" v-slot="{ open }">
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
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-3 text-white focus:outline-none hover:scale-105 focus:ring-inset focus:ring-white transition-transform duration-300 ease-in-out">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6 scale-150 transition-transform duration-300 ease-in-out" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6 transition-transform duration-300 ease-in-out" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div class="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
            <div class="hidden sm:flex sm:space-x-10">
              <!-- Linke Spalte -->
              <div class="flex justify-end space-x-6 pr-6">
                <a
                  v-for="item in leftNavigation"
                  :key="item.name"
                  @click="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>

              <!-- Mittlerer Strich -->
              <div class="border-r border-gray-300 h-10"></div>

              <!-- Rechte Spalte -->
              <div class="flex justify-start space-x-6 pl-6">
                <a
                  v-for="item in rightNavigation"
                  :key="item.name"
                  @click="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel
        class="sm:hidden transition-transform duration-500 ease-in-out transform"
        :class="{ 'translate-x-0': open, '-translate-x-full': !open }"
      >
        <div class="flex justify-between px-4 pt-3">
          <!-- Linke Spalte -->
          <div class="space-y-2">
            <DisclosureButton
              v-for="item in leftNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              @click="scrollToSection(item.href)"
              :class="[item.current ? 'text-white' : 'text-white hover:text-white', 'block px-4 py-3 text-base font-medium']"
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
              @click="scrollToSection(item.href)"
              :class="[item.current ? 'text-white' : 'text-white hover:text-white', 'block px-4 py-3 text-base font-medium']"
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
import { ref, onMounted, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const leftNavigation = ref([
  { name: 'Start', href: '#sec-0', current: false },
  { name: 'Dienstleistung', href: '#sec-1', current: false },
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

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
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
  z-index: 1000; /* Ensure the navigation stays on top */
  transition: background-color 0.5s ease; /* Smooth transition for background color changes */
}

.leiste-nav {
  height: 120px; /* Increased height for larger space */
}

.logo {
  width: 100px;
  height: auto;
}

body {
  padding-top: 5rem; /* Increased padding-top to prevent content from overlapping with the navigation */
  transition: all ease-in-out 0.5s;
}

.sm\:flex > div:first-child {
  border-right: none; /* No right border for left group */
}

.sm\:flex > div:last-child {
  border-left: none; /* No left border for right group */
}

/* Transition for sliding in the mobile menu */
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

.translate-x-0 {
  transform: translateX(0);
}

.-translate-x-full {
  transform: translateX(-100%);
}
</style>

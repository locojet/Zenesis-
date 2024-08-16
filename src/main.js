import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialisiere AOS
AOS.init();

// Erstelle und mount die Vue-Anwendung
createApp(App).mount('#app');

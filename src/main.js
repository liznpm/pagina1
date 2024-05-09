import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue'; // Asegúrate de importar tu componente Home
import Registrado from './components/Registrado.vue'; // Importa tu componente Registrado


const app = createApp(App);

// Define el componente Home
app.component('Home', Home);
app.component('Registrado', Registrado); // Define el componente Registrado


// Configura las rutas
const routes = [
  { path: '/', component: Home },
  { path: '/registrado', component: Registrado } // Agrega la ruta para Registrado

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Usa el router en la aplicación
app.use(router);

// Monta la aplicación
app.mount('#app');

<template>
  <div id="app">
   
        <NavbarComponent />
    <HomeComponent />
   

    <RegistroComponent />  
      <RegistradoComponent />

    <FooterComponent />

  </div>
</template>

<script>
import HomeComponent from './components/Home.vue'; // Asegúrate de tener la extensión .vue aquí
import RegistroComponent from './components/Registro.vue'; // Asegúrate de tener la extensión .vue aquí
import NavbarComponent from './components/Navbar.vue'; // Asegúrate de tener la extensión .vue aquí
import RegistradoComponent from './components/Registrado.vue'; // Asegúrate de tener la extensión .vue aquí

import FooterComponent from './components/Footer.vue'; // Asegúrate de tener la extensión .vue aquí



export default {
  name: 'App',
  components: {
    HomeComponent,
    RegistroComponent,
    NavbarComponent,
    RegistradoComponent,
    FooterComponent
        

    
    
  }
}
</script>

<style>

</style>

<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand d-flex align-items-center">  
        <img :src="imagen" alt="Descripción de la imagen" class="imagen-nav">
        <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen">

      </a>
      <div class="d-flex">
         <p id="registros" class="registros">
REGISTRATE
</p>

      </div>
      <div class="d-flex mr-2" >
        <div class="icon-circle">
          <i class="bi bi-facebook icon-color"></i>
        </div>
        <div class="icon-circle">
          <i class="bi bi-instagram icon-color"></i>
        </div>
        <div class="icon-circle">
          <i class="bi bi-youtube icon-color"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      imagen: require('@/imagens/Praco.png')
    };
  }
}
</script>

<style>
.imagen-nav {
  width: 250px;  /* Cambiado a 70px */
  height: 70px; /* Cambiado a 70px */
  left: 70pX;
  position: relative;
}

.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #ffff00; /* color amarillo del círculo */
  border-radius: 50%; /* esto hace que el contenedor sea un círculo */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* color negro del fondo */
  border: 1px solid #84754E; /* borde amarillo */
      margin-right: 8px; /* Espacio horizontal */

}

.icon-color {
  color: #84754E; /* Color blanco para los íconos sobre fondo oscuro */
}
.navbar {
    background-color: #000 !important; /* Color negro */

}
.registros{
  color: white; /* Color blanco para los íconos sobre fondo oscuro */

}
.iconos{
  margin-left: 20px;
}
</style>

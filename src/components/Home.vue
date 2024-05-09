<template>
  <div class="background-image">
    <div class="grid-container">
      <div class="grid-item image">
        <img :src="imagen1" alt="Descripción de la imagen" class="image-vertical-center">
  <div class="text-container">
     <p id="text-1" class="mb-8">Este año estamos rindiendo tributo a nuestra marca <strong> Mack la cual lleva 100 años rodando por las carreteras de Colombia </strong> y queremos hacerte parte de esta celebración.</p>
      <p id="text-2" class="mb-4">Si eres dueño de un camión Mack <strong>¡YA GANASTE!, SOLO REGÍSTRATE Y RECLAMA TUS PREMIOS.</strong></p>

    </div>

      </div>
      
      <div class="grid-item info text-white">
                <img :src="imagen2" alt="Descripción de la imagen" class="gorra-vertical-center1">


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagen: require('@/imagens/Banner.jpg'),
      imagen1: require('@/imagens/Group1.png'),
            imagen2: require('@/imagens/Gorra.png')

    };
  },
  mounted() {
    const backgroundImage = `url(${this.imagen})`;
    this.$el.style.backgroundImage = backgroundImage;
  }
}
</script>

<style>

.background-image {
  position: relative;
  height: 900px; /* Ajusta la altura según tus necesidades */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 40), rgba(255, 235, 205, 1)); /* Degradado desde arriba */
}

.background-image::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px; /* Altura del degradado */
  background-image: linear-gradient(to top, rgba(0, 0, 0, 90), rgba(0, 0, 0, 0.90)); /* Degradado desde abajo */
  z-index: 1; /* Asegura que el degradado esté por encima de la imagen de fondo */
}

.image-vertical-center {
  position: absolute;
  top: 61%; /* Ajusta la posición vertical de la imagen */
  left: 60%;
  transform: translate(-60%, -50%);
  max-width: 100%;
  height: auto;
    z-index: 2; /* Asegura que el degradado esté por encima de la imagen de fondo */


}

.gorra-vertical-center1 {
  position: relative;
  top: 41%; /* Ajusta la posición vertical de la imagen */
  left: 40%;
  transform: translate(-60%, -50%);
  max-width: 100%;
  height: auto;
    z-index: 2; /* Asegura que el degradado esté por encima de la imagen de fondo */

}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.grid-item {
  display: flex;
  flex-direction: column; /* Cambia la dirección del flexbox a columna */
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
}
.image {
  position: relative;
}
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-container {
  display: flex;
  flex-direction: column; /* Alinea los párrafos en columna */
    top: 200px;
}

.text-container p {
  font-size: 18px; /* Ajusta el tamaño del texto según tus necesidades */
    top: 300px;
      position: relative; /* Cambia el valor de position a relative */
      color: white;
    z-index: 2; /* Asegura que el degradado esté por encima de la imagen de fondo */
  align-items: center;
    left: 10%;



}


.text-1{
  margin-top: 200px
}



.p{
  margin-top: 200px
}

.info h1 {
  font-size: 2.5rem; /* Ajusta el tamaño del texto según tus necesidades */
}
</style>

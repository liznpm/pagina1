<template>
  <div class="background-image1">
    <div class="grid-container">
      <img :src="imagen2" alt="Descripción de la imagen" class="image-vertical-center1">
           <div class="text-overlay">

           <div class="form-group row d-flex justify-content-center text4-container">

 <div class="mb-3 col-sm-4 col-lg-12">
          <p id="mensaje" class="mensaje" >!Gracias por registrarte!</p>
        </div>

 <div class="mb-3 col-sm-4 col-lg-12">
          <p id="text-1">Puedes reclamar tu premio en Bogotá PracoDidacol sede Calle 80.</p>
          <p id="text-2" >Dirección: Calle 80 Autopista Medellín, Km 1.2 vía Siberia Costado Sur.</p>
        </div>
        <div class="mb-3 col-sm-4 col-lg-12">
                       <img :src="imagen5" alt="Descripción de la imagen" >

               <img :src="imagen3" alt="Descripción de la imagen" >
                              <img :src="imagen6" alt="Descripción de la imagen" >


        </div>

        <div class="mb-3 col-sm-4 col-lg-12">
   <p id="comunicado" class="comunicado">Declaro que he sido informado por el grupo empresarial compuesto por las sociedades Praco Didacol S.A.S, Distribuidora Hino de Colombia S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en adelante Las Compañías, que serán el Responsable del Tratamiento de mis Datos Personales, por lo que autorizo de manera previa,</p>

        </div>
        <div class="mb-3 col-sm-4 col-lg-12">
                         <img :src="imagen4" alt="Descripción de la imagen" >

        </div>

        
 
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagen2: require('@/imagens/Registros.png'),
            imagen3: require('@/imagens/Group 5.png'),
                        imagen4: require('@/imagens/Group.png'),
                        imagen5: require('@/imagens/Line 2.png'),
                        imagen6: require('@/imagens/Line 3.png'),



    };
  },
  mounted() {
    const backgroundImage = `url(${this.imagen1})`;
    this.$el.style.backgroundImage = backgroundImage;
  }
}
</script>

<style>
.background-image1 {
  position: relative;
  min-height: 700px; /* o la altura que desees */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-container {
  position: relative;
  height: 100%;
}

.text4-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 20px;
}

.image-vertical-center1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Color de fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
}
.comunicado {
    font-size: 12px;
   background-color: red;
    padding: 15px;
    justify-content: center;
  align-items: center;
    width: 110%;
}

.mensaje {
    font-size: 34px;
        font-weight: bold;

  
}
#text-1, #text-2 {
    margin-bottom: 0; /* Elimina el margen inferior */
}


</style>

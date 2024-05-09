<template>
<div  style="background-color: #E6E7E8;">
<div class="container">

<div class="card-header pb-0">

    <h2 class="text-center mb-4">REGISTRATE Y GANA</h2>
        <p class="text-center mb-4">Los datos registrados deben pertenecer a la persona que figura en la tarjeta de propiedad del vehículo MACK; si una persona tiene más de un (1) camión MACK a su nombre sólo se puede inscribir una vez.</p>

    </div>
  <div class="row">
    <div class="col-sm-5 col-md-6">    
      <div class="mb-3 col-sm-4 col-lg-12 ">
        <img :src="imagen2" alt="Descripción de la imagen" class="anuncio">

      </div>
        <div class="mb-2 col-sm-4 col-lg-8">
    <p id="text-2" class="mb-8 text-over-image">
      LOS <strong>PRIMEROS 100</strong> INSCRITOS SERAN <strong>GANADORES</strong> DE
    </p>
  </div>

       <div class="form-group row d-flex justify-content-center">

    
      <div class="mb-3 col-sm-4 col-lg-1 ">

                 <img :src="imagen4" alt="Descripción de la imagen">

      </div>
      <div class=" col-sm-4 col-lg-11">
        <p id="text-1" class="mb-8">
*Una gorra emblemática Mack.
</p>

      </div>
      <div class="mb-3 col-sm-4 col-lg-1 ">

                 <img :src="imagen5" alt="Descripción de la imagen">

      </div>
      <div class=" col-sm-4 col-lg-11">
        <p id="text-1" class="mb-8">
        <p id="text-1" class="mb-8">**<strong>25% de
descuento en repuestos</strong> instalados en taller el día
que reclames tu premio o <strong>15% de descuento en repuestos</strong> comprados por
mostrador el día que reclames tu premio.</p>
</p>

      </div>

      <div class="mb-3 col-sm-4 col-lg-1 ">

                 <img :src="imagen6" alt="Descripción de la imagen">

      </div>
      <div class=" col-sm-4 col-lg-11 mb-8">
        <p id="text-1" class="mb-8">***Una tarjeta de miembro Jauría Mack para acceder a descuentos especiales. (Aplica para el año 2023)
</p>

      </div>
    </div>


  

   
          
 


<div class="mb-6 col-sm-4 col-lg-12 ">
          <img :src="imagen3" alt="Descripción de la imagen" class="celebracion">

      </div>

         <div class=" col-sm-4 col-lg-11 ">
        <p id="textocomentario" class="comentario1 "><strong>Válido sólo para Colombia. </strong></p>
                <p id="textocomentario" class="comentario2 mt-2 ">Los premios no aplican para convenios de flotas.</p>


</div>

</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
    <div class="form-group row d-flex justify-content-center">

    
      <div class="mb-1 col-sm-4 col-lg-6 ">

        <label for="exampleFormControlInput1" class="form-label">Nombres*</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" >
      </div>
      <div class="mb-1 col-sm-4 col-lg-6">
        <label for="exampleFormControlInput1" class="form-label">Apellidos*</label>
        <input type="email" class="form-control" id="exampleFormControlInput1">
      </div>
      
    </div>

    <div class="form-group row d-flex justify-content-center">

    
      <div class="mb-1 col-sm-4 col-lg-6 ">

        <label for="exampleFormControlInput1" class="form-label">Numero de Celular</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" >
      </div>
      <div class="mb-1 col-sm-4 col-lg-6">
        <label for="exampleFormControlInput1" class="form-label">Cedula*</label>
        <input type="email" class="form-control" id="exampleFormControlInput1">
      </div>
      
    </div>
     <div class="mb-1 col-sm-4 col-lg-12 ">
        <label for="exampleFormControlInput1" class="form-label">Placa de camion*</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" >
      </div>
       <div class="mb-1 col-sm-4 col-lg-12 ">
        <label for="exampleFormControlInput1" class="form-label">Correo electronico*</label>
        <input type="email" class="form-control" id="exampleFormControlInput1">
      </div>
      
      <div class="mb-1 col-sm-4 col-lg-12 ">

  <label for="exampleFormControlInput1" class="form-label">En que taller deseas reclamar tu premio*</label>


  <select class="form-select" id="inputGroupSelect01"  style="border: 1.5px solid  #84754E; background-color: #E6E7E8;
">
    <option selected>Seleccionar...</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
      </div>

  <div class="form-group row d-flex justify-content-center">
    <label for="exampleFormControlInput1" class="form-label">Autorizo para el uso y el tratamiento de datos e informacion personal</label>

  <p id="autorizacion" class="autorizacion">Declaro que he sido informado por el grupo empresarial compuesto por las sociedades Praco Didacol S.A.S, Distribuidora Hino de Colombia S.A.S, Inmobiliaria Inchcape Colombia S.A.S y Matrase S.A.S,; en adelante Las Compañías, que serán el Responsable del Tratamiento de mis Datos Personales, por lo que autorizo de manera previa,</p>

    <div class="mb-1 col-sm-4 col-lg-6">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
     Acepto
    </label>
  </div>
</div>

<div class="mb-1 col-sm-4 col-lg-6">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
    No acepto
    </label>
  </div>
</div>
            <div class="mb-3 col-sm-4 col-lg-12 ">
    <button type="submit" class="btn btn-dark col-lg-12" @click="submitForm">ENVIAR</button>

  </div>
    </div>
    </div>
  </div>
  </div>

 
</div>
</template>

<script>

</script>
<style>
.form-control{
    color: red;
border: 1.5px solid #84754E;
background-color: #E6E7E8;
}

.form-check-label{
  color:#84754E ;
    font-size: 11px; /* Tamaño de la fuente del texto */


}

input[type="radio"]::before {
  border-color: #84754E; /* Cambiar color del círculo */
}
input[type="radio"]:checked::before {
  background-color: #84754E; /* Cambiar color del círculo cuando está seleccionado */
}

.form-label{
    font-weight: bold;

}
.form-check .form-check-input[type="radio"] {
    border: 1.4px solid #84754E; /* Borde rojo */
    border-radius: 50%; /* Forma circular */
    width: 18px; /* Ancho */
    height: 18px; /* Altura */
    margin-right: 10px; /* Espacio entre el radio y el texto */
    vertical-align: middle; /* Alineación vertical con el texto */
  }

  /* Estilo para el texto al lado del radio */
  .form-check-label {
    vertical-align: middle; /* Alineación vertical con el radio */
  }
  .text-2 {
  margin-bottom: 20px;
}

.text-over-image {
  position: relative;
  bottom: 120px;
  left: 75%; /* Centra el texto horizontalmente */
  transform: translateX(-50%); /* Ajusta el centro exacto del texto */
  color: white; /* Color del texto */
  padding: 10px; /* Espacio alrededor del texto */
  margin: 0; /* Elimina el margen para un mejor ajuste */
  font-size: 20px; /* Tamaño de la fuente del texto */
}
.anuncio {
    margin-top: 60px; /* Puedes ajustar este valor según lo que necesites */
  }

  .celebracion {
    margin-top: 60px; /* Puedes ajustar este valor según lo que necesites */
  }

.autorizacion {
    font-size: 12px;
    border: 1.3px solid #84754E !important; /* Cambiado a un color más oscuro */
    padding: 15px;
    left: 20px;
}

 .comentario1 {
    font-size: 12px; /* Tamaño de fuente para comentario1 */
    margin-top: 20px;
  }

  .comentario2 {
    font-size: 12px; /* Tamaño de fuente para comentario2 */

  }
 

.comentario1 {
    margin-bottom: -10px; /* Elimina el margen inferior */
}

.comentario2 {
    margin-top: 0; /* Elimina el margen superior */
}


</style>
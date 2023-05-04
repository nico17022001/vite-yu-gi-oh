
<script>
export default {
  name: 'Card',

  props:{
    name: String,
    type: String,
    img: String,
  }
}
</script>

<template>
  <!-- CARTA -->
  <div class="carta">
    <div class="carta-img">
    <!-- IMMAGINE CARTA -->
      <img :src="img" :alt="name">
    </div>
    <!-- CONTENITORE TESTO CARTA -->
    <div class="box-info">
      <!-- NOME DELLA CARTA -->
      <div class="name">{{name}}</div>
        <!-- TIPOLOGIA -->
      <div class="type">{{type}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carta{
    width: calc(95% / 5);
    height: 600px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }.carta-img{
    background-color: #d48f38
  }img{
    max-width: 100%;
    ;
  }.box-info{
    height: 40%;
    background-color: #d48f38;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }.name{
    color: white;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    font-size: large;
  }.type{
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }
</style>
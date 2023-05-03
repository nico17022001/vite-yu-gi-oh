<script>
export default {
  name:'Main',
  data(){
    return{

    }
  }
}


</script>

<template>
  <!-- CONTENITORE CON SFONDO -->
  <div id="main-wrapper">
    <!-- CONTENITORE BIANCO -->
    <div id="white-container">
      <!-- CONTENITORE DELLA LISTA DI CARDS -->
      <div id="container">
        <!-- CONTENITORE CARTE TROVATE -->
        <div id="cards-founds">
          Found 39 cards
        </div>
        <!-- CONTENITORE CARTE -->
        <div id="cards-container">
          <!-- CARTA -->
          <div class="carta">
            <div class="carta-img">
              <!-- IMMAGINE CARTA -->
              <img src="../assets/img/34541863.jpg" alt="">
            </div>
            <!-- CONTENITORE TESTO CARTA -->
            <div class="box-info">
              <!-- NOME DELLA CARTA -->
              <div class="name">Franco Lorem </div>
              <!-- TIPOLOGIA -->
              <div class="type">Alieno</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #main-wrapper{
    background-color: #d48f38;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }#white-container{
    margin-top: 40px;
    width: 90%;
    height: 90%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }#container{
    width: 100%;
    height: 100%;
  }#cards-founds{
    background-color:#212529 ;
    color: white;
    padding: 15px ;
    font-size: large;
    display: flex;
    align-items: center;
  }#cards-container{
    display: flex;
    flex-wrap:wrap ;
  }.carta{
    width: calc(100% / 5);
    height: 500px;
    display: flex;
    flex-direction: column;
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
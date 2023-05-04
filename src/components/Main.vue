<script>
import {store} from '../data/store'
import CardContainer from './CardContainer.vue';
import Select from  './Select.vue'

export default {
  name:'Main',
  data(){
    return{
      store,
      
    }
  },
  components:{
    CardContainer,
    Select,
  },

  methods:{
    callApi(){
      this.$emit('callApi')
    } 
  }
}


</script>

<template>
  <!-- CONTENITORE CON SFONDO -->
  <div id="main-wrapper">
    <!-- SELECT -->
    <Select @changeType='callApi'/>
    <!-- CONTENITORE BIANCO -->
    <div id="white-container">
      <!-- CONTENITORE DELLA LISTA DI CARDS -->
      <div id="container">
        <!-- CONTENITORE CARTE TROVATE -->
        <div id="cards-founds">
          Le Carte trovate sono {{ store.arrayFull.length }}
        </div>
        <CardContainer/> 
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #main-wrapper{
    background-color: #d48f38;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }#white-container{
    margin: 60px 0px;
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
  }
</style>
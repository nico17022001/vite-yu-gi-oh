
<script>
import {store} from '../data/store'
import  Card from '../components/Card.vue'

export default {

  name:'CardContainer',


  data(){
    return{
      store,
    }
  },

  components:{
    Card,
  }
}
</script>

<template>
  <!-- CONTENITORE CARTE -->
  <div id="cards-container">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
  
</template>

<style lang="scss" scoped>
#cards-container{
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-between;
  }
</style>
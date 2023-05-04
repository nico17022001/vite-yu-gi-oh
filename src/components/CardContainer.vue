
<script>
import  Card from '../components/Card.vue'
import {store} from '../data/store'

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
    <Card
      v-for="card in store.listaCarte"
      :key="card.id"
      :name="card.name"
      :type="card.type"
      :img= "card.card_images[0].image_url"/>
  </div>
</template>

<style lang="scss" scoped>
#cards-container{
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-between;
  }
</style>
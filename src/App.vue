
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import CardContainer from './components/CardContainer.vue'
import axios from 'axios';
import {store} from './data/store';



export default {
  data(){
    return{
      store
    }
  },
  
  components:{
    Header,
    Main,
    Footer,
    CardContainer,
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl,{
        params:{
          num:10,
          offset: 0,
        }
      })
      .then(result => {
        store.listaCarte = result.data.data;
      })
    }
  },

  mounted(){
    this.getApi()
  }

}
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
  @use './components/scss/general.scss'
</style>
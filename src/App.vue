
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import {store} from './data/store'

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
  }
}
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style>

</style>
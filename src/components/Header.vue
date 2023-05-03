<script>
export default {
  name:'Header',
  data(){
    return{

    }
  }
}


</script>

<template>
  <div class="main-container">
    <div id="logo"><img src="../assets/img/Yugioh_anime_logo.webp" alt=""></div>
    <h1>YU-GI-OH Api</h1>
  </div>
</template>

<style lang="scss" scoped>
  .main-container{
    display: flex;
    height: 80px;
    align-items: center;
  }img{
    width: 50px;
    margin-left:20px ;
  }h1{
    margin-left: 10px;
  }
</style>
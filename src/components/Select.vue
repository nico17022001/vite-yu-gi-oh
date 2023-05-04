
<script>
import {store} from '../data/store.js'


export default {
  name: 'Select',
  data(){
    return{
      store,
    }
  },

  methods:{
    selectFunction(type){
      store.cardType = type
      this.$emit('changeType')
    }
  }
}
</script>

<template>
  <select>
    <option @click="selectFunction(null)">Seleziona tipo</option>
    <option v-for="(type) in store.arrayType" :key="type" :value="type" @click="selectFunction(type)">{{ type }}</option>
  </select>
</template>

<style lang="scss" scoped>
  select{
    position: absolute;
    top: 0px;
    left: 117px;
    margin: 10px 0px 10px 0px;
    padding: 10px;
  }
</style>
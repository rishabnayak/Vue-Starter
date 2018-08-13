<template>
  <div id="app">
    <navigation/>
    <router-view :messages='messages'/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import store from '@/store/store.js'
export default {
  name: 'App',
  store,
  components: {
    navigation
  },
  data(){
    return{
      messages:['Hello!']
    }
  }
}
</script>

<style>

</style>

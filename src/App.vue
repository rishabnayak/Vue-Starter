<template>
  <div id="app">
    <navigation/>
    <router-view :messages='messages'/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
  name: 'App',
  components: {
    navigation
  },
  data(){
    return{
      messages:['Hello!','Notes']
    }
  }
}
</script>

<style>

</style>

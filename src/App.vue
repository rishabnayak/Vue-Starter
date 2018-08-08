<template>
  <div id="app">
    <navigation/>
    <router-view :message='message'/>
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
      message:['Hello!','Notes']
    }
  }
}
</script>

<style>

</style>

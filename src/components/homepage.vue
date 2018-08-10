<template>
  <div class="splash">
    <h1>{{messages[0]}}</h1>
    <p class="lead">This is Vue.js Starter</p>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  props: ['messages'],
  data () {
    return {
    }
  }
}
</script>

<style>
.splash{
  text-align: center;
}
h1{
  color: #444;
}
</style>

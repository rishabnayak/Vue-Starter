<template>
  <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">{{message}}</h1>
          <p class="lead text-muted">This is Vue.js Starter</p>
        </div>
  </section>
</template>

<script>
export default {
  name: 'homepage',
  props: ['message'],
  data () {
    return {
    }
  }
}
</script>

<style>
h1{
  color: #444;
  padding-top: 50px;
}
</style>

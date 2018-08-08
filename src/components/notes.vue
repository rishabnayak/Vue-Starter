<template>
  <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">{{message[1]}}</h1>
          <p class="lead text-muted">NoteStore</p>
        </div>
  </section>
</template>

<script>
export default {
  name: 'notes',
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

<template>
  <div class="splash">
    <h1>{{messages[1]}}</h1>
    <p class="lead">NoteStore</p>
  </div>
</template>

<script>
export default {
  name: 'notes',
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

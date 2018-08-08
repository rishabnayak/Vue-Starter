<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand"><router-link to="/">Vue Starter</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/notes">Notes</router-link></a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
    }
  }
}
</script>

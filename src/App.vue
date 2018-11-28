<template>
  <div id="app">
    <IndexView></IndexView>
  </div>
</template>

<script>
import IndexView from './views/index'

export default {
  name: 'App',
  components: { IndexView }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

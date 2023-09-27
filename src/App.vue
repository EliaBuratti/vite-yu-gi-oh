<script>
import navBar from './components/navBar.vue';
import cardsPage from './components/cardsPage.vue';
export default {

  name: 'App',

  components: {
    navBar,
    cardsPage,
  },

  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="app">
    <navBar />
    <cardsPage />
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss' as *;
@use './assets/scss/partials/variables.scss' as *;


.app {
  background-color: $bg-page;
  height: 100vh;
}
</style>

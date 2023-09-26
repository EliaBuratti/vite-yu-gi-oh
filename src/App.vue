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
  <navBar />
  <cardsPage />
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss' as *;
</style>

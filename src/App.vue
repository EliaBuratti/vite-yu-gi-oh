<script>
import navBar from './components/navBar.vue';

export default {

  name: 'App',

  components: {
    navBar,
  },

  data() {
    return {

    }
  }
}
</script>

<template>
  <navBar />
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss' as *;
</style>

<template>
  <div class="is-capitalized navigation__bar is-size-5">
    <router-link to="/">Projetos</router-link>
    <span class="has-text-grey-light"> | </span>
    <router-link to="/contato">Contato</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navigation__bar {
  padding: 30px;

  a {
    font-weight: normal;
    color: #a0a0a0;

    &.router-link-exact-active {
      color: #ff665a;
      font-weight: bold;
    }
  }
}
</style>

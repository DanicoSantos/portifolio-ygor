<template>
  <div class="is-uppercase navigation__bar is-size-5">
    <router-link to="/">Projetos</router-link>
    <span class="has-text-grey-light"> | </span>
    <router-link to="/about">Contato</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "../../node_modules/bulma";

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

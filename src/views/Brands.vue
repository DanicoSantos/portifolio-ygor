<template>
  <div class="brands">
    <div class="has-text-centered section mb-6">
      <h1 class="title has-text-grey is-4 mb-6">Marcas</h1>
      <p class="subtitle has-text-grey-light is-5 px-4">
        Projetos de logotipo e identidade visual para marcas.
      </p>
    </div>
    <div class="container is-widescreen pt-1">
      <figure class="image">
        <router-link to="/"
          ><img src="https://via.placeholder.com/500" alt=""
        /></router-link>
      </figure>
      <figure class="my-6 image">
        <router-link to="/"
          ><img src="https://via.placeholder.com/500" alt=""
        /></router-link>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brands",
  mounted() {
      this.changePageTitle()
  },
  methods: {
    changePageTitle() {
      return (document.title = "Marcas | Visual Design");
    },
  },
};
</script>

<style lang="scss">
@import "../../node_modules/bulma";

.image img {
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
}
</style>

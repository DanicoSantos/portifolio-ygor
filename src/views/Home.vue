<template>
  <div class="home">
    <div class="columns is-centered is-desktop">
      <div class="banner column has-text-centered">
        <h1 class="title is-1">Visual designer</h1>
        <p class="subtitle is-4 px-2">
          Projetos de identidade visual, editorial e sites.
        </p>
        <a
          href=""
          class="button is-secondary is-large is-rounded is-size-4 has-text-weight-bold"
          >Orçamento</a
        >
      </div>
      <div
        class="navigation column py-0 is-flex is-justify-content-center is-align-content-center"
      >
        <NavBar />
      </div>
      <section class="container is-widescreen">
        <div class="columns is-desktop">
          <Project title="Marcas" class="column px-0"/>
          <Project title="Web design" class="column px-0"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Project from "../components/Project.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Project,
  },
};
</script>

<style lang="scss">
@import "../../node_modules/bulma";

.is-secondary {
  background-color: #a0a0a0;
  width: 275px;
  height: 75px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>

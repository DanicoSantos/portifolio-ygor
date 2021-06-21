<template>
  <div class="home">
    <div class="is-centered is-desktop section">
      <div class="banner mb-6 pb-4 has-text-centered">
        <h1 class="title has-text-grey is-1">Visual designer</h1>
        <p class="subtitle has-text-grey-light is-4 px-2">
          Projetos de identidade visual, editorial e sites.
        </p>
        <router-link
          to="/contato"
          class="button is-secondary is-large is-size-4 has-text-weight-bold"
          >Orçamento</router-link
        >
      </div>
      <div
        class="navigation py-0 is-flex is-justify-content-center is-align-content-center"
      >
        <NavBar />
      </div>
    </div>
    <section class="container is-widescreen">
      <Project title="Marcas" class="px-0" pageLink="/marcas" />
      <Project title="Web design" class="px-0" />
    </section>
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
  mounted() {
    this.changePageTitle();
  },
  methods: {
    changePageTitle() {
      return (document.title = "Home | Visual Design");
    },
  },
};
</script>

<style lang="scss" scoped>
.is-secondary {
  background-color: #a0a0a0 !important;
  width: 275px;
  height: 75px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  transition: ease 0.5s;
}

.is-secondary:hover {
  background-color: #ff665a;
}
</style>

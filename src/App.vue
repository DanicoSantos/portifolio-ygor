<template>
  <div class="app">
    <header
      class="app__header py-3 mb-3 is-flex is-justify-content-center is-align-items-center"
    >
      <div class="is-flex justify-content-center mt-6">
        <router-link to="/">
          <img src="https://via.placeholder.com/60" width="60" height="60" />
        </router-link>
      </div>
    </header>
    <section class="section">
      <router-view />
    </section>
    <footer class="footer py-4">
      <div class="container has-text-centered">
        <span class="footer__icon is-size-3"
          ><a href="#" target="_blank"><i class="fab fa-instagram"></i></a
        ></span>
        <span class="footer__icon is-size-3"
          ><a href="#" target="_blank"> <i class="fab fa-behance"></i></a
        ></span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bulma";

.app__header {
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}

.footer__icon {
  margin: 0.75rem;
}

.footer__icon a {
  color: #ff665a;
}
</style>

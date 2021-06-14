<template>
  <div class="app">
    <header class="app__header py-3 mb-3 is-flex is-justify-content-center is-align-items-center">
      <div class="is-flex justify-content-center mt-6">
        <img
          src="https://via.placeholder.com/60"
          width="60"
          height="60"
          
        />
      </div>
    </header>
    <section class="content section">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bulma";

.app__header {
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}

</style>

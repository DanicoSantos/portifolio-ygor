<template>
  <div class="contact is-centered">
    <div class="has-text-centered mb-6">
      <h1 class="title has-text-grey is-4 is-uppercase mb-6">Orçamento</h1>
      <p class="subtitle has-text-grey-light is-5 px-2">
        Solicite através do e-mail:
        <span class="has-text-weight-bold">me@visualygor.com.br</span>
      </p>
    </div>
    <div class="has-text-centered">
      <h3 class="title has-text-grey is-4 is-uppercase">Dúvidas?</h3>
      <a
        href=""
        class="button is-small is-secondary is-size-5 has-text-weight-bold"
        >Whatsapp</a
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.changePageTitle();
  },
  methods: {
    changePageTitle() {
      return (document.title = "Contato | Visual Design");
    },
  },
};
</script>

<style lang="scss" scoped>
.is-secondary {
  background-color: #a0a0a0;
  max-width: 150px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  transition: ease 0.5s;
}

.is-secondary:hover {
  background-color: #ff665a;
}
</style>

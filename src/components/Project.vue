<template>
  <div class="project">
    <router-link :to="pageLink"><h3
      class="title has-text-weight-normal is-5 has-text-grey-light has-text-centered"
    >
      {{ title }}
    </h3></router-link>
    <figure class="image mt-4">
      <img :src="imageUrl" width alt="" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    title: {
      type: String,
      default: "Projeto X",
    },
    imageUrl: {
      type: String,
      default: "https://via.placeholder.com/500",
    },
    pageLink: {
        type: String,
        default: "/"
    }
  },
};
</script>

<style lang="scss">
.project {
  margin-bottom: 2rem;
}

.image img {
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
}
</style>

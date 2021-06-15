<template>
<div class="project">
    <h3 class="title has-text-weight-normal is-5 has-text-grey-light has-text-centered">{{ title }}</h3>
    <figure class="image">
        <img :src="imageUrl" alt="">
    </figure>
</div>
    
</template>

<script>
export default {
    name: 'Projects',
    props: {
        title: {
            type: String,
            default: 'Projeto X',
        },
        imageUrl: {
            type: String,
            default: 'https://via.placeholder.com/300',
        }
    }
}
</script>

<style lang="scss">
.project {
    margin-bottom: 2rem;
}
</style>
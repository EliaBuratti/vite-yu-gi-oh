<script>
export default {
    name: 'singleCard',

    props: {
        cardImage: String,
        cardTitle: String,
        cardArchetype: String,
        cardFound: Number,
    }

}
</script>

<template>
    <div class="list_card">

        <!-- card -->
        <div class="card rounded-0 border-0 mb-4 p-2">
            <img :src="cardImage" :alt="cardTitle">

            <div class="description text-center">
                <h4>{{ cardTitle }}</h4>
                <p>{{ cardArchetype }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


.list_card {
    width: calc(100% / 5);

    .card {
        height: 100%;
    }


    .description {
        height: 100%;
        background-color: $bg-page;
        padding: 1rem 0.5rem;

        h4 {
            color: $white;
        }

        p {
            font-size: 1.5rem;
        }
    }
}
</style>
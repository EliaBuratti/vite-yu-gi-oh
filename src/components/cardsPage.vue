<script>
import { cardsData } from '../assets/dataJs/cardsData.js'; //importo il file js con i dati dell'api
import singleCard from './singleCard.vue';
import filterArchetype from './filterArchetype.vue';
import counterCardFound from './counterCardFound.vue';

export default {
    name: 'cardsPage',

    components: {
        singleCard,
        filterArchetype,
        counterCardFound,
    },

    data() {
        return {
            cardsData,
        }
    },

    methods: {
        searchArchetype() {
            console.log(this.cardsData.archetypeSelected);
            this.cardsData.getData();
        }
    },


    created() {
        cardsData.getData();
    }
}
</script>

<template>
    <section class="cards">
        <div class="container p-4">

            <!-- menu filtri -->
            <filterArchetype @search-Filter="searchArchetype" />

            <!-- list cards -->
            <div v-if="cardsData.cards" class="bg-white p-4">

                <!-- contatore -->
                <counterCardFound />

                <!-- album cards -->
                <div class="album_cards d-flex flex-wrap">
                    <singleCard v-for="card in cardsData.cards" :cardImage="card.card_images[0].image_url"
                        :cardTitle="card.name" :cardArchetype="card.archetype" :cardFound="cardsData.cards.length" />
                </div>

            </div>

            <!-- loading page -->
            <div v-else class="loading text-center">
                <img src="https://img.yugioh-card.com/eu/wp-content/themes/yugioh/images/logo/Yugioh-EN-DE.svg"
                    alt="logo yu gi oh">

                <h3>Caricamento...</h3>
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.cards {
    background-color: $bg-page;

    .loading {
        margin: auto;
        max-width: 100%;
        height: 100vh;
        background-color: $bg-page;

        img {
            transform: scale(1);
            animation: pulse 2s infinite;
        }
    }


}

@keyframes pulse {
    0% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.95);
    }
}
</style>
<script>
import { cardsData } from '../assets/dataJs/cardsData.js'; //importo il file js con i dati dell'api

export default {
    name: 'cardsPage',

    data() {
        return {
            cardsData
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
            <!-- filter -->
            <div class="filter pb-4">
                <select name="archetype" id="archetype">
                    <option value="esempio1">esempio1</option>
                    <option value="esempio2">esempio2</option>
                    <option value="esempio3">esempio3</option>
                    <option value="esempio4">esempio4</option>
                </select>
            </div>

            <!-- list cards -->
            <div v-if="cardsData.cards" class="bg-white p-4">
                <div class="list_cards">

                    <!-- result number of card  -->
                    <div class="found_cards mx-2 p-3">
                        <h5>Found: {{ cardsData.cards.length }} cards</h5>
                    </div>

                    <!-- album cards -->
                    <div class="album_cards d-flex flex-wrap">
                        <div v-for="card in cardsData.cards" class="card rounded-0 border-0 mb-4 p-2">
                            <img :src="card.card_images[0].image_url" :alt="card.name">

                            <div class="description text-center">
                                <h4>{{ card.name }}</h4>
                                <p>{{ card.archetype }}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
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
        width: 80vw;
        height: 100vh;
        background-color: $bg-page;

        img {
            transform: scale(1);
            animation: pulse 2s infinite;
        }
    }

    .filter select {
        padding: 0.5rem 4rem 0.5rem 0.5rem;
        border-radius: 0.5rem;
    }

    .found_cards {
        background-color: $bg-filter;
        color: $white;
    }

    .card {
        width: calc(100% / 5);

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
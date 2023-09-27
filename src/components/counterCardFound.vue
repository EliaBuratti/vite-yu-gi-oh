<script>
import { cardsData } from '../assets/dataJs/cardsData.js'; //importo il file js con i dati dell'api
export default {
    name: 'counteCardFound',

    data() {
        return {
            cardsData
        }
    },
}
</script>
<template>
    <div>
        <!-- result number of card  -->
        <div class="found_cards mx-2 p-3">
            <h5>Found: {{ cardsData.cards.length }} cards</h5>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.found_cards {
    background-color: $bg-filter;
    color: $white;
}
</style>
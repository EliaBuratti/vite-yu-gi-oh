<script>
export default {
    name: 'cardsPage',

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<template>
    <section class="cards pt-4">
        <div class="container p-4">
            <!-- filter -->
            <div class="filter">
                <select name="archetype" id="archetype">
                    <option value="esempio1">esempio1</option>
                    <option value="esempio2">esempio2</option>
                    <option value="esempio3">esempio3</option>
                    <option value="esempio4">esempio4</option>
                </select>
            </div>

            <!-- list cards -->
            <div class="bg-white p-4">
                <div class="list_cards">

                    <!-- result number of card  -->
                    <div class="found_cards p-3">
                        <h5>Found 39 cards</h5>
                    </div>

                    <!-- album cards -->
                    <div class="album_cards">

                    </div>
                </div>

            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.cards {
    background-color: $bg-page;

    .filter select {
        padding: 0.5rem 4rem 0.5rem 0.5rem;
        border-radius: 0.5rem;
    }

    .found_cards {
        background-color: $bg-filter;
        color: $white;
    }
}
</style>
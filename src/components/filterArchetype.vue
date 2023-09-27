<script>
import { cardsData } from '../assets/dataJs/cardsData.js'; //importo il file js con i dati dell'api
import { filterLists } from '../assets/dataJs/filterLists.js';
import archetype from './archetype.vue';
export default {
    name: 'filterArchetype',
    emits: ['searchFilter'],

    components: {
        archetype,
    },

    data() {
        return {
            cardsData,
            filterLists,
        }
    },

    created() {
        cardsData.getData();
        filterLists.getData();
    }


}
</script>

<template>
    <!-- filter -->
    <div class="filter pb-4">
        <select placeholder="ciaa" name="archetype-list" id="archetype-list" @change="$emit('searchFilter')"
            v-model="cardsData.archetypeSelected">
            <archetype v-for="filter in filterLists.listsArchetype" :type="filter.archetype_name" />
        </select>
    </div>
</template>


<style lang="scss" scoped>
.filter select {
    padding: 0.5rem 4rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
}
</style>
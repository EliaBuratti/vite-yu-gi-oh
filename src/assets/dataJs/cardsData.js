// creo un file js con la richiesta e i dati che voglio ottenere, cosi da poterli prendere dalle verie app quando voglio, mi basta importare questo file


import { reactive } from 'vue';
import axios from 'axios';

export const cardsData = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php', // se tolgo il num e offset genero il massimo delle carte  
    limit: 20,
    offset: 0,
    cards: [],
    archetypeSelected: [],  // se metto una stringa vuota mi appare il testo nel menu a tendina con null invece no


    getData() {
        axios.get(this.base_url, {
            params: {

                archetype: this.archetypeSelected,

                offset: this.offset,

                num: this.limit,
            }
        })

            .then(response => {
                console.log(response.data.data);

                const path = response.data.data;

                this.cards = path;

            })

            .catch(error => {
                console.log(error);
            })
    }

})
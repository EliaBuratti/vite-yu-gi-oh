// creo un file js con la richiesta e i dati che voglio ottenere, cosi da poterli prendere dalle verie app quando voglio, mi basta importare questo file


import { reactive } from 'vue';
import axios from 'axios';

export const cardsData = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php', // se tolgo il num e offset genero il massimo delle carte  
    limit: 20,
    offset: 0,
    cards: null,
    archetypeSelected: '',


    getData(url) {
        axios.get(url)

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
// creo un file js con la richiesta e i dati che voglio ottenere, cosi da poterli prendere dalle verie app quando voglio, mi basta importare questo file


import { reactive } from 'vue';
import axios from 'axios';

export const filterLists = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    listsArchetype: '',

    getData() {
        axios.get(this.base_url)

            .then(response => {
                //console.log(response.data);

                this.listsArchetype = response.data;

            })

            .catch(error => {
                console.log(error);
            })
    }

})
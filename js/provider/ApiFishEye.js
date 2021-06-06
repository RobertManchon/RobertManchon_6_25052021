'use strict';
// Get  data from JSON EyeFish (photographers & medias)
export default class ApiFishEye {
    async getDataFishEye() {
        let url = 'api/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}
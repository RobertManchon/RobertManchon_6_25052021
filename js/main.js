'use strict';

// Data
import ApiFishEye from './provider/ApiFishEye.js';

// Homepage
import HomePageBuilder from './home/HomePageBuilder.js';

// Ph pages
import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {
            // Photographer profil header
            new PhotographerProfil().displayPhotographerProfil(data);

            // Dropdown menu
            new DropDownMenu().dropDown(data);

            //photographer gallery & likes box
            new MediaBuilder().photographersMedias(data);
            return
        }
        // Homepage (photographers, scroll, filter)
        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();

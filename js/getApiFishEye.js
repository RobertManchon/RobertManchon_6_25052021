'use strict';
import displayPhotographers from './displayPhotographers.js';


// Fetch api fisheye
export default function getApiFishEye() {
    fetch("./api/photographers.json")
        .then(response => response.json())
        .then(data => {
            displayPhotographers(data)
        })
        .catch(error => console.log(error))
}
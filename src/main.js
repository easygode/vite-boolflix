import { createApp } from 'vue';
// Import main.scss
import './assets/scss/main.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// Import fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import fontawesome star icon 
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar  as faStarFull} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// add icons to library
library.add(faStar, faStarFull, faSearch)

import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

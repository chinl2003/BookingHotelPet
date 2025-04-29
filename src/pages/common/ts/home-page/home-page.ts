import { createApp } from 'vue'
import { createPinia } from 'pinia'

import HomePage from '../../components/home-page/HomePage.vue'
import router from '../../../../router/index.ts'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRightToBracket, faUserPlus, faEllipsisH, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
library.add(faRightToBracket, faUserPlus, faEllipsisH, faPhoneAlt, faEnvelope, faFacebook)

const app = createApp(HomePage)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#home-page')

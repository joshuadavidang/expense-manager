import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "./index.css";

import VueSweetalert2 from "vue-sweetalert2";

<script src="../path/to/flowbite/dist/flowbite.js"></script>;

const app = createApp(App);

app.use(VueSweetalert2);
app.use(router);
app.mount("#app");

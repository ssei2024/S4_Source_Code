import "./style.css";

//vue configs
import { createApp } from "vue";
import App from "./App.vue";

//import libraries
import router from "./libraries/vue-router";

const app = createApp(App);

//use libraries
app.use(router);

app.mount("#app");

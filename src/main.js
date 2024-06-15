import { createApp } from "vue";
import VueLazyLoad from "vue-lazyload";
import App from "./App.vue";
import "./assets/reset.css";
import "material-design-icons/iconfont/material-icons.css";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
import "./assets/styles.css";
import router from "./router";
import store from "./store";
import eventBus from "./plugins/event-bus";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueLazyLoad);
app.use(eventBus);
app.mount("#app");

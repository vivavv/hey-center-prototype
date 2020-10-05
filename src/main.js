import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/styles/custom.scss";
import SvgIcon from "@/components/SvgIcon";

const app = createApp(App);

app.use(store);
// app.use(router)
app.component("svg-icon", SvgIcon);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import LogIn from "./components/LogIn.vue";

const app = createApp(App);

app.component("log-in", LogIn);

app.mount("#app");

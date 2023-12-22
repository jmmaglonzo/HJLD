import "@/assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import BaseButton from "@/components/base/BaseButton.vue";

const app = createApp(App);
app.component("Icon", Icon);
app.component("base-button", BaseButton);
app.use(router);

app.mount("#app");

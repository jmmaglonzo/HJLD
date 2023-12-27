import "@/assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseGrid from "@/components/base/BaseGrid.vue";
const app = createApp(App);
app.component("Icon", Icon);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-grid", BaseGrid);
app.use(router);

app.mount("#app");

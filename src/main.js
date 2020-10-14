import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);

library.add(faCheckCircle);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

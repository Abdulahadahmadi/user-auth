import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "flowbite";
import router from "./router";
import { createAuth0 } from "@auth0/auth0-vue";

// App.use();

createApp(App)
    .use(router)
    .use(
        createAuth0({
        domain: "ahad-dev.au.auth0.com",
        client_id: "OEFteWCxyFJtAHHL5oZXxVXEPaCha8Pw",
        redirect_uri: window.location.origin,
        })
    )
    .mount("#app");

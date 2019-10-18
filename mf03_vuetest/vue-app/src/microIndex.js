import Vue from "vue";
import App from "./App.vue";

const fragments = () => {
  class MicroFrontend extends HTMLElement {
    log(...args) {
      console.log("mf03_vuetest-tag", ...args);
    }

    connectedCallback() {
      this.log("connected");
      this.render();
    }

    disconnectedCallback() {
      this.log("disconnected");
    }
  }

  class MfTemplate extends MicroFrontend {
    render() {
      new Vue({
        el: this,
        render: h => h(App)
      });
    }
  }
  window.customElements.define("mf03_vuetest-tag", MfTemplate);
};

fragments();

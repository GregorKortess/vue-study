import Vue from 'vue';
import App from './App.vue';
import Tasks from './components/Tasks.vue';
import HelloWorld from './components/HelloWorld.vue';
import NotFound from './components/NotFound.vue';

Vue.config.productionTip = false;

const routes = {
  '/': App,
  '/test' : Tasks,
  '/hello' : HelloWorld,
    };

new Vue({

  data: {
    currentRoute: window.location.pathname,
  },

  computed: {
    currentComponent: function () {
      return routes[this.currentRoute] || NotFound;
    }
  },

  render: function (h) {
    return h(this.currentComponent)
  },
}).$mount('#app');

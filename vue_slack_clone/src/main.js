import Vue from "vue";
import App from "./App.vue";
//import router from "./router";
//import store from "./store";
import firebase from "firebase/app";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyC3AKN1WeehXSi2bqINm69wlcWiJreVpe0",
  authDomain: "vue-slack-clone-2f139.firebaseapp.com",
  databaseURL: "https://vue-slack-clone-2f139.firebaseio.com",
  projectId: "vue-slack-clone-2f139",
  storageBucket: "vue-slack-clone-2f139.appspot.com",
  messagingSenderId: "49309654712",
  appId: "1:49309654712:web:d7d6eef514815058951e4d",
  measurementId: "G-XWZT3J4MWJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  //router,
  //store,
  render: h => h(App)
}).$mount("#app");
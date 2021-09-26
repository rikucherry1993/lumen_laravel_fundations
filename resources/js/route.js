
import VueRouter from "vue-router";
import Example2 from "./components/Example2.vue";
import Bookable from "./bookable/bookable";
import BookableListItem from "./bookable/bookableListItem.vue";


const routes = [
  {
    path: '/',
    component: Bookable,
    name: 'home'
  },

  {
    path: '/second',
    component: Example2,
    name: 'second'
  },
];

const router = new VueRouter({
  mode: 'history',
  routes, //short for routes: routes 
});

export default router;

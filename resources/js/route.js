
import VueRouter from "vue-router";
import { HotModuleReplacementPlugin } from "webpack";
import ExampleComponent from "./components/ExampleComponent";

const routes = [
  {
    path: '/',
    component: ExampleComponent,
    name: 'home'
  },
];

const router = new VueRouter({
  routes, //short for routes: routes 
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import HomePage from "../components/HomePage";
import RobotBuilder from "../components/RobotBuilder";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/build',
            name: "Build",
            component: RobotBuilder
        }
    ],
});
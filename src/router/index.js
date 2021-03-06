import Vue from 'vue';
import Router from 'vue-router';

import HomePage from "../components/HomePage";
import RobotBuilder from "../components/RobotBuilder";
import PartInfo from "../components/PartInfo";

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
        },
        {
            path: '/parts/:partType/:id',
            name: "Parts",
            component: PartInfo,
            props: true
        }
    ],
});
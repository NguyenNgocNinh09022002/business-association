import SidebarLayout from '../Components/Layout/SidebarLayout';

import Home from '../Pages/Home';
import Events from '../Pages/Events';
import Members from '../Pages/Members';
import Partners from '../Pages/Partners'

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/su-kien', component: Events, layout: SidebarLayout },
    { path: '/thanh-vien', component: Partners},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

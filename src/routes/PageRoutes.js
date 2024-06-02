import {lazy} from 'react';
import * as PATH from "./Slug";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const ChildrenOne = lazy(() => import("../pages/children_one/ChildrenOne"));
const ChildrenTwo = lazy(() => import("../pages/children_two/ChildrenTwo"));

const PageRoutes = [
    {
        path: PATH.DASHBOARD_PATH,
        component: Dashboard,
    },
    {
        path: PATH.Children_ONE_PATH,
        component: ChildrenOne,
    },
    {
        path: PATH.Children_TWO_PATH,
        component: ChildrenTwo,
    },
]

export default PageRoutes;

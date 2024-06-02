import * as PATH from "../routes/Slug";
import * as MenuIcon from "../components/layout/menu_icons/Icon";

const Navs = [
    {
        key: "dashboard",
        title: "Dashboard",
        path: PATH.DASHBOARD_PATH,
        icon: MenuIcon.DashboardIcon(),
        subMenu: null
    },
    {
        key: "sub-menu",
        title: "Sub Menu",
        icon: MenuIcon.DashboardIcon(),
        subMenu: [
            {
                key: "children-one",
                title: "Children One",
                path: PATH.Children_ONE_PATH,
                icon: MenuIcon.DashboardIcon(),
                subMenu: null,
            },
            {
                key: "children-two",
                title: "Children Two",
                path: PATH.Children_TWO_PATH,
                icon: MenuIcon.DashboardIcon(),
                subMenu: null,
            },
        ],
    },
    {
        key: "user",
        title: "User",
        path: PATH.DASHBOARD_PATH,
        icon: MenuIcon.UserIcon(),
        subMenu: null,
    },
    {
        key: "setting",
        title: "Settings",
        path: PATH.DASHBOARD_PATH,
        icon: MenuIcon.SettingIcon(),
        subMenu: null,
    },
    {
        key: "monitor",
        title: "Monitor",
        path: PATH.DASHBOARD_PATH,
        icon: MenuIcon.MonitorIcon(),
        subMenu: null,
    },
]

export default Navs;

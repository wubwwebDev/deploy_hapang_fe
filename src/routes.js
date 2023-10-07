// import
import Track from "views/Dashboard/Track";
import HomePage from "views/Dashboard/Home";
import About from "views/Dashboard/About";

var dashRoutes = [
  {
    path: "/track",
    name: "Track",
    rtlName: "لوحة القيادة",
    // icon: <HomeIcon color="inherit" />,
    component: Track,
    layout: "/admin",
  },
  {
    path: "/home",
    name: "Home ",
    rtlName: "لوحة القيادة",
    // icon: <HomeIcon color="inherit" />,
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    rtlName: "لوحة القيادة",
    // icon: <HomeIcon color="inherit" />,
    component: About,
    layout: "/admin",
  },
];
export default dashRoutes;

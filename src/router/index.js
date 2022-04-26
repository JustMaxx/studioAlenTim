import { createRouter, createWebHistory } from "vue-router";
import Quizpage from "../components/Quizpage";
import Contacts from "../components/Contacts";
import Delivery from "../components/Delivery";
import Profile from "../components/Profile";
import Main from "../components/Main";
import Control1 from "../components/Control1";
import Control2 from "../components/Control2";
import Control3 from "../components/Control3";
import Control4 from "../components/Control4";
import ControlOrderLook from "../components/ControlOrderLook";
import Gallery from "../components/Gallery";
import Orders from "../components/Orders";
import Enroll from "../components/Enroll";
import Ordering from "../components/Ordering";
import Ordering2 from "../components/Ordering2";
import Ordering3 from "../components/Ordering3";
import Registration from "../components/Registration";
import Modal from "../components/Modal";
import ControlOrderAdd from "../components/ControlOrderAdd";
import SewindDate from "../components/SewindDate"


const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/quizpage",
    name: "Quizpage",
    component: Quizpage,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/control1",
    name: "Control1",
    component: Control1,
  },
  {
    path: "/control2",
    name: "Control2",
    component: Control2,
  },
  {
    path: "/control3",
    name: "Control3",
    component: Control3,
  },
  {
    path: "/control4",
    name: "Control4",
    component: Control4,
  },
  {
    path: "/orderlook/:id",
    name: "ControlOrderLook",
    component: ControlOrderLook,
  },
  {
    path: "/orderadd",
    name: "ControlOrderAdd",
    component: ControlOrderAdd,
  },
  
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: Enroll,
  },
  {
    path: "/ordering",
    name: "Ordering",
    component: Ordering,
  },
  {
    path: "/ordering2",
    name: "Ordering2",
    component: Ordering2,
  },
  {
    path: "/ordering3",
    name: "Ordering3",
    component: Ordering3,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/signin",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/sewinddate",
    name: "SewindDate",
    component: SewindDate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});

export default router;

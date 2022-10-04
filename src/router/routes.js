import HomeView from "../views/HomeView.vue";
import AboutView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashView from "../views/DashboardView.vue";
import MemberListView from "../views/member/MemberListView.vue";
import BoardListView from "../views/board/BoardListView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashView,
    children: [
      {
        path: "member-list",
        name: "member-list",
        component: MemberListView,
      },
      {
        path: "board-list",
        name: "board-list",
        component: BoardListView,
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export default routes;

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashView from "../views/DashboardView.vue";
import MemberListView from "../views/member/MemberListView.vue";
import PostListView from "../views/post/PostListView.vue";
import MemberDetailView from "../views/member/MemberDetailView.vue";
import PostDetailView from "../views/post/PostDetailView.vue";

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
        path: "post-list",
        name: "post-list",
        component: PostListView,
      },
      {
        path: "member-detail/:id",
        name: "member-detail",
        component: MemberDetailView,
        props: true,
      },
      {
        path: "post-detail/:id",
        name: "post-detail",
        component: PostDetailView,
        props: true,
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

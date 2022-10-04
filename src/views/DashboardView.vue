<template>
  <div class="dashboard-view-wrapper">
    <dashboard-side class="side" :menu-list="menuList" />
    <dashboard-main class="main" />
  </div>
</template>
<script>
import DashboardSide from "@/components/templates/DashboardSide.vue";
import DashboardMain from "@/components/templates/DashboardMain.vue";
export default {
  components: { DashboardSide, DashboardMain },
  name: "dashboard-view",
  data() {
    return {
      menuList: [
        {
          name: "회원 리스트",
          view: "member-list",
        },
        {
          name: "게시글 관리",
          view: "board-list",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.dashboard-view-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .side {
    width: 20%;
    border-right: 1px solid #dee2e6;
  }
  .main {
    width: 80%;
  }
}
</style>

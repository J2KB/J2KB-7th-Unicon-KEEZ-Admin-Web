<template>
  <div class="dashboard-view-wrapper">
    <template-dashboard-side class="side" :menu-list="menuList" />
    <template-dashboard-main class="main" />
  </div>
</template>
<script>
import TemplateDashboardSide from "@/components/templates/TemplateDashboardSide.vue";
import TemplateDashboardMain from "@/components/templates/TemplateDashboardMain.vue";
export default {
  components: { TemplateDashboardSide, TemplateDashboardMain },
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
          view: "post-list",
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
    height: 100%;
  }
  .main {
    border-left: 1px solid #dee2e6;
    overflow: overlay;
    height: 100%;
    width: 80%;
  }
}
</style>

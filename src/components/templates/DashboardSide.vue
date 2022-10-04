<template>
  <div class="dashboard-side-wrapper">
    <img
      class="w-75 p-5"
      src="@/assets/logo.png"
      @click="selectMenu(menuList[0].name)"
    />
    <b-list-group class="w-100 top-bottom-border" flush>
      <b-list-group-item
        v-for="menu in menuList"
        :key="menu.name"
        class="d-flex justify-content-between align-items-center"
        :class="menu.name == currentMenu.name ? 'active' : ''"
        @click="selectMenu(menu.name)"
      >
        <span class="text-align w-100">{{ menu.name }} </span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  name: "dashboard-side",
  props: {
    menuList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      currentMenu: {},
    };
  },
  mounted() {
    this.selectMenu(this.menuList[0].name);
  },
  methods: {
    selectMenu(menu) {
      this.currentMenu = this.menuList.find((el) => el.name == menu);
      const path = `/dashboard/${this.currentMenu.view}`;
      if (this.$route.path != path) this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.dashboard-side-wrapper {
  width: 100%;

  .active {
    background-color: #ff4444;
    color: white;
    border: 1px solid #ff4444;
  }

  .top-bottom-border {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
  }
}
</style>

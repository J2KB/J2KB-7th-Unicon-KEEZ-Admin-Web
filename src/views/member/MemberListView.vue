<template>
  <div>
    <module-table
      responsive
      search
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
      :category-options="categoryOptions"
      @current-page="test1"
      @category="test2"
      @search="test3"
      @row-clicked="showDetailView"
      @sort-changed="sortChanged"
    />
  </div>
</template>
<script>
import ModuleTable from "@/components/modules/ModuleTable.vue";
export default {
  components: { ModuleTable },
  name: "member-list-view",
  data() {
    return {
      perPage: 25,
      categoryOptions: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
      ],
      fields: [
        {
          key: "id",
          label: "회원 고유 번호",
          sortable: true,
          thClass: "w25",
        },
        {
          key: "nickname",
          label: "별명",
          sortable: false,
          thClass: "w25",
        },
        {
          key: "points",
          label: "보유 포인트",
          sortable: false,
          thClass: "w25",
        },
        {
          key: "register_date",
          label: "가입 날짜",
          sortable: false,
          thClass: "w25",
        },
      ],
      items: [],
    };
  },
  mounted() {
    this.setSampleTableData();
  },
  methods: {
    setSampleTableData() {
      for (let i = 0; i < 300; i++) {
        this.items.push({
          id: i,
          nickname: "Dickerson",
          points: "300",
          register_date: "2022.10.06",
        });
      }
    },
    test1(page) {
      console.log(page);
    },
    test2(category) {
      console.log(category);
    },
    test3(search) {
      console.log(search);
    },
    showDetailView(item, index, event) {
      console.log(item, index, event);
      this.$router.push({
        name: "member-detail",
        params: { id: item.id },
      });
    },
    sortChanged(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep table.b-table thead th.w25 {
  width: 25%;
}
</style>

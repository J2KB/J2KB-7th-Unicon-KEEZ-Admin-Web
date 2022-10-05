<template>
  <div>
    <module-table
      responsive
      filter
      search
      :items="items"
      :fields="fields"
      :totalRows="items.length"
      :perPage="perPage"
      :category-options="categoryOptions"
      @current-page="test1"
      @category="test2"
      @search="test3"
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
        },
        {
          key: "nickname",
          label: "별명",
          sortable: false,
        },
        {
          key: "points",
          label: "보유 포인트",
          sortable: false,
        },
        {
          key: "register_date",
          label: "가입 날짜",
          sortable: false,
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
          points: "Macdonald",
          register_date: "ㅅㄷㄴㅅ",
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
  },
};
</script>

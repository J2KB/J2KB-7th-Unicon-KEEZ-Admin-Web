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
  name: "board-list-view",
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
          label: "게시글 고유 번호",
          sortable: true,
          thClass: "w15",
        },
        {
          key: "category",
          label: "카테고리",
          sortable: false,
          thClass: "w10",
        },
        {
          key: "title",
          label: "제목",
          sortable: false,
          thClass: "w45",
        },
        {
          key: "writer",
          label: "작성자",
          sortable: false,
          thClass: "w15",
        },
        {
          key: "write_date",
          label: "작성일",
          sortable: false,
          thClass: "w15",
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
          category: "일상생활",
          title: "Macdonald Macdonald  MacdonMacdonald Macdonald Macdonald",
          writer: "홍길동",
          write_date: "2022.10.06",
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
    },
    sortChanged(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep table.b-table thead th.w10 {
  width: 10%;
}
::v-deep table.b-table thead th.w15 {
  width: 15%;
}
::v-deep table.b-table thead th.w45 {
  width: 45%;
}
</style>

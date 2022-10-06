<template>
  <div class="module-table-wrapper">
    <!-- filter(category, search) -->
    <b-container
      v-if="filter || search"
      class="filter-wrapper pt-5 pl-3 pr-3 pb-4"
    >
      <b-row class="justify-content-between">
        <b-col class="col col-lg-2">
          <b-form-select
            v-if="filter"
            v-model="selectedCategory"
            :options="categoryOptions"
          ></b-form-select>
        </b-col>
        <b-col class="col col-lg-4">
          <b-input-group v-if="search">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="searchKeyword"
              placeholder="검색어를 입력해주세요"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    <!-- table -->
    <b-table
      class="module-table"
      :responsive="responsive"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      no-local-sorting
      @row-clicked="rowClicked"
      @sort-changed="sortChanged"
    ></b-table>
    <!-- -->
    <b-pagination
      class="module-pagination"
      v-model="currentPage"
      :per-page="perPage"
      :total-rows="totalRows"
      align="center"
      limit="10"
      hide-ellipsis
    ></b-pagination>
  </div>
</template>
<script>
export default {
  name: "module-table",
  props: {
    items: {
      type: Array,
      require: true,
    },
    fields: {
      type: Array,
      require: true,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    perPage: {
      type: Number,
      default: 0,
    },
    totalRows: {
      type: Number,
      default: 0,
    },
    categoryOptions: {
      type: Array,
      default: () => {
        return [];
      },
    },
    filter: {
      type: Boolean,
      default: false,
    },
    search: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      page: 1,
      category: "",
      keyword: "",
    };
  },
  created() {
    this.searchKeyword = "";
    this.currentPage = 1;
    this.selectedCategory = this.categoryOptions[0].value;
  },

  computed: {
    currentPage: {
      set(value) {
        this.page = value;
        this.$emit("current-page", value);
      },
      get() {
        return this.page;
      },
    },
    selectedCategory: {
      set(value) {
        this.category = value;
        this.$emit("category", value);
      },
      get() {
        return this.category;
      },
    },
    searchKeyword: {
      set(value) {
        this.keyword = value;
        this.$emit("search", value);
      },
      get() {
        return this.keyword;
      },
    },
  },
  methods: {
    rowClicked(item, index, event) {
      this.$emit("row-clicked", item, index, event);
    },
    sortChanged(event) {
      this.$emit("sort-changed", event);
    },
  },
};
</script>
<style lang="scss" scoped>
.module-table-wrapper {
  height: 100%;

  .filter-wrapper {
    max-width: 100%;
  }
}
</style>

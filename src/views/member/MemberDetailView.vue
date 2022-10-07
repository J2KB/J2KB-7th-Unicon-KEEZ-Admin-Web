<template>
  <div class="member-detail-view-wrapper">
    <templates-detail-header :id="id" title="회원 정보" />
    <template-detail-main>
      <div class="profile-wrapper">
        <div class="left-divide">
          <span class="nickname">{{ user.nickname }}</span>
          <div class="register-wrapper">
            <span class="register-type">{{ user.register_type }}</span>
            <span class="register-date">{{ user.register_date }}에 가입</span>
          </div>
        </div>
        <div class="right-divide">
          <div class="rectangle">
            <span class="points">{{ user.points }}</span>
            <span>보유 포인트</span>
          </div>
        </div>
      </div>
      <module-table
        responsive
        filter
        search
        :items="user.writeList"
        :fields="fields"
        :totalRows="user.writeList.length"
        :perPage="perPage"
        :category-options="categoryOptions"
        @current-page="test1"
        @category="test2"
        @search="test3"
        @row-clicked="showDetailView"
        @sort-changed="sortChanged"
      />
    </template-detail-main>
  </div>
</template>
<script>
import TemplatesDetailHeader from "@/components/templates/TemplatesDetailHeader.vue";
import TemplateDetailMain from "@/components/templates/TemplateDetailMain.vue";
import ModuleTable from "@/components/modules/ModuleTable.vue";
export default {
  components: { TemplatesDetailHeader, TemplateDetailMain, ModuleTable },
  name: "member-detail-view",
  props: {
    id: {
      type: [Number, String],
      default: "",
    },
  },
  data() {
    return {
      user: {
        nickname: "홍길동",
        register_type: "카카오로그인",
        register_date: "2022.10.06",
        points: "300",
        writeList: [],
      },
      perPage: 10,
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
          thClass: "w15",
        },
        {
          key: "title",
          label: "제목",
          sortable: false,
          thClass: "w50",
        },
        {
          key: "write_date",
          label: "작성일",
          sortable: false,
          thClass: "w20",
        },
      ],
    };
  },
  mounted() {
    this.setSampleTableData();
  },
  methods: {
    setSampleTableData() {
      // todo : call api and get user detail data and set info
      this.user.nickname = "홍길동";
      this.user.register_type = "카카오로그인";
      this.user.register_date = "2022.10.06";
      this.user.points = "300";
      for (let i = 0; i < 300; i++) {
        this.user.writeList.push({
          id: i,
          category: "Dickerson",
          title: "Macdonald Macdonald Macdonald Macdonald Macdonald",
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
.member-detail-view-wrapper {
  width: 100%;
  height: 100%;

  .profile-wrapper {
    width: 100%;
    padding: 2%;
    display: flex;
    .left-divide {
      width: 30%;
      .nickname {
        width: 100%;
        display: inline-block;
        font-size: 1.5rem;
        text-align: left;
        margin-bottom: 5%;
      }
      .register-wrapper {
        display: flex;
        align-items: center;
        .register-type {
          padding: 2% 4%;
          border: 1px solid #afafaf;
          border-radius: 20px;
          text-align: center;
          background-color: #ececec;
          margin-right: 3%;
        }
        .register-date {
          font-size: 1.2rem;
          color: #686868;
        }
      }
    }

    .right-divide {
      width: 70%;
      .rectangle {
        width: 23.3%;
        display: flex;
        flex-direction: column;
        border: 1px solid #686868;
        border-radius: 20px;

        padding: 2%;
        .points {
          display: inline-block;
          color: #ff3b30;
          font-size: 2rem;
        }
      }
    }
  }
}

::v-deep table.b-table thead th.w15 {
  width: 15%;
}
::v-deep table.b-table thead th.w20 {
  width: 20%;
}
::v-deep table.b-table thead th.w50 {
  width: 50%;
}
</style>

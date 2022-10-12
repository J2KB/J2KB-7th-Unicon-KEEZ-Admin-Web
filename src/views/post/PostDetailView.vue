<template>
  <div class="post-detail-view-wrapper">
    <templates-detail-header :id="id" title="게시글 상세 정보" />
    <template-detail-main class="post-detail-view">
      <div class="post-info-wrapper mb-4">
        <span class="category">{{ post.category }}</span>
        <div class="point-info">
          <div class="point-card">
            <span>{{ post.like }}</span>
            <span class="point-key">좋아요 수</span>
          </div>
          <div class="point-card">
            <span>{{ post.point }}</span
            ><span class="point-key">책정 포인트</span>
          </div>
          <div class="point-card">
            <span>{{ post.total_paid_point }}</span>
            <span class="point-key">지불된 포인트 합계</span>
          </div>
        </div>
      </div>
      <span class="title mb-2">{{ post.title }} </span>
      <div class="write-info">
        <span class="writer">{{ post.writer }}</span>
        <span class="date">{{ post.write_date }}</span>
      </div>
      <b-container class="container-height mw-100 mt-3 pb-5">
        <b-row class="h-100 row">
          <b-col class="h-100 col">
            <b-card
              no-body
              class="h-100"
              header-class="content-header"
              header="본문 요약"
              header-text-variant="white"
              align="center"
            >
              <b-card-body class="content-body">
                {{ post.summaryContent }}
              </b-card-body>
            </b-card>
          </b-col>
          <b-col class="h-100 col">
            <b-card
              no-body
              class="h-100"
              header-class="content-header"
              header="본문 내용"
              header-text-variant="white"
              align="center"
            >
              <b-card-body class="content-body">
                {{ post.content }}
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <b-card-group class="mt-3" deck> </b-card-group>
    </template-detail-main>
  </div>
</template>
<script>
import TemplatesDetailHeader from "@/components/templates/TemplatesDetailHeader.vue";
import TemplateDetailMain from "@/components/templates/TemplateDetailMain.vue";
export default {
  components: { TemplatesDetailHeader, TemplateDetailMain },
  name: "post-detail-view",
  props: {
    id: {
      type: [Number, String],
      default: "",
    },
  },
  data() {
    return {
      post: {
        title: "",
        category: "",
        summaryContent: "",
        content: "",
        total_paid_point: 0,
        point: 0,
        like: 0,
        writer: "",
        write_date: "",
      },
    };
  },
  mounted() {
    this.setSampleTableData();
  },
  methods: {
    setSampleTableData() {
      // todo : call api and get post detail data and set info
      this.post = {
        title: "dkssdudkfsdlfdsjfldkjfdsfjoaefjslkdfjeofadklfajeo",
        category: "일상생활",
        summaryContent: "dfsdafadsfdsf\n\n",
        content: "dfsf",
        total_paid_point: 40000,
        point: 300,
        like: 100,
        writer: "홍길동",
        write_date: "2022.10.10",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin card-default {
  display: flex;
  flex-direction: column;
  border: 1px solid #afafaf;
  border-radius: 20px;
  color: #ff3b30;
  font-weight: 600;
}
.post-detail-view-wrapper {
  width: 100%;
  height: 100%;
  .post-detail-view {
    height: calc(100% - 8.8%);
    padding: 5%;
    .post-info-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .category {
        display: inline-block;
        padding: 1%;
        border: 1px solid #ff3b30;
        border-radius: 40px;
        background-color: #ff3b30;
        color: white;
      }

      .point-info {
        display: flex;
        justify-content: flex-end;
        gap: 5%;

        .point-card {
          @include card-default;
          font-size: 2.5rem;
          padding: 6%;
          .point-key {
            color: #afafaf;
            font-size: 0.8rem;
          }
        }
      }
    }

    .title {
      border-top: 3px solid #ff4444;
      border-bottom: 1px solid #d9d9d9;
      display: inline-block;
      width: 100%;
      text-align: left;
      font-size: 1.5rem;
      padding: 1% 0;
    }

    .write-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;

      .writer {
        font-size: 1rem;
      }
      .date {
        color: #686868;
      }
    }

    .container-height {
      height: 65%;
      padding: 0;

      .row {
        display: flex;
        gap: 3%;
        margin: 0;

        .col {
          padding: 0;
          .content-header {
            background-color: #ff4444;
          }

          .content-body {
            white-space: pre-line;
          }
        }
      }
    }
  }
}
</style>

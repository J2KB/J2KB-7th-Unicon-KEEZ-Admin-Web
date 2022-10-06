<template>
  <div class="tempalte-detail-header">
    <b-icon class="h3" icon="chevron-left" />
    <span class="id">#{{ id }}</span>
    <span class="title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "template-detail-header",
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.tempalte-detail-header {
  width: 100%;

  border-bottom: 1px solid #dee2e6;
  padding: 1.5%;
  text-align: left;

  display: flex;
  align-items: center;

  .id {
    color: #afafaf;
    font-size: 1.3rem;
    margin-left: 0.8%;
    margin-right: 0.6%;
  }
  .title {
    font-size: 2rem;
  }
}
</style>

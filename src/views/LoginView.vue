<template>
  <div class="login-view-wrapper">
    <b-form class="w-50 p-5 border align-middle">
      <b-form-group class="w-75 mx-auto">
        <img class="mb-5" src="@/assets/logo.png" fluid />
        <b-input v-model="form.id" placeholder="아이디"></b-input>
        <b-input
          class="mt-3"
          v-model="form.password"
          placeholder="비밀번호"
          type="password"
        ></b-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="w-50 mt-5" @click="login"
        >로그인</b-button
      >
    </b-form>
  </div>
</template>
<script>
export default {
  name: "login-view",
  data() {
    return {
      form: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // todo : match admin id, password

      this.$router.push("/dashboard");
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

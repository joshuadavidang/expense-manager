<template>
  <h1>Hello Vue, Welcome to home page</h1>
  <button class="logoutbtn" v-on:click="logoutbtn">Log Out</button>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logoutbtn() {
      localStorage.removeItem("user-info");
      let user = localStorage.getItem("user-info");
      if (!user) {
        // if user-info is blank, automatically routes to Login Page
        this.$router.push({ name: "Login" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      // if user-info is blank, automatically routes to Sign Up Page
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.logoutbtn {
  width: 320px;
  height: 40px;
  border: 1px solid blue;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
}
</style>

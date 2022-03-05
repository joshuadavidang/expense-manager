<template>
  <h1>Hello {{ this.name }}, Welcome to home page</h1>
  <button class="logoutbtn" v-on:click="logoutbtn">Log Out</button>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      // if user is not signed in, automatically routes to login page
      console.log("Sign in to access your account");
      this.$router.push({ name: "Login" });
    } else {
      let userName = JSON.parse(user)[0].name;
      this.name = userName;
    }
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logoutbtn() {
      let user = localStorage.removeItem("user-info");
      if (!user) {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style scoped>
.logoutbtn {
  width: 320px;
  height: 40px;
  border: none;
  background-color: red;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>

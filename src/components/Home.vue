<template>
  <h1>Hello {{ this.name }}, Welcome to home page</h1>
  <button class="logoutbtn" v-on:click="logoutbtn">Log Out</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    let userName = JSON.parse(user)[0].name;
    this.name = userName;
    if (!user) {
      // if user is not signed in, automatically routes to login page
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    logoutbtn() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
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

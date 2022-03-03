<template>
  <h1>Login Page</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button class="loginbtn" v-on:click="loginbtn">Login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginbtn() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 0.2px solid black;
  border-radius: 5px;
}

.loginbtn {
  width: 320px;
  height: 40px;
  border: none;
  background-color: rgb(25, 17, 146);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>

<template>
  <div class="flex w-screen h-screen grid justify-items-center">
    <div class="login flex items-center">
      <div>
        <h1 class="font-bold text-center text-2xl mb-5 font-mono">
          Login Page.
        </h1>

        <input type="email" v-model="email" placeholder="Enter email" />
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
        />
        <button class="loginbtn" v-on:click="loginbtn">Login</button>
        <p>
          <router-link to="/signup">
            <p class="text-center mt-3">
              Sign up <span class="underline">here</span>
            </p></router-link
          >
        </p>
      </div>
    </div>
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
      if (this.email == "" || this.password == "") {
        alert("Empty fields not allowed");
      } else {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        if (result.status == 200 && result.data.length > 0) {
          console.log(result.data[0]);
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
};
</script>

<style scoped>
/* .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 0.2px solid black;
  border-radius: 5px;
} */

.loginbtn {
  width: 320px;
  height: 40px;
  border: none;
  background-color: rgb(100, 175, 29);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.img {
  width: 20%;
}
</style>

<template>
  <div class="flex w-screen h-screen grid justify-items-center">
    <div class="login flex items-center">
      <div class="bg-gray-50 p-16 rounded-lg">
        <h1 class="font-bold text-center text-2xl mb-5 font-mono">
          Login Page.
        </h1>

        <label class="block mb-5">
          <span class="font-semibold"> Email </span>
          <input
            type="email"
            v-model="email"
            name="email"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="joshua.ang@blockchain.sg"
          />
        </label>

        <label class="block mb-5">
          <span class="font-semibold"> Password </span>
          <input
            type="password"
            v-model="password"
            name="password"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="*********"
          />
        </label>

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
        } else {
          alert("wrong password!");
          // reset input fields
          this.email = "";
          this.password = "";
        }
      }
    },
  },
};
</script>

<style scoped>
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

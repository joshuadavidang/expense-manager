<template>
  <div class="flex w-screen h-screen grid justify-items-center">
    <div class="register flex items-center">
      <div>
        <h1 class="font-bold text-center text-2xl mb-5 font-mono">
          Sign Up Page.
        </h1>

        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="email" v-model="email" placeholder="Enter email" />
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
        />
        <button class="signupbtn" v-on:click="signupbtn">Sign Up</button>

        <p>
          <router-link to="/login">
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
import { v4 as uuidv4 } from "uuid";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signupbtn() {
      if (!this.name == "" || !this.email == "" || !this.password == "") {
        let result = await axios.post("http://localhost:3000/users", {
          id: uuidv4(),
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status === 201) {
          console.log(result);
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Login" });
        }
      } else {
        alert("No empty fields allowed.");
      }
    },
  },
};
</script>

<style scoped>
/* .register input {
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

.signupbtn {
  width: 320px;
  height: 40px;
  border: none;
  background-color: blueviolet;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>

<template>
  <div class="flex w-screen h-screen grid justify-items-center">
    <div class="register flex items-center">
      <div class="bg-gray-50 p-16 rounded-3xl">
        <h1 class="font-bold text-center text-2xl mb-5 font-mono">
          Create an account.
        </h1>

        <label class="block mb-5">
          <span class="font-semibold"> Name </span>
          <input
            type="text"
            v-model="name"
            name="name"
            class="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Joshua David Ang"
          />
        </label>

        <label class="block mb-5">
          <span class="font-semibold"> Email </span>
          <input
            type="email"
            v-model="email"
            name="email"
            class="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="joshua.ang@blockchain.sg"
          />
        </label>

        <label class="block mb-5">
          <span class="font-semibold"> Password </span>
          <input
            type="text"
            v-model="password"
            name="password"
            class="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="*********"
          />
        </label>

        <label class="block mb-5">
          <span class="font-semibold"> Confirm Password </span>
          <input
            type="text"
            v-model="cpassword"
            name="password"
            class="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="*********"
          />
        </label>

        <button class="signupbtn" v-on:click="signupbtn">
          Create an account
        </button>

        <p>
          <router-link to="/login">
            <p class="mt-5">
              Have an account? Login <span class="underline">here</span>
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
      cpassword: "",
    };
  },
  methods: {
    async signupbtn() {
      if (!this.name == "" && !this.email == "" && !this.password == "") {
        let result = await axios.post("http://localhost:3000/users", {
          id: uuidv4(),
          name: this.name,
          email: this.email,
          password: this.password,
          cpassword: this.cpassword,
        });

        if (result.status === 201) {
          console.log("account successfully created", result);
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
.signupbtn {
  width: 320px;
  height: 48px;
  border: none;
  background-color: blueviolet;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>

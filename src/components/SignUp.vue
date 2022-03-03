<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="email" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button class="signupbtn" v-on:click="signupbtn">Sign Up</button>
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
      let result = await axios.post("http://localhost:3000/users", {
        id: uuidv4(),
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status === 201) {
        console.log("signupdone!");
        console.log(result);
      }
    },
  },
};
</script>

<style scoped>
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid blue;
  border-radius: 5px;
}

.signupbtn {
  width: 320px;
  height: 40px;
  border: 1px solid blue;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
}
</style>

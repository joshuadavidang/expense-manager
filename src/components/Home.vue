<template>
  <div class="flex bg-red-200 w-screen h-screen">
    <div class="bg-dblue w-1/4 h-screen">
      <label class="flex justify-center">
        <p class="pt-16 text-white text-lg">Hello, {{ this.name }} 👋</p>
      </label>

      <label class="flex justify-center">
        <p class="pt-5 text-white text-sm">
          <span>
            <button class="addBtn bg-white" v-on:click="addBtn">
              Add Transaction
            </button></span
          >
        </p>
      </label>

      <div class="flex justify-center">
        <div class="bg-white w-11/12 p-5 mt-10 mb-10 rounded-xl">
          <p>HELLO</p>

          <p>HELLO</p>

          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
      </div>

      <label class="flex justify-center">
        <button class="logoutbtn" v-on:click="logoutbtn">Log Out</button>
      </label>
    </div>

    <div class="bg-red-300 w-3/4 h-screen">remaining screen</div>
  </div>
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
    addBtn() {
      alert("Add clicked");
    },
  },
};
</script>

<style scoped>
.logoutbtn {
  width: 130px;
  height: 40px;
  border: none;
  background-color: red;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.addBtn {
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  width: 8rem;
  height: 35px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
</style>

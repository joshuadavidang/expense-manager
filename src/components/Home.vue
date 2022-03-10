<template>
  <div class="flex bg-red-200 w-screen h-screen">
    <div class="bg-dblue w-1/4 h-screen">
      <label class="flex justify-center">
        <p class="pt-16 text-white text-sm">Hello, {{ this.name }} 👋</p>
      </label>

      <label class="flex justify-center">
        <p class="flex pt-5 text-white text-sm">
          <router-link to="/addtransaction">
            <span>
              <button
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                v-on:click="addBtn"
              >
                Add Transaction
              </button></span
            >
          </router-link>

          <span> <DarkMode /></span>
        </p>
      </label>

      <div class="flex justify-center">
        <div
          class="bg-white w-4/5 p-5 mt-6 mb-10 rounded-xl h-96 overflow-y-auto"
        >
          <h2 class="text-center mb-3 font-semibold">Latest Transactions</h2>

          <div class="flex justify-center">
            <ul
              class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                v-for="item in items"
                :key="item.id"
              >
                <span class="inline-block"> {{ item.description }}</span>
                <span class="block"> {{ item.transactionDate }}</span>
                <span class="text-red-500">
                  - ${{ item.transactionAmount }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <label class="flex justify-center">
        <button
          type="button"
          v-on:click="logoutbtn"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Log Out
        </button>
      </label>
    </div>

    <div class="bg-white w-3/4 h-screen">
      <div>
        <NavBar />
      </div>

      <div class="m-8">
        <p>Total Amount Spent ($)</p>
        <h2 class="text-mono text-5xl">${{ this.displaySum }}</h2>
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Table from "./Table.vue";
import NavBar from "./NavBar.vue";
import DarkMode from "./DarkMode.vue";

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

    axios.get("http://localhost:3000/transactions").then((result) => {
      this.items = result.data;
      let sum = 0;
      for (var i = 0; i < result.data.length; i++) {
        sum += result.data[i].transactionAmount;
        this.displaySum = sum;
      }
    });
  },
  data() {
    return {
      name: "",
      items: "",
      displaySum: 0,
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
      // alert("Add clicked");
    },
  },
  components: {
    Table,
    NavBar,
    DarkMode,
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

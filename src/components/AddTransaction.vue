<template>
  <h1>transaction</h1>

  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  <span>
                    <h3
                      class="mb-2 text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Description
                    </h3>

                    <input
                      type="text"
                      v-model="description"
                      name="description"
                      class="w-full mb-3 mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                      placeholder="Iced Latte with Oat Milk"
                    />
                  </span>

                  <span>
                    <h3
                      class="mb-2 text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Date
                    </h3>

                    <input
                      type="text"
                      v-model="transactionDate"
                      name="transactionDate"
                      class="mb-3 mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Select date"
                    />
                  </span>

                  <span>
                    <h3
                      class="mb-2 text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Amount
                    </h3>

                    <input
                      type="number"
                      v-model="transactionAmount"
                      name="transactionAmount"
                      class="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="7.80"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            v-on:click="newTransaction"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Add
          </button>

          <router-link to="/">
            <button
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTransaction",
  date() {
    return {
      id: "",
      description: "",
      transactionDate: "",
      transactionAmount: 0,
    };
  },
  methods: {
    async newTransaction() {
      if (
        this.description == "" &&
        this.transactionDate == "" &&
        this.transactionAmount == 0
      ) {
        alert("Empty fields not allowed");
      } else {
        let result = await axios.post("http://localhost:3000/transactions", {
          id: uuidv4(),
          description: this.description,
          transactionDate: this.transactionDate,
          transactionAmount: this.transactionAmount,
        });

        if (result.status == 201) {
          this.description = "";
          this.transactionDate = "";
          this.transactionAmount = 0;
          console.log("Transaction Added!", result);
        } else {
          console.log("Error");
        }
      }
    },
  },
};
</script>

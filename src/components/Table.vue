<template>
  <div>
    <div>
      Total Amount Spent for
      <span class="text-green-800 font-semibold underline"
        >{{ this.presentMonth }}
      </span>
      ($)

      <h2 class="text-mono text-5xl mt-5 mb-5">${{ this.displaySum }}</h2>
    </div>

    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-md sm:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Date
                  </th>

                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Amount Spent ($)
                  </th>

                  <th scope="col" class="relative py-3 px-6">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  v-for="item in items"
                  :key="item.id"
                >
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.description }}
                  </td>
                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ item.transactionDate }}
                  </td>

                  <td
                    class="py-4 px-6 text-sm text-red-500 whitespace-nowrap dark:text-red-400"
                  >
                    - ${{ item.transactionAmount.toFixed(2) }}
                  </td>

                  <td
                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                    v-on:click="getIndividual(item)"
                  >
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                      >Delete</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Table",
  mounted() {
    this.getRequestedData();

    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let d = new Date();
    let m = month[d.getMonth()];
    this.presentMonth = m;
  },
  data() {
    return {
      items: "",
    };
  },
  methods: {
    getRequestedData() {
      axios.get("http://localhost:3000/transactions").then((result) => {
        this.items = result.data;
        let sum = 0;
        for (var i = 0; i < result.data.length; i++) {
          sum += result.data[i].transactionAmount;
          this.displaySum = sum;
        }
      });
    },

    getIndividual(item) {
      console.log(item.description);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:3000/transactions/${item.id}`)
            .then((result) => {
              console.log(result);
              if (result.status == 200) {
                console.log(`${item.description} has been deleted`);
                Swal.fire(
                  "Deleted",
                  `${item.description} has been deleted`,
                  "success"
                );
                this.getRequestedData();
              }
            });
        }
      });
    },
  },
};
</script>

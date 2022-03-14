<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-md sm:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-gray-50 dark:bg-gray-700">
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

export default {
  name: "Table",
  mounted() {
    axios.get("http://localhost:3000/transactions").then((result) => {
      this.items = result.data;
      // console.log(this.items);
    });
  },
  data() {
    return {
      items: "",
    };
  },
};
</script>

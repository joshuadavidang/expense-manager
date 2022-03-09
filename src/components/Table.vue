<template>
  <h1>this is table</h1>

  <div class="flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table
            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
          >
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Category
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Price
                </th>
                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Imac 27"
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Desktop PC
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $1999
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </td>
              </tr>
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Laptop
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $2999
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </td>
              </tr>
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  iPhone 13 Pro
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Phone
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $999
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </td>
              </tr>
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Magic Mouse 2
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Accessories
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $99
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </td>
              </tr>
              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Watch Series 7
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Accessories
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $599
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

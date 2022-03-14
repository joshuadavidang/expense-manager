<template>
  <button
    v-on:click="toggleBtn"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // if (
    //   localStorage.getItem("color-theme") === "dark" ||
    //   (!("color-theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
  },
  methods: {
    toggleBtn() {
      if (!this.isActive) {
        this.isActive = true;
        console.log(this.isActive);
        document.documentElement.classList.add("dark");
        // Dark Mode Activated
      } else {
        this.isActive = false;
        console.log(this.isActive);
        document.documentElement.classList.remove("dark");
        // Dark Mode Disabled
      }
    },
  },
};
</script>

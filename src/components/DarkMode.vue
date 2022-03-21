<template>
  <button
    v-on:click="toggleBtn"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <span v-if="this.isActive == true">
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
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path></svg
    ></span>

    <span v-else>
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
    </span>
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
    console.log("Initial Status On Mount", this.isActive);
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      document.documentElement.classList.add("dark");
      this.isActive = true;
      console.log("Dark Mode Status", this.isActive);
    } else {
      document.documentElement.classList.remove("dark");
      this.isActive = false;
      console.log("Light Mode Status", this.isActive);
    }
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

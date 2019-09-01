<template>
  <div
    class="app-select align-middle w-full outline-none relative"
    @blur="showMenu = false"
    tabindex="0"
  >
    <div
      @click="toggleMenu()"
      class="inline-flex w-full justify-between cursor-pointer items-center bg-white rounded px-4 py-3 border border-grey-25"
    >
      <span>{{ selectedOption.id ? selectedOption.name : placeholder }}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.41506 6.65079L7.24084 11.1142C7.60026 11.5335 8.23156 11.5821 8.65089 11.2227C8.68977 11.1893 8.72603 11.1531 8.75935 11.1142L12.5851 6.65079C12.9446 6.23147 12.896 5.60017 12.4767 5.24074C12.2954 5.08539 12.0646 5 11.8259 5L4.17432 5C3.62203 5 3.17432 5.44772 3.17432 6C3.17432 6.23871 3.25971 6.46955 3.41506 6.65079Z"
          fill="#3F3356"
        />
      </svg>
    </div>
    <div
      v-if="showMenu"
      class="z-50 mt-3 rounded bg-white py-1 shadow absolute left-0 right-0 border border-grey-25"
    >
      <div
        class="px-4 py-3 cursor-pointer hover:text-grey-100 hover:bg-grey-10"
        :class="{ 'text-grey-100': selectedOption.id == option.id, 'text-grey-75': selectedOption.id != option.id }"
        v-for="option in options"
        :key="option.id"
        @click="updateOption(option)"
      >{{ option.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {
      type: Object
    },
    placeholder: {
      type: String,
      required: false,
      default: "Please select an option"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      selectedOption: {},
      showMenu: false
    };
  },
  mounted() {
    this.selectedOption = this.selected ? this.selected : {};
  },
  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.$emit("updateOption", this.selectedOption);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
.app-select div {
  transition: all 0.3s;
}
</style>

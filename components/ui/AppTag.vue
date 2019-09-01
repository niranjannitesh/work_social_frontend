<template>
  <div class="inline-flex items-center bg-blue-25 px-3 py-2 text-blue-100 rounded">
    <span class="tracking-wide">{{ value.name ? value.name : value }}</span>
    <svg
      class="ml-3 cursor-pointer"
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="$emit('onRemove')"
    >
      <path
        d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM8.625 7.575L7.575 8.625L6 7.05L4.425 8.625L3.375 7.575L4.95 6L3.375 4.425L4.425 3.375L6 4.95L7.575 3.375L8.625 4.425L7.05 6L8.625 7.575Z"
        fill="#6979F8"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, String],
      default: ""
    }
  }
};
</script>

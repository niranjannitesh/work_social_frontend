<template>
  <button
    class="app-button align-middle text-white rounded px-4 py-2 focus:outline-none uppercase text-sm font-bold inline-flex items-center justify-center tracking-wider border-2"
    :class="{
      'border-blue-100 bg-transparent text-blue-100 hover:bg-blue-25': type == 'outlined' && !disabled,
      'border-transparent hover:border-blue-25 bg-transparent text-blue-100 hover:bg-blue-25': type == 'secondary',
      'border-blue-100 bg-blue-100': type == 'primary' && !disabled,
      'bg-grey-25 border-grey-25 text-grey-75': disabled
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.app-button {
  transition: all 0.3s;
}

.app-button:disabled {
  pointer-events: none;
}
</style>

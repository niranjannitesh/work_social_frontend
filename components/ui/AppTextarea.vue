<template>
  <textarea
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :autofocus="autofocus"
    :required="required"
    :disabled="disabled"
    class="app-text-area outline-none py-3 px-4 bg-white rounded border-2 border-grey-25 focus-within:border-blue-100 w-full hover:border-grey-75 h-40 placeholder-grey-75"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      default: "",
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    }
  }
};
</script>

<style>
.app-text-area {
  transition: all 0.3s;
}
</style>

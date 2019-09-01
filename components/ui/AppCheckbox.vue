<template>
  <div
    class="app-checkbox inline-flex items-center cursor-pointer"
    @click="toggle"
    :aria-disabled="disabled"
  >
    <div
      class="inline-flex w-6 h-6 items-center justify-center border-2 rounded"
      :aria-checked="value"
      :class="{ 'border-blue-100 shadow-check': checkboxState, 'border-grey-25': !checkboxState && !disabled, 'bg-grey-10 border-grey-25': disabled }"
    >
      <svg
        :class="{ 'opacity-0': !checkboxState }"
        class="m-0"
        width="12"
        height="10"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49373 0.758435C8.83831 0.413855 9.39698 0.413855 9.74156 0.758435C10.0861 1.10302 10.0861 1.66169 9.74156 2.00627L4.44745 7.30039C4.10287 7.64497 3.54419 7.64497 3.19961 7.30039L0.258435 4.35921C-0.0861451 4.01463 -0.0861451 3.45596 0.258435 3.11138C0.603015 2.7668 1.16169 2.7668 1.50627 3.11138L3.82353 5.42863L8.49373 0.758435Z"
          fill="#6979F8"
        />
      </svg>
    </div>
    <input
      type="checkbox"
      class="hidden"
      :value="value"
      :disabled="disabled"
      :required="required"
      :checked="checkboxState"
    />
    <span class="select-none ml-2" :class="{ 'text-grey-75': disabled }">{{ label }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    value: [String, Boolean],
    required: Boolean,
    disabled: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    model: {
      type: String | Array,
      default: undefined
    },
    label: String
  },
  computed: {
    checkboxState() {
      if (this.model === undefined) return this.value;
      if (Array.isArray(this.model))
        return this.model.indexOf(this.value) !== -1;
      return this.model || this.value;
    }
  },
  methods: {
    toggle: function() {
      if (this.disabled) return;
      let value = this.model || this.value;
      if (Array.isArray(value)) {
        const i = value.indexOf(this.value);
        if (i === -1) value.push(this.value);
        else value.splice(i, 1);
      } else value = !this.checkboxState;
      this.$emit("change", value);
    }
  }
};
</script>

<style>
.app-checkbox div,
.app-checkbox svg {
  transition: all 0.3s;
}

.app-checkbox:hover:not([aria-disabled]) > div:first-child {
  @apply border-blue-100;
}
</style>

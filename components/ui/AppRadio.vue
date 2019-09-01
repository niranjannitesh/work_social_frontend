<template>
  <div class="app-radio inline-flex items-center">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :class="className"
      :required="required"
      :disabled="disabled"
      @change="onChange"
      :checked="state"
      class="hidden"
    />
    <label :for="id" class="inline-flex cursor-pointer">
      <span
        class="inline-flex items-center justify-center w-6 h-6 border-2 rounded-full"
        :class="{ 'border-blue-100': state, 'border-grey-25 hover:border-blue-100': !state && !disabled, 'bg-grey-10 border-grey-25': disabled }"
      >
        <span class="w-3 h-3 bg-blue-100 rounded-full" :class="{ 'opacity-0': !state}"></span>
      </span>
      <span class="select-none ml-2" :class="{ 'text-grey-75': disabled }">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "input"
  },

  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    value: {
      default: ""
    },
    modelValue: {
      default: undefined
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    model: {},
    label: {
      type: String,
      default: ""
    }
  },

  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      return this.modelValue === this.value;
    }
  },

  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      this.$emit("input", this.state ? "" : this.value);
    }
  },

  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },

  mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  }
};
</script>

<style>
.app-radio:hover > input:not([disabled]) + label span:first-child {
  @apply border-blue-100;
}

.app-radio label span {
  transition: all 0.3s;
}
</style>

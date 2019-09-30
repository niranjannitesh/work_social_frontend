<template>
  <div
    class="app-text-field inline-flex items-center px-4 bg-white rounded border-2 border-grey-25 focus-within:border-blue-100 w-full hover:border-grey-75"
    :class="{ 'bg-grey-10': disabled }"
  >
    <svg
      v-if="type == 'search'"
      class="mr-3 user-select-none"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0536 18.046C19.3319 18.3242 19.3319 18.7754 19.0536 19.0536C18.7754 19.3319 18.3242 19.3319 18.046 19.0536L14.626 15.6336C14.3477 15.3554 14.3477 14.9042 14.626 14.626C14.9042 14.3477 15.3554 14.3477 15.6336 14.626L19.0536 18.046ZM8.2898 15.8423C4.11867 15.8423 0.737305 12.4609 0.737305 8.2898C0.737305 4.11867 4.11867 0.737305 8.2898 0.737305C12.4609 0.737305 15.8423 4.11867 15.8423 8.2898C15.8423 12.4609 12.4609 15.8423 8.2898 15.8423ZM8.2898 14.4173C11.6739 14.4173 14.4173 11.6739 14.4173 8.2898C14.4173 4.90568 11.6739 2.1623 8.2898 2.1623C4.90568 2.1623 2.1623 4.90568 2.1623 8.2898C2.1623 11.6739 4.90568 14.4173 8.2898 14.4173ZM4.7748 7.7198C4.7748 7.98214 4.56214 8.1948 4.2998 8.1948C4.03747 8.1948 3.8248 7.98214 3.8248 7.7198C3.8248 5.56866 5.56866 3.8248 7.7198 3.8248C7.98214 3.8248 8.1948 4.03747 8.1948 4.2998C8.1948 4.56214 7.98214 4.7748 7.7198 4.7748C6.09333 4.7748 4.7748 6.09333 4.7748 7.7198Z"
        fill="#3F3356"
      />
    </svg>
    <slot name="icon" />
    <input
      class="outline-none placeholder-grey-75 py-3 bg-transparent w-full"
      :type="inputType"
      :placeholder="placeholder"
      :value="value"
      :readonly="readonly"
      :autofocus="autofocus"
      :required="required"
      :disabled="disabled"
      ref="input"
      @input="$emit('input', $event.target.value)"
    />
    <div
      v-if="type == 'password'"
      class="cursor-pointer w-6 h-10 inline-flex items-center"
      @click="clicked"
    >
      <svg
        v-if="inputType == 'password'"
        width="24"
        height="20"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0.36377C4.36364 0.36377 1.25818 2.62559 0 5.81832C1.25818 9.01104 4.36364 11.2729 8 11.2729C11.6364 11.2729 14.7418 9.01104 16 5.81832C14.7418 2.62559 11.6364 0.36377 8 0.36377ZM8 9.45468C5.99273 9.45468 4.36364 7.82559 4.36364 5.81832C4.36364 3.81104 5.99273 2.18195 8 2.18195C10.0073 2.18195 11.6364 3.81104 11.6364 5.81832C11.6364 7.82559 10.0073 9.45468 8 9.45468ZM8 3.6365C6.79273 3.6365 5.81818 4.61104 5.81818 5.81832C5.81818 7.02559 6.79273 8.00013 8 8.00013C9.20727 8.00013 10.1818 7.02559 10.1818 5.81832C10.1818 4.61104 9.20727 3.6365 8 3.6365Z"
          fill="#D0C9D6"
        />
      </svg>
      <svg
        v-if="inputType == 'text'"
        width="28"
        height="28"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8978 6.97804C16.0341 7.19486 16.0341 7.47054 15.8978 7.68736C15.7698 7.89069 12.7139 12.6659 8 12.6659C7.26747 12.6613 6.54003 12.5437 5.84338 12.3173L13.7099 4.45076C14.5431 5.19732 15.2783 6.04652 15.8978 6.97804ZM15.1372 0.194854C15.3974 0.455182 15.3974 0.877173 15.1372 1.1375L2.47078 13.8039C2.30429 13.9812 2.05444 14.0538 1.81887 13.9932C1.58331 13.9327 1.39941 13.7486 1.33903 13.513C1.27866 13.2774 1.35139 13.0276 1.5288 12.8612L3.34143 11.0486C2.0718 10.1281 0.975126 8.99014 0.102168 7.68736C-0.0340561 7.47054 -0.0340561 7.19486 0.102168 6.97804C0.230166 6.77471 3.2861 1.99948 8 1.99948C9.2192 2.01176 10.417 2.32089 11.4899 2.90013L14.1952 0.194854C14.4555 -0.0649513 14.8769 -0.0649513 15.1372 0.194854ZM5.33339 7.3327C5.33631 7.80611 5.46864 8.26971 5.71605 8.67334L9.3413 5.04875C8.93761 4.80094 8.47368 4.66859 8 4.66609C6.52727 4.66609 5.33339 5.85997 5.33339 7.3327Z"
          fill="#D0C9D6"
        />
      </svg>
    </div>
    <div
      v-if="type == 'search' || clearButton"
      class="cursor-pointer h-10 inline-flex items-center"
      @click="clearInput"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM8.625 7.575L7.575 8.625L6 7.05L4.425 8.625L3.375 7.575L4.95 6L3.375 4.425L4.425 3.375L6 4.95L7.575 3.375L8.625 4.425L7.05 6L8.625 7.575Z"
          fill="#D0C9D6"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
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
    clearButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputType: this.type
    };
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  },
  methods: {
    clicked: function() {
      if (this.inputType == "password") this.inputType = "text";
      else this.inputType = "password";
    },
    clearInput: function() {
      this.$emit("input", "");
    }
  }
};
</script>

<style>
.app-text-field {
  transition: all 0.3s;
}
</style>

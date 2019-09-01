<template>
  <div
    class="app-tag-input inline-flex flex-wrap items-center px-4 py-3 bg-white rounded border-2 border-grey-25 focus-within:border-blue-100 w-full"
  >
    <slot name="icon" />
    <app-tag
      v-for="(item, index) in tags"
      :key="item.id"
      :value="item"
      class="mr-3 mb-2"
      @onRemove="removeTag(index)"
    />
    <input
      class="outline-none placeholder-grey-75 py-1 bg-transparent w-full"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="inputValue"
      @keydown.enter="addItem"
      @keydown.8="removeLastTag"
    />
  </div>
</template>

<script>
import AppTag from "./AppTag";

export default {
  components: {
    AppTag
  },
  props: {
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    addItem() {
      this.$emit("onAdd", this.inputValue);
      this.inputValue = "";
    },
    removeLastTag() {
      if (!this.inputValue.length) {
        this.removeTag(this.tags.length - 1);
      }
    },
    removeTag(index) {
      this.$emit("onRemove", index);
    }
  }
};
</script>

<style>
.app-tag-input {
  transition: all 0.3s;
}
</style>

<script>
export default {
  props: {
    defaultIndex: {
      default: 0,
      type: Number
    },
    onSelect: {
      type: Function
    }
  },
  data() {
    return {
      selectedIndex: this.defaultIndex
    };
  },
  methods: {
    switchTab(e, index, isDisabled) {
      if (!isDisabled) {
        this.selectedIndex = index;
        this.onSelect && this.onSelect(e, index);
      }
    }
  },
  render() {
    const tabs = this.$slots.default.filter(
      component => component.componentOptions
    );

    const tabList = [];
    tabs.forEach((child, index) => {
      const { title, titleSlot, disabled } = child.componentOptions.propsData;
      const content = titleSlot ? this.$slots[titleSlot] : title;
      const isDisabled = disabled === true || disabled === "";

      tabList.push(
        <li
          class={
            this.selectedIndex === index
              ? "px-6 py-4 uppercase tracking-wide cursor-pointer relative"
              : "px-6 py-4 uppercase tracking-wide cursor-pointer relative text-grey-75 hover:text-black"
          }
          role="tab"
          onClick={e => this.switchTab(e, index, isDisabled)}
          aria-selected={this.selectedIndex === index ? "true" : "false"}
          aria-disabled={isDisabled ? "true" : "false"}
        >
          {content}
          <span
            class={
              this.selectedIndex === index
                ? "h-1 rounded rounded-b-none absolute bottom-0 left-0 right-0 bg-blue-100"
                : ""
            }
          />
        </li>
      );
    });
    return (
      <div class="app-tabs w-full" role="tabs">
        <ul
          class="inline-flex bg-white w-full shadow-tabs px-4 rounded rounded-b-none"
          role="tablist"
        >
          {this.$slots.left}
          {tabList}
          {this.$slots.right}
        </ul>
        {tabs[this.selectedIndex]}
      </div>
    );
  }
};
</script>

<style>
.app-tabs li:hover:not([aria-selected="true"]) span {
  @apply h-1 rounded rounded-b-none absolute bottom-0 left-0 right-0 bg-grey-25;
  animation: up 0.3s ease-in-out;
}

.app-tabs li:hover span {
  transition: all 0.3s;
}

.app-tabs li {
  transition: all 0.3s;
}

@keyframes up {
  0% {
    transform: translate(0, 4px);
    opacity: 0;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>

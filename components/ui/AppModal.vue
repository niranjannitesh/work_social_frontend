<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-transparent-25 z-50" v-show="show">
    <app-card class="modal">
      <div class="flex items-center justify-between">
        <span class="text-xl">{{ title }}</span>
        <span
          class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition cursor-pointer"
          @click="dismiss"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </span>
      </div>
      <slot />
    </app-card>
  </div>
</template>

<script>
import AppCard from "./AppCard";

export default {
  props: {
    show: {
      required: true
    },
    title: {
      type: String
    }
  },
  components: {
    AppCard
  },
  watch: {
    show(show) {
      if (show) {
        document.body.style.setProperty("overflow", "hidden");
      } else {
        document.body.style.removeProperty("overflow");
      }
    }
  },
  created() {
    const listener = e => {
      if (this.show && e.keyCode === 27) {
        this.dismiss();
      }
    };

    document.addEventListener("keydown", listener);
    this.$once("hook:beforeDestroy", () => {
      console.info("removing listener");
      document.removeEventListener("keydown", listener);
    });
  },
  methods: {
    dismiss() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal {
  width: 560px;
  min-height: 200px;
  animation: modal 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply mx-auto mt-40 px-5 py-3 pb-6;
}

@keyframes modal {
  0% {
    transform: translateY(-500px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
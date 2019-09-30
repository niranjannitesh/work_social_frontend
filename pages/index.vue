<template>
  <div class="px-5 py-4">
    <div class="inline-flex bg-white w-full shadow-tabs px-4 rounded rounded-b-none" role="tablist">
      <nuxt-link to="/" class="tablink">
        Dashboard
        <span></span>
      </nuxt-link>
      <nuxt-link to="users" class="tablink">
        Users
        <span></span>
      </nuxt-link>
      <nuxt-link to="subscription" class="tablink">
        Subscription
        <span></span>
      </nuxt-link>
      <nuxt-link to="payments" class="tablink">
        Payments
        <span></span>
      </nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userAccessType: [
        { id: 1, name: "Owner" },
        { id: 2, name: "Operator" },
        { id: 3, name: "Monitoring" },
        { id: 4, name: "Accountant" }
      ],
      addUserModal: false
    };
  },
  methods: {
    generateData() {
      var data = {};
      for (let i = 0; i < 30; i++) {
        data[i] = Math.floor(Math.random() * 10);
      }
      return data;
    }
  }
};
</script>

<style>
.table-jobs th {
  @apply py-4 px-4 font-bold bg-grey-10 uppercase text-sm text-grey-100 border-b border-grey-10;
}

.table-jobs td {
  @apply py-4 px-4 border-b border-grey-10;
}

.table-jobs tr {
  transition: all 0.3s ease-in-out;
}

.table-jobs tr:hover {
  @apply bg-blue-5;
}

.table-jobs td:first-child {
  @apply text-grey-75;
}

.table-users th {
  @apply py-4 font-bold uppercase text-sm text-grey-100 border-b border-grey-10;
}

.table-users td {
  @apply py-4 px-1 border-b border-grey-10;
}

.table-users td:first-child {
  @apply text-grey-75;
}

.tablink {
  @apply px-6 py-4 uppercase tracking-wide cursor-pointer relative text-grey-75;
}

.tablink:hover {
  @apply text-black;
}

.tablink.nuxt-link-exact-active {
  @apply text-black;
}

.tablink.nuxt-link-exact-active span {
  @apply h-1 rounded rounded-b-none absolute bottom-0 left-0 right-0 bg-blue-100;
}

.tablink:hover:not(.nuxt-link-exact-active) span {
  @apply h-1 rounded rounded-b-none absolute bottom-0 left-0 right-0 bg-grey-25;
  animation: up 0.3s ease-in-out;
  transition: all 0.3s;
}

.tablink {
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
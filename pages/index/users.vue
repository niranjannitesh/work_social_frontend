<template>
  <div class="py-4 px-4">
    <div class="flex justify-end">
      <app-button type="outlined" @click="addUserModal = true">
        <svg
          class="mr-2 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M15 16C12.31 16 9.23 17.28 9 18H21C20.8 17.29 17.7 16 15 16Z"
            fill-opacity="0.9"
          />
          <path
            opacity="0.5"
            d="M15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8C13 9.10457 13.8954 10 15 10Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 8C19 10.21 17.21 12 15 12C12.79 12 11 10.21 11 8C11 5.78998 12.79 4 15 4C17.21 4 19 5.78998 19 8ZM17 8C17 6.90002 16.1001 6 15 6C13.8999 6 13 6.90002 13 8C13 9.09998 13.8999 10 15 10C16.1001 10 17 9.09998 17 8Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 18C7 15.34 12.3301 14 15 14C17.6699 14 23 15.34 23 18V20H7V18ZM15 16C12.3101 16 9.21997 17.28 9 18H21C20.8 17.29 17.7 16 15 16Z"
            fill-opacity="0.9"
          />
          <path d="M6 15V12H9V10H6V7H4V10H1V12H4V15H6Z" fill-opacity="0.9" />
        </svg>
        Invite User
      </app-button>
    </div>
    <table class="text-left w-full border-collapse table-users">
      <tr class="head">
        <th></th>
        <th>Name</th>
        <th>Access</th>
        <th></th>
      </tr>
      <tr>
        <td>1</td>
        <td class="flex items-center">
          <div>
            <img class="rounded-full w-12" src="https://randomuser.me/api/portraits/men/77.jpg" alt />
          </div>
          <div class="ml-3">
            <div>Akash Paul</div>
            <div class="text-grey-75">akashpaul@jobcirkit.com</div>
          </div>
        </td>
        <td>Owner</td>
        <td class="w-32">
          <svg
            class="cursor-pointer ml-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 8H18C19.1 8 20 8.89999 20 10V20C20 21.1 19.1 22 18 22H6C4.90002 22 4 21.1 4 20V10C4 8.89999 4.90002 8 6 8H7V6C7 3.23999 9.23999 1 12 1C14.76 1 17 3.23999 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td class="flex items-center">
          <div>
            <img class="rounded-full w-12" src="https://randomuser.me/api/portraits/men/22.jpg" alt />
          </div>
          <div class="ml-3">
            <div>Monore Bond</div>
            <div class="text-grey-75">monorebond@jobcirkit.com</div>
          </div>
        </td>
        <td class="w-64">
          <app-select :options="userAccessType"></app-select>
        </td>
        <td class="w-32">
          <svg
            class="cursor-pointer ml-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5 3L15.5 4H19V6H5V4H8.5L9.5 3H14.5ZM6 19C6 20.1 6.90002 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </td>
      </tr>
    </table>
    <portal to="modals" v-if="addUserModal">
      <app-modal :show="addUserModal" @close="addUserModal = false" title="Invite User">
        <div class="mt-4 px-2">
          <app-label>Email:</app-label>
          <app-text-field type="email" placeholder="abc@example.com" autofocus />
          <div class="flex justify-end mt-6">
            <app-button @click="addUserModal = false" type="secondary" class="mr-2">Cancel</app-button>
            <app-button>Invite</app-button>
          </div>
        </div>
      </app-modal>
    </portal>
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
  }
};
</script>

<style>
</style>
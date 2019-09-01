<template>
  <div class="px-5 py-4">
    <app-tabs>
      <app-tab title="Dashboard">
        <div class="py-4 px-4">
          <div class="flex">
            <div class="w-1/5">
              <div class="flex items-center">
                <span class="font-bold">Subscription:</span>
                <span class="ml-2">Basic</span>
              </div>
              <div>
                <span>Usage reset on June 28, 2019</span>
              </div>
              <div class="mt-4">
                <app-button>Upgrade</app-button>
              </div>
            </div>
            <div class="w-4/5">
              <span>Usage:</span>
              <div class="flex mt-4">
                <div class="w-1/2">
                  <app-card class="p-2">
                    <span class="p-3 block">Job Posted:</span>
                    <line-chart :data="generateData()"></line-chart>
                  </app-card>
                </div>
                <div class="w-1/2 ml-4">
                  <app-card class="p-2">
                    <span class="p-3 block">Bulk CV:</span>
                    <line-chart :data="generateData()"></line-chart>
                  </app-card>
                </div>
              </div>
            </div>
          </div>
          <app-divider />
          <div>
            <span class="text-lg font-medium">Active Jobs</span>
            <div class="mt-4">
              <table
                class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs"
              >
                <tr class="head">
                  <th></th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Posted on</th>
                  <th>Valid till</th>
                  <th>On process</th>
                  <th>Hired</th>
                  <th>Rejected</th>
                  <th>Total</th>
                  <th>Active / Inactive</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Product Manager</td>
                  <td>Banglore</td>
                  <td>18/05/2019</td>
                  <td>18/07/2019</td>
                  <td>50</td>
                  <td>5</td>
                  <td>8</td>
                  <td>63</td>
                  <td class="inline-flex justify-between w-full">
                    Active
                    <span class="ml-2 text-blue-100 cursor-pointer">
                      <svg
                        class="inline-block fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M9 18H14.87L13 16.13L11.9 16.43C9.89 16.99 9.08 17.76 9 18Z"
                          fill-opacity="0.9"
                        />
                        <path
                          opacity="0.5"
                          d="M17 8C17 6.9 16.1 6 15 6C14.01 6 13.19 6.72 13.03 7.67L15.34 9.98C16.27 9.82 17 8.99 17 8Z"
                          fill-opacity="0.9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.6042 11.9658C14.5627 11.9603 14.5214 11.9549 14.48 11.95L11.05 8.52002C11.0451 8.47864 11.0397 8.43726 11.0342 8.39575C11.0172 8.26666 11 8.13623 11 8C11 5.78998 12.79 4 15 4C17.21 4 19 5.78998 19 8C19 10.21 17.21 12 15 12C14.8638 12 14.7333 11.9828 14.6042 11.9658ZM17 8C17 6.90002 16.1 6 15 6C14.01 6 13.19 6.71997 13.02 7.65997L15.33 9.96997C16.27 9.82001 17 8.98999 17 8Z"
                          fill-opacity="0.9"
                        />
                        <path
                          d="M16.69 14.16L22.53 20H23V18C23 15.86 19.44 14.5 16.69 14.16Z"
                          fill-opacity="0.9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 3.12L4 7.12V10H1V12H4V15H6V12H8.88L11.39 14.51C9.19 15.11 7 16.3 7 18V20H16.88L20.88 24L22.29 22.59L1.40997 1.71002L0 3.12ZM13.01 16.13L14.88 18H9C9.08002 17.76 9.88 16.99 11.91 16.43L13.01 16.13ZM6.88 10L6 9.12V10H6.88Z"
                          fill-opacity="0.9"
                        />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Product Manager</td>
                  <td>Banglore</td>
                  <td>18/05/2019</td>
                  <td>18/07/2019</td>
                  <td>50</td>
                  <td>5</td>
                  <td>8</td>
                  <td>63</td>
                  <td class="inline-flex justify-between w-full">
                    In-active
                    <span class="ml-2 text-blue-100 cursor-pointer">
                      <svg
                        class="inline-block fill-current"
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
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </app-tab>
      <app-tab title="Users">
        <div class="py-4 px-4">
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
                  <img
                    class="rounded-full w-12"
                    src="https://randomuser.me/api/portraits/men/77.jpg"
                    alt
                  />
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
                  <img
                    class="rounded-full w-12"
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    alt
                  />
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
        </div>
      </app-tab>
      <app-tab title="Subscription">
        <div class="py-4 px-4"></div>
      </app-tab>
      <app-tab title="Payments">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs"
          >
            <tr class="head">
              <th></th>
              <th>Date</th>
              <th>Valid till</th>
              <th>Status</th>
              <th>Service</th>
              <th>Payment Method</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>1</td>
              <td>01/09/2019</td>
              <td>01/10/2019</td>
              <td>Active</td>
              <td>N/A</td>
              <td>Credit Card</td>
              <td>$100</td>
            </tr>
          </table>
        </div>
      </app-tab>
    </app-tabs>
  </div>
</template>

<script>
import AppTabs from "../components/ui/AppTabs";
import AppTab from "../components/ui/AppTab";
import AppButton from "../components/ui/AppButton";
import AppCard from "../components/ui/AppCard";
import AppDivider from "../components/ui/AppDivider";
import AppSelect from "../components/ui/AppSelect";

export default {
  components: {
    AppTabs,
    AppTab,
    AppButton,
    AppCard,
    AppDivider,
    AppSelect
  },
  data() {
    return {
      userAccessType: [
        { id: 1, name: "Owner" },
        { id: 2, name: "Operator" },
        { id: 3, name: "Monitoring" },
        { id: 4, name: "Accountant" }
      ]
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

.table-jobs tr:hover {
  @apply bg-blue-10;
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
</style>
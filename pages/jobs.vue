<template>
  <div class="px-5 py-4">
    <div class="flex justify-between mb-4">
      <div class="w-2/5 mr-4">
        <app-text-field type="search" placeholder="Search jobs" />
      </div>
      <div class="flex items-center">
        <app-button type="outlined" @click="show = true">
          <svg
            class="mr-2 fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill-opacity="1" />
          </svg>
          Post new jobs
        </app-button>
        <portal to="modals" v-if="show">
          <app-modal :show="show" @close="show = false" />
        </portal>
      </div>
    </div>
    <app-tabs>
      <app-tab data-title="All">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs shadow"
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
              <th>Edit</th>
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
                <span class="text-sm px-2 py-1 bg-green-25 text-green-100 rounded">Active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
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
                <span class="text-sm px-2 py-1 bg-red-25 text-red-100 rounded">In-active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product Manager</td>
              <td>Banglore</td>
              <td>18/05/2019</td>
              <td>18/07/2019</td>
              <td>50</td>
              <td>5</td>
              <td>8</td>
              <td>63</td>
              <td class="inline-flex justify-between w-full">
                <span class="text-sm px-2 py-1 bg-blue-25 text-blue-100 rounded">Draft</span>
                <app-button tiny>Publish</app-button>
              </td>
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </app-tab>
      <app-tab data-title="Active">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs shadow"
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
              <th>Edit</th>
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
                <span class="text-sm px-2 py-1 bg-green-25 text-green-100 rounded">Active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
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
                <span class="text-sm px-2 py-1 bg-green-25 text-green-100 rounded">Active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </app-tab>
      <app-tab data-title="InActive">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs shadow"
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
              <th>Edit</th>
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
                <span class="text-sm px-2 py-1 bg-red-25 text-red-100 rounded">In-active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
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
                <span class="text-sm px-2 py-1 bg-red-25 text-red-100 rounded">In-active</span>
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
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </app-tab>
      <app-tab data-title="Drafts">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs shadow"
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
              <th>Edit</th>
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
                <span class="text-sm px-2 py-1 bg-blue-25 text-blue-100 rounded">Draft</span>
                <app-button tiny>Publish</app-button>
              </td>
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
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
                <span class="text-sm px-2 py-1 bg-blue-25 text-blue-100 rounded">Draft</span>
                <app-button tiny>Publish</app-button>
              </td>
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </app-tab>
      <app-tab data-title="Expired">
        <div class="py-4 px-4">
          <table
            class="text-left w-full border-collapse bg-white rounded overflow-hidden table-jobs shadow"
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
              <th>Edit</th>
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
                <span class="text-sm px-2 py-1 text-white bg-red-100 rounded">Expired</span>
              </td>
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
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
                <span class="text-sm px-2 py-1 text-white bg-red-100 rounded">Expired</span>
              </td>
              <td>
                <svg
                  class="cursor-pointer text-blue-100 fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.06 9.02L5 18.08V19H5.92L14.98 9.94L14.06 9.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.06 6.19L17.81 9.94L6.75 21H3V17.25L14.06 6.19ZM5 18.08V19H5.91998L14.98 9.94L14.06 9.02L5 18.08Z"
                    fill-opacity="0.9"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </app-tab>
    </app-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    show: false
  })
};
</script>

<style>
</style>

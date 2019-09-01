<template>
  <div class="max-w-xs w-full bg-grey-20">
    <div class="p-4">
      <div class="shadow bg-white py-3 px-4 rounded flex items-center justify-between relative">
        <div>
          <span class="block font-medium">Monroe Bond</span>
          <span class="block text-sm">Developer</span>
        </div>
        <img class="rounded-full w-12" src="https://randomuser.me/api/portraits/men/22.jpg" alt />
        <nuxt-link to="/profile" class="absolute top-0 right-0 bottom-0 left-0"></nuxt-link>
      </div>
    </div>
    <app-divider />
    <div class="mt-4">
      <nuxt-link to="/" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 5H9V11H5V5Z" fill-opacity="0.54" />
          <path d="M15 13H19V19H15V13Z" fill-opacity="0.54" />
          <path d="M5 17H9V19H5V17Z" fill-opacity="0.54" />
          <path d="M15 5H19V7H15V5Z" fill-opacity="0.54" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 13H3V3H11V13ZM9 5H5V11H9V5Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 21H13V11H21V21ZM19 13H15V19H19V13Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 9V3H21V9H13ZM15 7H19V5H15V7Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 21H3V15H11V21ZM9 17H5V19H9V17Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Dashboard</span>
      </nuxt-link>
      <nuxt-link to="/feed" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 6H22V17H18V6Z" fill-opacity="0.9" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 19H7V4H17V19ZM15 6H9V17H15V6Z"
            fill-opacity="0.54"
          />
          <path d="M2 6H6V17H2V6Z" fill-opacity="0.9" />
          <path opacity="0.5" d="M9 6H15V17H9V6Z" fill-opacity="0.9" />
        </svg>
        <span>Feed</span>
      </nuxt-link>
      <nuxt-link to="/jobs" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.5" d="M4 17H20V19H4V17Z" fill-opacity="0.9" />
          <path opacity="0.5" d="M17 10H15V8H9V10H7V8H4V14H20V8H17V10Z" fill-opacity="0.9" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 6H20C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89001 21 2 20.11 2 19V8C2 6.89 2.89001 6 4 6H7V4C7 2.89 7.89001 2 9 2H15C16.11 2 17 2.89 17 4V6ZM15 4H9V6H15V4ZM20 19H4V17H20V19ZM4 14H20V8H17V10H15V8H9V10H7V8H4V14Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Jobs</span>
      </nuxt-link>
      <nuxt-link to="/inbox" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12.01 18C10.53 18 9.26 17.19 8.56 16H5V19H19V16H15.45C14.76 17.19 13.48 18 12.01 18Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 3H5C3.89999 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 16V19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19ZM14 14H19V5H5V14H10C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Inbox</span>
      </nuxt-link>
      <nuxt-link to="/notifications" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12 6.5C9.51 6.5 8 8.52 8 11V17H16V11C16 8.52 14.49 6.5 12 6.5Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 11V16L20 18V19H4V18L6 16V11C6 7.91998 7.63989 5.35999 10.5 4.67999V4C10.5 3.16998 11.1699 2.5 12 2.5C12.8301 2.5 13.5 3.16998 13.5 4V4.67999C16.3701 5.35999 18 7.92999 18 11ZM8 17H16V11C16 8.52002 14.49 6.5 12 6.5C9.51001 6.5 8 8.52002 8 11V17Z"
            fill-opacity="0.9"
          />
          <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" fill-opacity="0.9" />
        </svg>
        <span>Notifications</span>
      </nuxt-link>
      <nuxt-link to="/profile" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 12C4 7.59 7.59003 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07001 15.09 5.64001 16.83C4.62 15.49 4 13.82 4 12ZM8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6C10.06 6 8.5 7.56 8.5 9.5Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.47998 2 2 6.48 2 12C2 17.52 6.47998 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07001 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.42999 19.36 7.07001 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59003 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64001 16.83C7.07001 15.09 10.54 14.5 12 14.5Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Profile</span>
      </nuxt-link>
      <app-divider />
      <nuxt-link to="/help" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4C7.58997 4 4 7.59 4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM11 18V16H13V18H11ZM12.7704 11.8217C11.9421 12.4566 11 13.1787 11 15H13C13 13.9046 13.7111 13.2833 14.4408 12.6455C15.21 11.9733 16 11.2829 16 10C16 7.79001 14.21 6 12 6C9.79004 6 8 7.79001 8 10H10C10 8.89999 10.9 8 12 8C13.1 8 14 8.89999 14 10C14 10.8792 13.4203 11.3236 12.7704 11.8217Z"
            fill-opacity="0.9"
          />
          <path d="M11 16H13V18H11V16Z" fill-opacity="0.9" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12C2 6.48001 6.47998 2 12 2C17.52 2 22 6.48001 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
            fill-opacity="0.9"
          />
          <path
            d="M12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Help</span>
      </nuxt-link>
      <nuxt-link to="/settings" class="sidebar_link">
        <svg
          class="mr-4 fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.58 7.39001L19.28 8.59998L18.18 9.44L17.29 10.14L17.43 11.27C17.46 11.57 17.48 11.79 17.48 12C17.48 12.21 17.47 12.42 17.43 12.73L17.29 13.86L18.18 14.56L19.2599 15.4L18.56 16.61L17.29 16.1L16.25 15.68L15.35 16.36C14.92 16.68 14.5099 16.92 14.1 17.09L13.04 17.52L12.8799 18.65L12.6899 20H11.3L11.11 18.64L10.95 17.51L9.88995 17.08C9.45996 16.91 9.04999 16.67 8.65997 16.37L7.75 15.67L6.68994 16.1L5.41998 16.61L4.71997 15.4L5.79999 14.56L6.68994 13.86L6.54999 12.73C6.51996 12.43 6.5 12.2 6.5 12C6.5 11.8 6.51996 11.57 6.54999 11.27L6.68994 10.14L5.79999 9.44L4.71997 8.59998L5.41998 7.39001L6.68994 7.90997L7.73999 8.33002L8.63995 7.65002C9.06995 7.33002 9.47998 7.09003 9.88995 6.91998L10.95 6.47998L11.11 5.34998L11.3 4H12.7L12.89 5.35999L13.05 6.48999L14.11 6.91998C14.54 7.09003 14.95 7.33002 15.34 7.63L16.25 8.33002L17.31 7.90002L18.58 7.39001ZM8 12C8 14.21 9.78998 16 12 16C14.21 16 16 14.21 16 12C16 9.78998 14.21 8 12 8C9.78998 8 8 9.78998 8 12Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 12C19.5 12.34 19.47 12.66 19.4301 12.98L21.54 14.63C21.73 14.78 21.78 15.05 21.66 15.27L19.66 18.73C19.57 18.89 19.4 18.98 19.23 18.98C19.17 18.98 19.11 18.97 19.05 18.95L16.56 17.95C16.04 18.34 15.48 18.68 14.87 18.93L14.4901 21.58C14.46 21.82 14.25 22 14 22H10C9.75 22 9.54004 21.82 9.51001 21.58L9.13 18.93C8.52002 18.68 7.96002 18.35 7.44 17.95L4.95001 18.95C4.90002 18.97 4.84003 18.98 4.78003 18.98C4.60004 18.98 4.42999 18.89 4.34003 18.73L2.34003 15.27C2.22003 15.05 2.27002 14.78 2.46002 14.63L4.57001 12.98C4.53003 12.66 4.5 12.33 4.5 12C4.5 11.67 4.53003 11.34 4.57001 11.02L2.46002 9.37C2.27002 9.21997 2.21002 8.95001 2.34003 8.72998L4.34003 5.27002C4.42999 5.10999 4.60004 5.02002 4.77002 5.02002C4.83002 5.02002 4.89001 5.03003 4.95001 5.04999L7.44 6.04999C7.96002 5.65997 8.52002 5.32001 9.13 5.07001L9.51001 2.41998C9.54004 2.17999 9.75 2 10 2H14C14.25 2 14.46 2.17999 14.4901 2.41998L14.87 5.07001C15.48 5.32001 16.04 5.65002 16.56 6.04999L19.05 5.04999C19.1 5.03003 19.16 5.02002 19.22 5.02002C19.4 5.02002 19.57 5.10999 19.66 5.27002L21.66 8.72998C21.78 8.95001 21.73 9.21997 21.54 9.37L19.4301 11.02C19.47 11.34 19.5 11.66 19.5 12ZM17.5001 12C17.5001 11.79 17.4901 11.58 17.45 11.27L17.3101 10.14L18.2 9.44L19.27 8.59003L18.57 7.38L17.3 7.89001L16.2401 8.32001L15.33 7.62C14.9301 7.32001 14.53 7.09003 14.1 6.90997L13.04 6.47998L12.88 5.34998L12.69 4H11.3L11.1 5.34998L10.94 6.47998L9.88 6.90997C9.47003 7.08002 9.06006 7.32001 8.63 7.64001L7.73004 8.32001L6.69 7.90002L5.42004 7.39001L4.72003 8.59998L5.80005 9.44L6.69 10.14L6.55005 11.27C6.52002 11.57 6.50006 11.8 6.50006 12C6.50006 12.2 6.52002 12.43 6.55005 12.74L6.69 13.87L5.80005 14.57L4.72003 15.41L5.42004 16.62L6.69 16.11L7.75006 15.68L8.66003 16.38C9.06006 16.68 9.46002 16.91 9.89001 17.09L10.95 17.52L11.11 18.65L11.3 20H12.7L12.9 18.65L13.0601 17.52L14.1201 17.09C14.53 16.92 14.94 16.68 15.3701 16.36L16.27 15.68L17.3101 16.1L18.58 16.61L19.28 15.4L18.2 14.56L17.3101 13.86L17.45 12.73C17.48 12.43 17.5001 12.21 17.5001 12Z"
            fill-opacity="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 12C8 9.78998 9.78998 8 12 8C14.21 8 16 9.78998 16 12C16 14.21 14.21 16 12 16C9.78998 16 8 14.21 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
            fill-opacity="0.9"
          />
        </svg>
        <span>Settings</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppDivider from "./AppDivider";

export default {
  components: {
    AppDivider
  }
};
</script>

<style>
.sidebar_link {
  @apply flex my-2 items-center pl-8 py-3 font-medium tracking-wide opacity-75;
  transition: all 0.3s;
}

.sidebar_link.nuxt-link-exact-active,
.sidebar_link:hover {
  @apply border-blue-100 text-blue-100 opacity-100;
}
</style>

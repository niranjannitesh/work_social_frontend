<template>
  <div class="px-5 py-4">
    <div class="max-w-2xl mx-auto">
      <app-card>
        <div class="px-6 pt-4 flex items-center">
          <img class="w-16 rounded-full" src="https://randomuser.me/api/portraits/men/22.jpg" alt />
          <div class="ml-3 flex-1">
            <span class="block font-medium">Monroe Bond</span>
            <span class="block text-sm">Post an update</span>
          </div>
        </div>
        <app-divider />
        <div class="px-6">
          <app-textarea />
        </div>
        <div class="px-6 py-4 text-right">
          <app-button>Post</app-button>
        </div>
      </app-card>
      <app-card class="mt-6">
        <div class="px-6 pt-4 flex items-center">
          <img
            class="w-16 rounded-full"
            src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
            alt
          />
          <div class="ml-3 flex-1">
            <span class="block font-medium">Guillermo Raffaele</span>
            <span class="block text-sm">05 Aug 2019</span>
          </div>
          <div>
            <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
              <svg
                class="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 10C4.90002 10 4 10.9 4 12C4 13.1 4.90002 14 6 14C7.09998 14 8 13.1 8 12C8 10.9 7.09998 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z"
                  fill-opacity="0.9"
                />
              </svg>
            </button>
          </div>
        </div>
        <app-divider />
        <div class="px-6">
          <vue-markdown :source="post" />
        </div>
        <app-divider />
        <div class="px-6 pb-4 flex justify-between">
          <div class="flex">
            <button class="feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M21 12V9.99997H12L13.34 4.65997L9 8.99997V19H18L21 12Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 21H9C7.90002 21 7 20.1 7 19V9C7 8.45001 7.21997 7.95001 7.57996 7.59003L14.17 1L15.23 2.04999C15.5 2.32001 15.67 2.70001 15.67 3.10999L15.64 3.42999L14.6899 8H21C22.1 8 23 8.90002 23 10V12C23 12.26 22.95 12.5 22.86 12.73L19.84 19.78C19.54 20.5 18.83 21 18 21ZM13.34 4.65997L9 9V19H18L21 12V10H12L13.34 4.65997Z"
                    fill-opacity="0.9"
                  />
                  <path d="M1 9H5V21H1V9Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Like</span>
              </div>
              <span class="number">5</span>
            </button>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M3 12V14H12L10.66 19.34L15 15V5H6L3 12Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 3H15C16.1 3 17 3.90002 17 5V15C17 15.55 16.78 16.05 16.42 16.41L9.82996 23L8.77002 21.95C8.5 21.68 8.32996 21.3 8.32996 20.89L8.35999 20.57L9.31006 16H3C1.90002 16 1 15.1 1 14V12C1 11.74 1.05005 11.5 1.14001 11.27L4.16003 4.21997C4.45996 3.5 5.17004 3 6 3ZM10.66 19.34L15 15V5H6L3 12V14H12L10.66 19.34Z"
                    fill-opacity="0.9"
                  />
                  <path d="M19 3H23V15H19V3Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Dislike</span>
              </div>
            </button>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 2H20C21.1 2 22 2.9 22 4V22L18 18H4C2.90002 18 2 17.1 2 16V4C2 2.9 2.90002 2 4 2ZM18.83 16L20 17.17V4H4V16H18.83Z"
                    fill-opacity="0.9"
                  />
                  <path opacity="0.5" d="M4 4V16H18.83L20 17.17V4H4Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Comment</span>
              </div>
            </button>
          </div>
          <div>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6Z"
                    fill-opacity="0.9"
                  />
                  <path
                    opacity="0.5"
                    d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
                    fill-opacity="0.9"
                  />
                  <path
                    opacity="0.5"
                    d="M18 20.02C18.5523 20.02 19 19.5723 19 19.02C19 18.4677 18.5523 18.02 18 18.02C17.4477 18.02 17 18.4677 17 19.02C17 19.5723 17.4477 20.02 18 20.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.04 16.85C16.5601 16.38 17.24 16.08 18 16.08C19.6101 16.08 20.9199 17.39 20.9199 19C20.9199 20.61 19.6101 21.92 18 21.92C16.3899 21.92 15.0801 20.61 15.0801 19C15.0801 18.78 15.1101 18.56 15.1599 18.35L8.04004 14.19C7.5 14.69 6.79004 15 6 15C4.34009 15 3 13.66 3 12C3 10.34 4.34009 9 6 9C6.79004 9 7.5 9.31 8.04004 9.81L15.0901 5.70001C15.04 5.46997 15 5.23999 15 5C15 3.34003 16.3401 2 18 2C19.6599 2 21 3.34003 21 5C21 6.65997 19.6599 8 18 8C17.21 8 16.5 7.69 15.96 7.19L8.90991 11.3C8.95996 11.53 9 11.76 9 12C9 12.24 8.95996 12.47 8.90991 12.7L16.04 16.85ZM19 5C19 4.45001 18.55 4 18 4C17.45 4 17 4.45001 17 5C17 5.54999 17.45 6 18 6C18.55 6 19 5.54999 19 5ZM6 13C5.44995 13 5 12.55 5 12C5 11.45 5.44995 11 6 11C6.55005 11 7 11.45 7 12C7 12.55 6.55005 13 6 13ZM17 19.02C17 19.57 17.45 20.02 18 20.02C18.55 20.02 19 19.57 19 19.02C19 18.47 18.55 18.02 18 18.02C17.45 18.02 17 18.47 17 19.02Z"
                    fill-opacity="0.9"
                  />
                </svg>
                <span class="ml-2 hidden md:inline">Share</span>
              </div>
            </button>
          </div>
        </div>
      </app-card>
      <app-card class="mt-6">
        <div class="px-6 pt-4 flex items-center">
          <img
            class="w-16 rounded-full"
            src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
            alt
          />
          <div class="ml-3 flex-1">
            <span class="block font-medium">Guillermo Raffaele</span>
            <span class="block text-sm">05 Aug 2019</span>
          </div>
          <div>
            <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
              <svg
                class="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 10C4.90002 10 4 10.9 4 12C4 13.1 4.90002 14 6 14C7.09998 14 8 13.1 8 12C8 10.9 7.09998 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z"
                  fill-opacity="0.9"
                />
              </svg>
            </button>
          </div>
        </div>
        <app-divider />
        <div class="px-6">
          <vue-markdown :source="post" />
        </div>
        <app-divider />
        <div class="px-6 pb-4 flex justify-between">
          <div class="flex">
            <button class="feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M21 12V9.99997H12L13.34 4.65997L9 8.99997V19H18L21 12Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 21H9C7.90002 21 7 20.1 7 19V9C7 8.45001 7.21997 7.95001 7.57996 7.59003L14.17 1L15.23 2.04999C15.5 2.32001 15.67 2.70001 15.67 3.10999L15.64 3.42999L14.6899 8H21C22.1 8 23 8.90002 23 10V12C23 12.26 22.95 12.5 22.86 12.73L19.84 19.78C19.54 20.5 18.83 21 18 21ZM13.34 4.65997L9 9V19H18L21 12V10H12L13.34 4.65997Z"
                    fill-opacity="0.9"
                  />
                  <path d="M1 9H5V21H1V9Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Like</span>
              </div>
              <span class="number">5</span>
            </button>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M3 12V14H12L10.66 19.34L15 15V5H6L3 12Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 3H15C16.1 3 17 3.90002 17 5V15C17 15.55 16.78 16.05 16.42 16.41L9.82996 23L8.77002 21.95C8.5 21.68 8.32996 21.3 8.32996 20.89L8.35999 20.57L9.31006 16H3C1.90002 16 1 15.1 1 14V12C1 11.74 1.05005 11.5 1.14001 11.27L4.16003 4.21997C4.45996 3.5 5.17004 3 6 3ZM10.66 19.34L15 15V5H6L3 12V14H12L10.66 19.34Z"
                    fill-opacity="0.9"
                  />
                  <path d="M19 3H23V15H19V3Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Dislike</span>
              </div>
            </button>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 2H20C21.1 2 22 2.9 22 4V22L18 18H4C2.90002 18 2 17.1 2 16V4C2 2.9 2.90002 2 4 2ZM18.83 16L20 17.17V4H4V16H18.83Z"
                    fill-opacity="0.9"
                  />
                  <path opacity="0.5" d="M4 4V16H18.83L20 17.17V4H4Z" fill-opacity="0.9" />
                </svg>
                <span class="ml-2 hidden md:inline">Comment</span>
              </div>
            </button>
          </div>
          <div>
            <button class="ml-3 feed_button">
              <div>
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6Z"
                    fill-opacity="0.9"
                  />
                  <path
                    opacity="0.5"
                    d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
                    fill-opacity="0.9"
                  />
                  <path
                    opacity="0.5"
                    d="M18 20.02C18.5523 20.02 19 19.5723 19 19.02C19 18.4677 18.5523 18.02 18 18.02C17.4477 18.02 17 18.4677 17 19.02C17 19.5723 17.4477 20.02 18 20.02Z"
                    fill-opacity="0.9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.04 16.85C16.5601 16.38 17.24 16.08 18 16.08C19.6101 16.08 20.9199 17.39 20.9199 19C20.9199 20.61 19.6101 21.92 18 21.92C16.3899 21.92 15.0801 20.61 15.0801 19C15.0801 18.78 15.1101 18.56 15.1599 18.35L8.04004 14.19C7.5 14.69 6.79004 15 6 15C4.34009 15 3 13.66 3 12C3 10.34 4.34009 9 6 9C6.79004 9 7.5 9.31 8.04004 9.81L15.0901 5.70001C15.04 5.46997 15 5.23999 15 5C15 3.34003 16.3401 2 18 2C19.6599 2 21 3.34003 21 5C21 6.65997 19.6599 8 18 8C17.21 8 16.5 7.69 15.96 7.19L8.90991 11.3C8.95996 11.53 9 11.76 9 12C9 12.24 8.95996 12.47 8.90991 12.7L16.04 16.85ZM19 5C19 4.45001 18.55 4 18 4C17.45 4 17 4.45001 17 5C17 5.54999 17.45 6 18 6C18.55 6 19 5.54999 19 5ZM6 13C5.44995 13 5 12.55 5 12C5 11.45 5.44995 11 6 11C6.55005 11 7 11.45 7 12C7 12.55 6.55005 13 6 13ZM17 19.02C17 19.57 17.45 20.02 18 20.02C18.55 20.02 19 19.57 19 19.02C19 18.47 18.55 18.02 18 18.02C17.45 18.02 17 18.47 17 19.02Z"
                    fill-opacity="0.9"
                  />
                </svg>
                <span class="ml-2 hidden md:inline">Share</span>
              </div>
            </button>
          </div>
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
import AppCard from "../components/ui/AppCard";
import AppDivider from "../components/ui/AppDivider";
import AppTextarea from "../components/ui/AppTextarea";
import AppButton from "../components/ui/AppButton";
import AppTag from "../components/ui/AppTag";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    AppCard,
    AppDivider,
    AppTextarea,
    AppButton,
    AppTag,
    VueMarkdown
  },
  data() {
    return {
      post: `Web Dev:
*renders an object*
"Hey buddy, an object's not a valid React component. Did you goof up an export? Here's an article, and it you're still stuck, here's Dan Abramov's personal cell"
C++:
*passes a pointer by reference*
*program crashes*`
    };
  }
};
</script>

<style>
.feed_button {
  @apply py-2 px-3 rounded flex items-center;
  transition: all 0.3s;
}

.feed_button div {
  @apply flex items-center;
}

.feed_button:focus {
  @apply outline-none;
}

.feed_button:hover {
  @apply bg-grey-25;
}

.feed_button .number {
  @apply ml-3 bg-blue-10 text-blue-100 rounded-full w-6 h-6 text-sm font-medium flex items-center justify-center;
}

.ad_tag {
  @apply absolute bg-blue-100 text-white text-center w-20 uppercase font-medium text-sm;
  transform: rotate(45deg);
  right: -20px;
  top: 8px;
}
</style>

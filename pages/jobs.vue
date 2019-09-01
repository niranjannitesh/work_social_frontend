<template>
  <div class="px-5 py-4">
    <div>
      <div class="block md:flex flex-wrap -mx-4">
        <div class="px-4 mb-4 md:w-1/2 xl:w-1/4">
          <app-card class="relative overflow-hidden">
            <span class="ad_tag">Ad</span>
            <div class="p-6">
              <div class="flex justify-between">
                <div class="flex items-center font-medium text-lg">
                  <img src="~/assets/logo.svg" alt />
                  <span class="mx-3">/</span>
                  <span>Backend Developer</span>
                </div>
                <div>
                  <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M7 17.97L12 15.82L17 17.97V5H7V17.97Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21V5C5 3.9 5.90002 3 7 3ZM12 15.83L17 17.97V5H7V17.97L12 15.83Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <span class="text-sm">Posted on: 05 Aug 2018</span>
              </div>
              <app-divider />
              <div class="flex flex-wrap">
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 9C7 6.23999 9.23999 4 12 4C14.76 4 17 6.23999 17 9C17 11.88 14.11 16.19 12 18.88C9.92001 16.21 7 11.85 7 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.23999 4 7 6.23999 7 9C7 11.85 9.92001 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.23999 14.76 4 12 4Z"
                      fill-opacity="0.54"
                    />
                    <path
                      d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Kolkata</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM11 13L16.25 16.15L17 14.92L12.5 12.25V7H11V13Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                      fill-opacity="0.54"
                    />
                    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill-opacity="0.54" />
                  </svg>
                  <span>Full Time</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM18 15H16V17H18V15Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19Z"
                      fill-opacity="0.54"
                    />
                    <path d="M16 11H18V13H16V11Z" fill-opacity="0.54" />
                    <path d="M16 15H18V17H16V15Z" fill-opacity="0.54" />
                  </svg>
                  <span>JobCirkit</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M7 12.27V15.99L12 18.72L17 15.99V12.27L12 15L7 12.27Z"
                      fill-opacity="0.54"
                    />
                    <path
                      opacity="0.5"
                      d="M5.18005 9.00003L12.0001 12.72L18.8201 9.00003L12.0001 5.28003L5.18005 9.00003Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99ZM5.18005 9L12 12.72L18.8201 9L12 5.28003L5.18005 9Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Bachelor</span>
                </div>
              </div>
            </div>
            <button class="bg-blue-10 text-blue-100 w-full py-4 focus:outline-none">Apply</button>
          </app-card>
        </div>
        <div class="px-4 mb-4 md:w-1/2 xl:w-1/4">
          <app-card>
            <div class="p-6">
              <div class="flex justify-between">
                <div class="flex items-center font-medium text-lg">
                  <img src="~/assets/logo.svg" alt />
                  <span class="mx-3">/</span>
                  <span>Backend Developer</span>
                </div>
                <div>
                  <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M7 17.97L12 15.82L17 17.97V5H7V17.97Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21V5C5 3.9 5.90002 3 7 3ZM12 15.83L17 17.97V5H7V17.97L12 15.83Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <span class="text-sm">Posted on: 05 Aug 2018</span>
              </div>
              <app-divider />
              <div class="flex flex-wrap">
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 9C7 6.23999 9.23999 4 12 4C14.76 4 17 6.23999 17 9C17 11.88 14.11 16.19 12 18.88C9.92001 16.21 7 11.85 7 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.23999 4 7 6.23999 7 9C7 11.85 9.92001 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.23999 14.76 4 12 4Z"
                      fill-opacity="0.54"
                    />
                    <path
                      d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Kolkata</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM11 13L16.25 16.15L17 14.92L12.5 12.25V7H11V13Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                      fill-opacity="0.54"
                    />
                    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill-opacity="0.54" />
                  </svg>
                  <span>Full Time</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM18 15H16V17H18V15Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19Z"
                      fill-opacity="0.54"
                    />
                    <path d="M16 11H18V13H16V11Z" fill-opacity="0.54" />
                    <path d="M16 15H18V17H16V15Z" fill-opacity="0.54" />
                  </svg>
                  <span>JobCirkit</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M7 12.27V15.99L12 18.72L17 15.99V12.27L12 15L7 12.27Z"
                      fill-opacity="0.54"
                    />
                    <path
                      opacity="0.5"
                      d="M5.18005 9.00003L12.0001 12.72L18.8201 9.00003L12.0001 5.28003L5.18005 9.00003Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99ZM5.18005 9L12 12.72L18.8201 9L12 5.28003L5.18005 9Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Bachelor</span>
                </div>
              </div>
            </div>
            <button class="bg-blue-10 text-blue-100 w-full py-4 focus:outline-none">Apply</button>
          </app-card>
        </div>
        <div class="px-4 mb-4 md:w-1/2 xl:w-1/4">
          <app-card>
            <div class="p-6">
              <div class="flex justify-between">
                <div class="flex items-center font-medium text-lg">
                  <img src="~/assets/logo.svg" alt />
                  <span class="mx-3">/</span>
                  <span>Backend Developer</span>
                </div>
                <div>
                  <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M7 17.97L12 15.82L17 17.97V5H7V17.97Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21V5C5 3.9 5.90002 3 7 3ZM12 15.83L17 17.97V5H7V17.97L12 15.83Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <span class="text-sm">Posted on: 05 Aug 2018</span>
              </div>
              <app-divider />
              <div class="flex flex-wrap">
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 9C7 6.23999 9.23999 4 12 4C14.76 4 17 6.23999 17 9C17 11.88 14.11 16.19 12 18.88C9.92001 16.21 7 11.85 7 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.23999 4 7 6.23999 7 9C7 11.85 9.92001 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.23999 14.76 4 12 4Z"
                      fill-opacity="0.54"
                    />
                    <path
                      d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Kolkata</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM11 13L16.25 16.15L17 14.92L12.5 12.25V7H11V13Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                      fill-opacity="0.54"
                    />
                    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill-opacity="0.54" />
                  </svg>
                  <span>Full Time</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM18 15H16V17H18V15Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19Z"
                      fill-opacity="0.54"
                    />
                    <path d="M16 11H18V13H16V11Z" fill-opacity="0.54" />
                    <path d="M16 15H18V17H16V15Z" fill-opacity="0.54" />
                  </svg>
                  <span>JobCirkit</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M7 12.27V15.99L12 18.72L17 15.99V12.27L12 15L7 12.27Z"
                      fill-opacity="0.54"
                    />
                    <path
                      opacity="0.5"
                      d="M5.18005 9.00003L12.0001 12.72L18.8201 9.00003L12.0001 5.28003L5.18005 9.00003Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99ZM5.18005 9L12 12.72L18.8201 9L12 5.28003L5.18005 9Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Bachelor</span>
                </div>
              </div>
            </div>
            <button class="bg-blue-10 text-blue-100 w-full py-4 focus:outline-none">Apply</button>
          </app-card>
        </div>
        <div class="px-4 mb-4 md:w-1/2 xl:w-1/4">
          <app-card>
            <div class="p-6">
              <div class="flex justify-between">
                <div class="flex items-center font-medium text-lg">
                  <img src="~/assets/logo.svg" alt />
                  <span class="mx-3">/</span>
                  <span>Backend Developer</span>
                </div>
                <div>
                  <button class="focus:outline-none hover:bg-grey-25 p-2 rounded-full transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M7 17.97L12 15.82L17 17.97V5H7V17.97Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21V5C5 3.9 5.90002 3 7 3ZM12 15.83L17 17.97V5H7V17.97L12 15.83Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <span class="text-sm">Posted on: 05 Aug 2018</span>
              </div>
              <app-divider />
              <div class="flex flex-wrap">
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 9C7 6.23999 9.23999 4 12 4C14.76 4 17 6.23999 17 9C17 11.88 14.11 16.19 12 18.88C9.92001 16.21 7 11.85 7 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.23999 4 7 6.23999 7 9C7 11.85 9.92001 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.23999 14.76 4 12 4Z"
                      fill-opacity="0.54"
                    />
                    <path
                      d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Kolkata</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM11 13L16.25 16.15L17 14.92L12.5 12.25V7H11V13Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                      fill-opacity="0.54"
                    />
                    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill-opacity="0.54" />
                  </svg>
                  <span>Full Time</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM18 15H16V17H18V15Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19Z"
                      fill-opacity="0.54"
                    />
                    <path d="M16 11H18V13H16V11Z" fill-opacity="0.54" />
                    <path d="M16 15H18V17H16V15Z" fill-opacity="0.54" />
                  </svg>
                  <span>JobCirkit</span>
                </div>
                <div class="flex w-1/2 my-3">
                  <svg
                    class="fill-current mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M7 12.27V15.99L12 18.72L17 15.99V12.27L12 15L7 12.27Z"
                      fill-opacity="0.54"
                    />
                    <path
                      opacity="0.5"
                      d="M5.18005 9.00003L12.0001 12.72L18.8201 9.00003L12.0001 5.28003L5.18005 9.00003Z"
                      fill-opacity="0.54"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99ZM5.18005 9L12 12.72L18.8201 9L12 5.28003L5.18005 9Z"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span>Bachelor</span>
                </div>
              </div>
            </div>
            <button class="bg-blue-10 text-blue-100 w-full py-4 focus:outline-none">Apply</button>
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from "../components/ui/AppCard";

export default {
  components: {
    AppCard
  }
};
</script>

<style>
.ad_tag {
  @apply absolute bg-blue-100 text-white text-center w-20 uppercase font-medium text-sm;
  transform: rotate(45deg);
  right: -20px;
  top: 8px;
}
</style>

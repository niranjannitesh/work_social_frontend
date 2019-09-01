<template>
  <div class="px-5 py-4">
    <div class="mt-4 max-w-lg mx-auto">
      <div class="flex items-start mb-4">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2H20C21.1 2 22 2.90002 22 4V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.90002 2.89999 2 4 2ZM6 16H20V4H4V18L6 16Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </div>
        <div class="ml-4 w-full">
          <div>
            <span class="text-blue-100">Guillermo Raffaele</span> sent you an message
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-grey-75">31 Aug 2019 at 5:39PM</span>
            <a href="#" class="text-blue-100 inline-flex">
              <span>reply</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>
            </a>
          </div>
          <div class="bg-grey-25 rounded px-4 py-3 mt-2">Hey!, How are you?</div>
        </div>
      </div>
      <app-divider />
    </div>
  </div>
</template>

<script>
import AppDivider from "../components/ui/AppDivider";
export default {
  components: {
    AppDivider
  }
};
</script>

<style>
</style>
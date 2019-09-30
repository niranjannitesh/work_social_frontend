<template>
  <div class="px-5 py-4">
    <div class="max-w-4xl mx-auto">
      <app-card>
        <div class="pl-6 pt-4">
          <span class="block font-medium text-lg">Personal Info</span>
          <span>Basic info, like your name, photo and details.</span>
        </div>
        <app-divider />
        <div class="px-6 pb-8">
          <div class="flex items-center">
            <div class="rounded-full overflow-hidden w-24 h-24 shadow border-4 border-white">
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt />
            </div>
            <div class="ml-4">
              <div class="text-2xl font-medium">
                Monroe Bond,
                <span class="text-base font-normal">Developer</span>
              </div>
              <span class="text-blue-100 cursor-pointer">Change Avatar</span>
            </div>
          </div>
          <app-divider />
          <div>
            <div>
              <div>
                <app-label>Email</app-label>
                <app-text-field type="email" value="user@example.com" />
              </div>
              <div class="mt-4">
                <app-label>Phone</app-label>
                <app-text-field type="tel" value="9876543210" />
              </div>
              <div class="mt-4">
                <app-label>Gender</app-label>
                <app-select :options="genders" />
              </div>
              <div class="mt-4">
                <app-label>Date of Birth</app-label>
                <app-text-field type="date" value="2018-07-22" />
              </div>
              <div class="mt-4">
                <app-label>Location</app-label>
                <app-text-field type="text" placeholder="Location" v-model="location">
                  <svg
                    class="fill-current mr-3"
                    :class="{ 'text-grey-75': location.length == 0 }"
                    slot="icon"
                    width="16"
                    height="18"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.259766C2.65714 0.259766 0 2.91691 0 6.25977C0 7.88834 0.6 9.43119 1.8 10.5455C1.88571 10.6312 5.31429 13.7169 5.4 13.8026C5.74286 14.0598 6.25714 14.0598 6.51429 13.8026C6.6 13.7169 10.1143 10.6312 10.1143 10.5455C11.3143 9.43119 11.9143 7.88834 11.9143 6.25977C12 2.91691 9.34286 0.259766 6 0.259766ZM6 7.97405C5.05714 7.97405 4.28571 7.20262 4.28571 6.25977C4.28571 5.31691 5.05714 4.54548 6 4.54548C6.94286 4.54548 7.71429 5.31691 7.71429 6.25977C7.71429 7.20262 6.94286 7.97405 6 7.97405Z"
                    />
                  </svg>
                </app-text-field>
              </div>
            </div>
          </div>
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      jobType: [
        { id: 1, name: "Full Time" },
        { id: 2, name: "Part Time" },
        { id: 3, name: "Contractor" },
        { id: 4, name: "Consultant" },
        { id: 5, name: "Internship" }
      ],
      jobPriority: [
        { id: 1, name: "Actively Looking" },
        { id: 2, name: "Open to offers" },
        { id: 3, name: "Closed to offers" }
      ],
      genders: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
        { id: 3, name: "Other" }
      ],
      location: "Delhi, India",
      jobLocations: [],
      skills: []
    };
  },
  methods: {
    addJobLocationTag(item) {
      this.jobLocations.push({
        id: this.jobLocations.length + 1,
        name: item
      });
    },
    removeJobLocationTag(index) {
      this.jobLocations.splice(index, 1);
    },
    addSkillTag(item) {
      this.skills.push({
        id: this.skills.length + 1,
        name: item
      });
    },
    removeSkillTag(index) {
      this.skills.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

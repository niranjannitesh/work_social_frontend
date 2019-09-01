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
            <app-button type="outlined">
              <svg
                class="mr-2 fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.68 11.93L19.21 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18H6C3.78998 18 2 16.21 2 14C2 11.95 3.53003 10.24 5.54999 10.02L6.62 9.91L7.12 8.95999C8.08002 7.14001 9.94 6 12 6C14.62 6 16.88 7.85999 17.38 10.43L17.68 11.93ZM13.45 16V13H16L12 9L8 13H10.54V16H13.45Z"
                  fill-opacity="0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34003 8.35999 5.34998 8.04001C6.59998 5.64001 9.10999 4 12 4ZM6 18H19C20.65 18 22 16.65 22 15C22 13.45 20.78 12.14 19.22 12.04L17.69 11.93L17.39 10.43C16.88 7.85999 14.62 6 12 6C9.94 6 8.08002 7.14001 7.13 8.97L6.63 9.92001L5.56 10.03C3.53003 10.24 2 11.95 2 14C2 16.21 3.78998 18 6 18Z"
                  fill-opacity="0.9"
                />
                <path d="M8 13H10.55V16H13.45V13H16L12 9L8 13Z" fill-opacity="0.9" />
              </svg>
              Upload Resume
            </app-button>
            <app-divider />
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
      <app-card class="mt-8">
        <div class="pl-6 pt-4">
          <span class="block font-medium text-lg">Job Preference</span>
          <span>Type of jobs you are looking for.</span>
        </div>
        <app-divider />
        <div class="px-6 pb-8">
          <div>
            <app-label>Type</app-label>
            <app-select :options="jobType" />
          </div>
          <div class="mt-4">
            <app-label>Priority</app-label>
            <app-select :options="jobPriority" />
          </div>
          <div class="mt-4">
            <app-label>Places you want to work</app-label>
            <app-tag-input
              @onAdd="addJobLocationTag"
              @onRemove="removeJobLocationTag"
              :tags="jobLocations"
              placeholder="Add a Place"
            />
          </div>
        </div>
      </app-card>
      <app-card class="mt-8">
        <div class="pl-6 pt-4">
          <span class="block font-medium text-lg">Your skills</span>
          <span>Specify your best skills</span>
        </div>
        <app-divider />
        <div class="px-6 pb-4">
          <app-tag-input
            @onAdd="addSkillTag"
            @onRemove="removeSkillTag"
            :tags="skills"
            placeholder="Add a skill"
          />
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
import AppCard from "../components/ui/AppCard";
import AppDivider from "../components/ui/AppDivider";
import AppLabel from "../components/ui/AppLabel";
import AppTextField from "../components/ui/AppTextField";
import AppButton from "../components/ui/AppButton";
import AppSelect from "../components/ui/AppSelect";
import AppTagInput from "../components/ui/AppTagInput";

export default {
  components: {
    AppCard,
    AppDivider,
    AppLabel,
    AppTextField,
    AppButton,
    AppSelect,
    AppTagInput
  },
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

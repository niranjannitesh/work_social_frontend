<template>
  <div class="flex flex-wrap">
    <div class="px-8 py-8 w-full lg:w-4/12">
      <div class="my-6">
        <app-label>Email</app-label>
        <app-text-field type="email" placeholder="abc@example.com" v-model="email"></app-text-field>
      </div>
      <div class="my-6">
        <app-label>Password</app-label>
        <app-text-field type="password" placeholder="Your Secret Password" v-model="password"></app-text-field>
      </div>
      <div class="my-6">
        <app-label>Location</app-label>
        <app-text-field type="search" placeholder="Enter a city or landmark..." v-model="place"></app-text-field>
      </div>
      <div class="my-6">
        <app-text-field type="text" placeholder="With clear button" clear-button v-model="place"></app-text-field>
      </div>
      <div class="my-6">
        <app-text-field type="text" placeholder="Place" v-model="place">
          <svg
            class="fill-current mr-3"
            :class="{ 'text-grey-75': place.length == 0 }"
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
      <app-divider />
      <div class="my-6">
        <app-textarea placeholder="Text area demo"></app-textarea>
      </div>
    </div>
    <div class="px-8 py-8 w-full lg:w-4/12">
      <div class="my-4">
        <app-button>
          <svg
            class="mr-2 fill-current"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.85 0 7 0ZM10.5 7.875H7.875V10.5H6.125V7.875H3.5V6.125H6.125V3.5H7.875V6.125H10.5V7.875Z"
            />
          </svg>
          <span>Submit</span>
        </app-button>
        <app-button type="outlined">Outlined</app-button>
        <app-button type="secondary">Secondary</app-button>
        <app-button disabled>Disabled</app-button>
      </div>
      <app-divider />
      <div class="my-4">
        <app-tag value="TAG" />
        <app-tag value="TAG" />
        <app-tag value="TAG" />
        <app-tag value="TAG" />
      </div>
      <div class="my-6">
        <app-checkbox class="mr-2" v-model="checked" label="Default" />
        <app-checkbox class="mr-2" disabled label="Disabled" />
      </div>
      <div class="my-6">
        <app-radio class="mr-2" v-model="checked2" value="yes" checked id="yesno1" label="Yes" />
        <app-radio class="mr-2" v-model="checked2" value="no" id="yesno2" label="No" />
        <app-radio class="mr-2" v-model="checked2" value="Sure" id="yesno3" label="Sure" disabled />
      </div>
      <app-divider />
      <div class="my-6">
        <app-select :options="arrayOfObjects" />
      </div>
      <div class="my-6">
        <app-label>Skills:</app-label>
        <app-tag-input
          @onAdd="addSkillTag"
          @onRemove="removeSkillTag"
          :tags="skills"
          placeholder="Add a skill"
        />
      </div>
      <app-divider />
    </div>
    <div class="px-8 py-8 w-full lg:w-4/12">
      <div class="my-6">
        <app-tabs>
          <app-tab title="Tab1">
            <div class="py-3 px-4">This is Tab1</div>
          </app-tab>
          <app-tab title="Tab2">
            <div class="py-3 px-4">This is Tab2</div>
          </app-tab>
          <app-tab title="Tab3">
            <div class="py-3 px-4">This is Tab3</div>
          </app-tab>
        </app-tabs>
      </div>
      <div class="my-6">
        <app-card>
          <div class="px-4 py-3">ABCDEF</div>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppTextField from "../components/ui/AppTextField";
import AppDivider from "../components/ui/AppDivider";
import AppButton from "../components/ui/AppButton";
import AppTag from "../components/ui/AppTag";
import AppLabel from "../components/ui/AppLabel";
import AppCheckbox from "../components/ui/AppCheckbox";
import AppRadio from "../components/ui/AppRadio";
import AppTextarea from "../components/ui/AppTextarea";
import AppSelect from "../components/ui/AppSelect";
import AppTagInput from "../components/ui/AppTagInput";
import AppTabs from "../components/ui/AppTabs";
import AppTab from "../components/ui/AppTab";
import AppCard from "../components/ui/AppCard";

export default {
  components: {
    AppTextField,
    AppDivider,
    AppButton,
    AppTag,
    AppLabel,
    AppCheckbox,
    AppRadio,
    AppTextarea,
    AppSelect,
    AppTagInput,
    AppTabs,
    AppTab,
    AppCard
  },
  data() {
    return {
      password: "",
      email: "",
      place: "",
      checked: false,
      checked2: "",
      arrayOfObjects: [
        { id: 1, name: "House" },
        { id: 2, name: "Horse" },
        { id: 3, name: "Animal" }
      ],
      skills: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
        { id: 8, name: "H" },
        { id: 9, name: "I" },
        { id: 10, name: "J" },
        { id: 11, name: "K" },
        { id: 12, name: "L" },
        { id: 13, name: "M" }
      ]
    };
  },
  methods: {
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

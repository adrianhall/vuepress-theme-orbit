<template>
<div class="item">
  <div class="meta job-details">
    <div class="upper-row">
      <h3 class="job-title">{{this.title}}</h3>
      <div class="time">{{this.time}}</div>
    </div>
    <div class="company">{{this.company}}, {{this.place}}</div>
  </div>
  <div class="details">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "JobDetails",

  props: {
    title:   { type: String, required: true },
    time:    { type: String, required: true },
    company: { type: String, required: true },
    place:   { type: String, required: true }
  }
};
</script>

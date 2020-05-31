<template>
  <div class="skillset">
    <div class="item">
      <h3 class="level-title">{{name}}</h3>
      <div class="progress level-bar">
        <div class="progress-bar theme-progress-bar" 
          role="progressbar" :style="`width: ${progress}%`"
          :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="00">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    'name': { 
      type: String, 
      required: true 
    },
    'progress': { 
      type: String, 
      required: true
    }
  }
};
</script>

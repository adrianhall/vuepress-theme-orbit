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

<style lang="stylus">
.skillset
  .item
    margin-bottom: 15px
    overflow: hidden

  .level-title
    font-size: 14px
    margin-top: 0
    margin-bottom: 12px

  .level-bar
    background: $smoky-white
    border-radius: 2px
    height: 12px

@media (min-width: 992px)
  .skillset .level-title
    display: inline-block
    float: left
    margin-bottom: 0
    width: 30%
</style>

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

<template>
  <h2 class="section-title">
    <span class="icon-holder"><i :class="`fas fa-${icon}`"></i></span>
    {{title}}
  </h2>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    'icon':  { type: String, required: true },
    'title': { type: String, required: true }
  }
};
</script>

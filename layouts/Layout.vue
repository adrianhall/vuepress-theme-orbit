<template>
<div :class="scheme">
  <Sidebar :author="$frontmatter.author" />
  <MainWrapper>
    <Content/>
  </MainWrapper>
  <ThemeFooter />
</div>
</template>

<script>
import MainWrapper from '@theme/components/MainWrapper.vue';
import Sidebar from '@theme/components/Sidebar.vue';
import ThemeFooter from '@theme/components/ThemeFooter.vue';

export default {
  name: 'Layout',

  components: {
    MainWrapper,
    Sidebar,
    ThemeFooter
  },

  computed: {
    scheme () {
      console.log('this = ', this);
      if (this.$frontmatter.colorScheme) {
        return `wrapper scheme-${this.$frontmatter.colorScheme}`;
      } else if (this.$themeConfig.colorScheme) {
        return `wrapper scheme-${this.$themeConfig.colorScheme}`;
      } else {
        return 'wrapper';
      }
    }
  }
};
</script>

<template>
<div class="wrapper">
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
  }
};
</script>

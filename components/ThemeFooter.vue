<template>
  <footer class="footer">
    <div class="text-center">
      <!--/* This template is free as long as you keep the footer attribution link. If 
          you'd like to use the template without the attribution link, you can buy the 
          commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
      <small class="copyright">
        Designed with <i class="fas fa-heart"></i> by
        <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers
      </small>
    </div>
  </footer>
</template>

<style lang="stylus">
.footer
  padding: 30px
  padding-top: 60px
  
  .copyright
    color: $text-color-secondary
    font-size: 13px
    line-height: 1.6

  .fa-heart
    color: $heart
</style>

<script>
export default {
  name: "ThemeFooter"
};
</script>

<template>
  <div class="footer-inner">
    <div class="copyright">
      © 2018 <i class="fa fa-heart"></i> Cherry
    </div>
  </div>
</template>
<script>
export default {
  name: 'site-footer'
}
</script>
<style lang="sass">
.footer-inner
  @extend .mtb5, .pt5, .pb10
  margin: 0 auto
  width: 900px
  .copyright
    @extend .mr2, %text-secondary
</style>

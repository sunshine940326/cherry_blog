<template>
  <div class="index-inner">
    <site-header></site-header>
    <slot></slot>
    <site-footer></site-footer>
  </div>
</template>

<script>
import siteHeader from '@/components/site-header'
import siteFooter from '@/components/site-footer'

export default {
  name: 'indexLayout',
  components: {
    siteHeader,
    siteFooter
  }
}
</script>
<style lang="sass" scoped>
.index-inner
  margin: 0 auto
  padding: 30px 0 70px
  width: 900px
</style>

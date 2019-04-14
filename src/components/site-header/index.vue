<template>
  <div>
    <div class="header-inner">
      <div class="site-brand-wrapper">
        <div class="site-title">{{config.site.title}}</div>
        <div class="site-subtitle">{{config.site.subtitle}}</div>
        <div class="site-nav">
          <ul>
            <li class="nav-item" v-for="nav in config.nav" :key="nav.value">
              <router-link :to="nav.path">
                <i class="fa" :class="nav.icon"></i>
                {{nav.label}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import siteNav from '@/components/site-nav'
export default {
  name: 'site-header',
  components: {
    // siteNav
  },
  beforeMount () {
  }
}
</script>
<style lang="sass">
.header-inner
  margin: 0 auto
  padding: 100px 0 70px
  width: 900px
  .site-title
    @extend %fs20, .fw5, .lh9
  .site-subtitle
    @extend .mt2, %fs14, %text-secondary
  .site-nav
    @extend .mt5
    .nav-item
      @extend .mlr5, %inline-block
      a
        @extend %fs14, %flex-column, .lh5
        border-bottom: 1px solid transparent
        i
          @extend .mb2
        &:hover
          @extend %theme
          border-bottom: 1px solid #fe5757
          opacity: .8
</style>

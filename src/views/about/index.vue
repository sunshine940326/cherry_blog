<template>
  <layout>
    <div class="article-item" v-html="about"></div>
  </layout>
</template>
<script>
import layout from '@/components/index-layout'
import aboutMD from './about.md'
import Marked from 'marked'

export default {
  name: 'about',
  components: {
    layout
  },
  data () {
    return {
      aboutMD
    }
  },
  computed: {
    about () {
      return Marked(this.aboutMD)
    }
  }
}
</script>
<style lang="sass" scoped>
.article-item
  @extend .p10, .m10, %text-left
  background: #fff
  box-shadow: 0 0 14px #cacbcc
  p
    @extend .mb6
    text-align: left
</style>

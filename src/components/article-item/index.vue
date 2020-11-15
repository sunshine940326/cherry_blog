<template>
  <div class="article-item">
    <div class="article-header">
      <h1 class="article-title">
        {{article.title}}
      </h1>
      <div class="article-meta">
        <span class="meta-time-icon">
          <i class="fa fa-calendar-o"></i>
        </span>
        <span class="meta-time">
          {{article.createAt.slice(0, 10)}}
        </span>
        <divide-line></divide-line>
        <span class="meta-folder-icon">
          <i class="fa fa-folder-o"></i>
        </span>
        <span class="meta-folder">
          {{tagName}}
        </span>
      </div>
    </div>
    <div class="article-summary" v-if="!isDetail">
      <p v-html="desc"></p>
      <el-button type="primary" @click="handleReadMore(article._id)" plain>阅读全文 »</el-button>
    </div>
    <div v-else class="article-body" v-html="content">
    </div>
  </div>
</template>
<script>
import divideLine from '@/components/divide-line'
const Marked = require('marked')
import { _getTagList } from '@/service/tag'

export default {
  name: 'articleItem',
  props: {
    article: [Object, Array]
  },
  data() {
    return {
      tagName: ''
    }
  },
  computed: {
    isDetail () {
      return this.$route.name === 'articleDetail'
    },
    content () {
      return this.article.content && Marked(this.article.content)
    },
    desc () {
      return this.article.desc && Marked(this.article.desc)
    }
  },
  components: {
    divideLine
  },
  methods: {
    handleReadMore (id) {
      this.$router.push({
        name: 'articleDetail',
        params: {
          articleId: id
        }
      })
    },
    async fetchTag (){
      const res = await _getTagList()
      const tag = res.list.filter(item => item.tagValue === this.article.tag)
      this.tagName = tag.length > 0 && tag[0].tagName
      this.total = res.total
    }
  },
  beforeMount () {
    this.fetchTag()
  }
}
</script>
<style lang="sass">
.article-item
  @extend .p10, .m10
  background: #fff
  box-shadow: 0 0 14px #cacbcc
  p
    @extend .mb6
    text-align: left
    img
      @extend %wf  
  .article-header
    .article-title
      @extend %fs22, .fw5
      line-height: 1.5
    .article-meta
      @extend .mt1, .mb10
      span
        @extend %text-regular, %fs12
      i
        @extend .mr1
  .article-summary
    .article-pic
      @extend .p1, .mb6
      max-width: 100%
      height: auto
      border: 1px solid #ddd
    img
      @extend %wf 
  .article-body
    @extend %text-left
</style>

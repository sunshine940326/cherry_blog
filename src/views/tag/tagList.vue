<template>
  <layout>
    <div class="tag-list">
      <div class="tag-title">
        {{tagName}} 标签
      </div>
      <article v-for="article in articleList" class="article-item" @click="handleArticleClick(article._id)">
        <header class="article-header">
          <div>
            <div class="article-time">{{article.createAt.slice(0, 10)}}</div>
            <h3 class="article-title">{{article.title}}</h3>
          </div>
        </header>
      </article>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handlePageChange"
        :total="total">
      </el-pagination>
    </div>
  </layout>
</template>
<script>
import layout from '@/components/index-layout'
import tagList from './tagList'
import { _getArticleList } from '@/service/article'
import { _getTagList } from '@/service/tag'

export default {
  name: 'tagList',
  components: {
    layout,
    tagList
  },
  data (){
    return {
      tagName: '',
      tagValue: '',
      articleList: {},
      total: 0,
      currentPage: 1,
      limit: 10
    }
  },
  methods: {
    async fetchList (){
      const queryParams = {
        offset: this.limit * (this.currentPage - 1) || 0,
        limit: this.limit,
        tag: this.tagValue
      }
      const res = await _getArticleList({ queryParams })
      this.articleList = res.list
    },
    async fetchTag (){
      const res = await _getTagList()
      const tag = res.list.filter(item => item.tagName === this.tagName)
      this.tagValue = tag[0].tagValue
      this.total = res.total
    },
    handleArticleClick (id){
      this.$router.push({
        name: 'articleDetail',
        params: {
          articleId: id
        }
      })
    },
    handlePageChange (value) {
      this.currentPage = value
      this.fetchList()
    }
  },
  async beforeMount (){
    this.tagName = this.$route.params.tagName
    this.fetchTag().then(this.fetchList)
  }
}
</script>
<style lang="sass" scoped>
.tag-list
  position: relative
  &:after
    content: " "
    position: absolute
    top: 20px
    left: 0
    margin-left: -2px
    width: 4px
    height: 100%
    background: #f5f5f5
    z-index: 1
  .article-item
    @extend .p6, %text-left, .mtb10
    position: relative
    box-shadow: 0 0 14px #cacbcb
    z-index: 2
    background: #fff
    cursor: pointer
  .article-header
    border-bottom: 1px dashed #ccc
    position: relative
    &:before
      content: " "
      position: absolute
      left: 0
      top: 12px
      width: 6px
      height: 6px
      margin-left: -4px
      background: #bbb
      border-radius: 50%
      border: 1px solid #fff
      transition-property: background
    .article-time
      display: inline-block
      @extend .mlr4
    .article-title
      display: inline-block
      @extend .m0
      font-sieze: 14px
  .tag-title
    @extend %text-left, .ml3, .pt3
</style>

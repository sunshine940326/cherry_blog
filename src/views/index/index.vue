<template>
  <layout>
    <div>
      <article-item v-for="(item, index) in articleList" :key="index" :article="articleList[index]"></article-item>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handlePageChange"
        :total='total'>
      </el-pagination>
    </div>
  </layout>
</template>
<script>
import { _getArticleList } from '@/service/article'
import articleItem from '@/components/article-item'
import layout from '@/components/index-layout'

export default {
  name: 'index',
  components: {
    layout,
    articleItem
  },
  data () {
    return {
      articleList: [],
      limit: 10,
      offset: 0,
      currentPage: 1,
      total: 0
    }
  },
  methods: {
    handlePageChange (value) {
      this.currentPage = value
      this.fetchData()
    },
    async fetchData () {
      let queryParams = {
        limit: this.limit,
        offset: this.limit * (this.currentPage - 1) || 0
      }
      const res = await _getArticleList({ queryParams })
      this.articleList = res.list
      this.total = res.total
    }
  },
  beforeMount () {
    this.fetchData()
  }
}
</script>

<style lang="sass" scoped>
</style>

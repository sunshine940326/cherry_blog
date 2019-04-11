<template>
  <layout>
    <div>
      <article-item v-for="(article, index) in article" :key="index" :article="article"></article-item>
    </div>
  </layout>
</template>
<script>
import { _getArticleList } from '@/service/article'
import layout from '@/components/index-layout'
import articleItem from '@/components/article-item'

export default {
  name: 'articleDetail',
  components: {
    layout,
    articleItem
  },
  data () {
    return {
      article: {}
    }
  },
  async beforeMount () {
    const queryParams = {
      id: this.$route.params.articleId
    }
    const res = await _getArticleList({ queryParams })
    this.article = res.list
  }
}
</script>

<style lang="sass" scoped>

</style>

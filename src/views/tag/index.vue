<template>
  <layout>
    <div>
      目前共计 {{total}} 个标签
      <div class="tag-list">
        <span v-for="tag in tags" class="tag" @click="handleTag(tag.tagName)">
          {{tag.tagName}}
        </span>
      </div>
    </div>
  </layout>
</template>
<script>
import { _getTagList } from '@/service/tag'
import layout from '@/components/index-layout'

export default {
  name: 'tag',
  components: {
    layout
  },
  data (){
    return {
      total: 0,
      tags: []
    }
  },
  methods: {
    async fetchArticles () {
      const res = await _getTagList()
      this.total = res.total
      this.tags = res.list
    },
    handleTag (tagName){
      this.$router.push({
        name: 'tagList',
        params: {
          tagName: tagName
        }
      })
    }
  },
  beforeMount () {
    this.fetchArticles()
  }
}
</script>
<style lang="sass" scoped>
.tag
  color: #9d9d9d
  font-size: 16.5px
  border-bottom: 1px solid #999
  cursor: pointer
  @extend .mr4
</style>

<template>
  <div id="app">
    <canvas id="canvas"></canvas>
    <router-view></router-view>
  </div>
</template>

<script>
import canvasLines from '@/background/canvas-line.js'

export default {
  name: 'app',
  methods: {
    canvasLines
  },
  created () {
    this.$nextTick(() => {
      this.canvasLines()
    })
  }
}
</script>

<style lang="sass" scoped>
#app
  font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#canvas
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  z-index: -1
  margin: 0
  cursor: none
  background: #fff
</style>

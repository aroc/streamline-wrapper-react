<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <StreamlineIcon
      :icon="icon"
      :path="path"
      spin
      infinite
    />
  </div>
</template>
<script>
import StreamlineIcon from './components/StreamlineIcon.vue'

export default {
  name: 'App',
  components: {
    StreamlineIcon
  },
  data () {
    return {
      icon: ['arrow-down-1', 24, 24, [{ fill: '#000000', stroke: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 0 }], ['M12,19.5a2.3,2.3,0,0,1-1.729-.78L.46,7.568A1.847,1.847,0,0,1,3.233,5.129l8.579,9.752a.25.25,0,0,0,.376,0l8.579-9.752A1.847,1.847,0,1,1,23.54,7.568L13.732,18.716A2.31,2.31,0,0,1,12,19.5Z']],
      path: 'M12,19.5a2.3,2.3,0,0,1-1.729-.78L.46,7.568A1.847,1.847,0,0,1,3.233,5.129l8.579,9.752a.25.25,0,0,0,.376,0l8.579-9.752A1.847,1.847,0,1,1,23.54,7.568L13.732,18.716A2.31,2.31,0,0,1,12,19.5Z',
      default: 'test'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

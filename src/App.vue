<template>
  <div id="app">
    <ActPresent />
    <ActGlory />
    <ActFresh />
    <ActMore />
    <ActLive />
  </div>
</template>

<script>
  import './assets/less/common.less'
  import ActPresent from './views/act-present'
  import ActGlory from './views/act-glory'
  import ActFresh from './views/act-fresh'
  import ActMore from './views/act-more'
  import ActLive from './views/act-live'

  export default {
    name: 'App',
    components: {
      ActPresent,
      ActGlory,
      ActFresh,
      ActMore,
      ActLive
    }
  }
</script>


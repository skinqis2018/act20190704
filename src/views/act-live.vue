<template>
  <div class="live">
    <ActTitle 
      class="glory__title"
      :left-img="ui.leftImg"
      :right-img="ui.rightImg"/>
    <img src="../imgs/qr.jpg" />
  </div>
</template>
<script>
import ActTitle from './act-title'

export default {
  components: {
    ActTitle
  },
  data () {
    return {
      ui: {
        leftImg: require('../imgs/title_left_05.png'),
        rightImg: require('../imgs/title_right_05.png')
      }
    }
  }
}
</script>


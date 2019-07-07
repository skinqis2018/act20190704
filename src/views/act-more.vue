<template>
  <div class="more">
    <ActTitle 
      class="glory__title"
      :left-img="ui.leftImg"
      :right-img="ui.rightImg"/>
    <div class="more__content">
      <img src="../imgs/poster.jpg" />
      <img src="../imgs/poster.jpg" />
    </div>
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
        leftImg: require('../imgs/title_left_04.png'),
        rightImg: require('../imgs/title_right_04.png')
      }
    }
  }
}
</script>

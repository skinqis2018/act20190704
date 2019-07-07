<template>
  <div class="present">
    <ActTitle 
      :left-img="ui.leftImg"
      :right-img="ui.rightImg"/>
    <div class="present__btns">
      <div class="present__btns__live">去看直播</div>
      <div class="present__btns__qb">
        <img src="../imgs/qb.png" />
        <span>领取5Q币</span>
      </div>
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
        leftImg: require('../imgs/title_left_01.png'),
        rightImg: require('../imgs/title_right_01.png')
      }
    }
  }
}
</script>


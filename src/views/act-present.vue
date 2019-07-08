<template>
  <div class="present">
    <ActTitle 
      :left-img="ui.leftImg"
      :right-img="ui.rightImg"/>
    <div class="present__btns">
      <div class="present__btns__live">去看直播</div>
      <div @click="open" class="present__btns__qb">
        <img src="../imgs/qb.png" />
        <span>领取5Q币</span>
      </div>
    </div>
    <div v-show="mask" class="mask"></div>
    <div v-show="more" class="present__dialog">
      <img class="present__dialog__text" src="../imgs/more.png" />
      <img @click="close" class="present__dialog__btn" src="../imgs/confirm.png" />
    </div>
    <div v-show="success" class="present__dialog">
      <img class="present__dialog__text" src="../imgs/success.png" />
      <img @click="close" class="present__dialog__btn" src="../imgs/confirm.png" />
    </div>
    <div v-show="error" class="present__dialog">
      <img class="present__dialog__text" src="../imgs/error.png" />
      <img @click="close" class="present__dialog__btn" src="../imgs/confirm.png" />
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
      },
      mask: false,
      more: false,
      success: false,
      error: false
    }
  },
  methods: {
    open () {
      let ran = Math.floor(Math.random() * 3)
      switch (ran) {
        case 1:
          this.error = true
          break;
        case 2:
          this.success = true
          break
        default:
          this.more = true
          break;
      }
      this.mask = true
    },
    close () {
      this.more = false
      this.success = false
      this.error = false
      this.mask = false
    }
  }
}
</script>


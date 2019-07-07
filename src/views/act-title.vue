<template>
  <div class="title">
    <div class="title__short">
      <img :src="leftImg" />
    </div>
    <div class="title__long">
      <img :src="rightImg" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftImg: {
      type: String,
      default: '',
      required: true
    },
    rightImg: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>


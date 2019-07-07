<template>
  <div style="font-size: 20px; color: #fff">
    content
    <!-- <ActRanking 
      style="width: 100%;background: #000;color: #fff"
      :title="title"
      :sub-title="subTitle"
      :data="data" /> -->
  </div>
</template>
<script>
  import ActRanking from './act-ranking'

  export default {
    components: {
      ActRanking
    },
    data () {
      return {
        title: '荣耀周榜',
        subTitle: '主播人气排行榜',
        data: [
          {
            id: 0,
            nick: '主播名',
            ranking: '1',
            avatar: require('../imgs/avatar.jpeg')
          }, {
            id: 1,
            nick: 'second-man',
            ranking: '2',
            avatar: require('../imgs/avatar.png')
          }, {
            id: 2,
            nick: 'third-man',
            ranking: '3',
            avatar: require('../imgs/avatar.jpeg')
          }, {
            id: 3,
            nick: 'second-man',
            ranking: '4',
            avatar: require('../imgs/avatar.png')
          }, {
            id: 4,
            nick: 'third-man',
            ranking: '5',
            avatar: require('../imgs/avatar.jpeg')
          }, {
            id: 5,
            nick: 'second-man',
            ranking: '6',
            avatar: require('../imgs/avatar.png')
          }, {
            id: 6,
            nick: 'third-man',
            ranking: '7',
            avatar: require('../imgs/avatar.jpeg')
          }, {
            id: 7,
            nick: 'second-man',
            ranking: '8',
            avatar: require('../imgs/avatar.png')
          }, {
            id: 8,
            nick: 'third-man',
            ranking: '9',
            avatar: require('../imgs/avatar.jpeg')
          }, {
            id: 9,
            nick: 'third-man',
            ranking: '10',
            avatar: require('../imgs/avatar.jpeg')
          }
        ]
      }
    }
  }
</script>


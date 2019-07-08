<template>
  <div class="glory">
    <ActTitle 
      class="glory__title"
      :left-img="ui.leftImg"
      :right-img="ui.rightImg"/>
    <div class="glory__content">
      <ActRanking 
        :title="ui.weekRanking.title"
        :data="ui.weekRanking.data"
        :prizeData="ui.weekRanking.prizeData"/>
      <ActRanking 
        :title="ui.monthRanking.title"
        :data="ui.monthRanking.data"
        :prizeData="ui.monthRanking.prizeData"/>
    </div>
  </div>
</template>
<script>
import ActTitle from './act-title'
import ActRanking from './act-ranking'

export default {
  components: {
    ActTitle,
    ActRanking
  },
  data () {
    return {
      ui: {
        leftImg: require('../imgs/title_left_02.png'),
        rightImg: require('../imgs/title_right_02.png'),
        weekRanking: {
          title: require('../imgs/glory_week_title.png'),
          data: [
            {
              id: 0,
              nick: '主播名',
              follow: '最强助攻粉丝',
              ranking: '1',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 1,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '2',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 2,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '3',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 3,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '4',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 4,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '5',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 5,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '6',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 6,
              nick: 'third-man',
              ranking: '7',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 7,
              nick: 'second-man',
              ranking: '8',
              follow: '最强助得的攻粉丝',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 8,
              nick: 'third-man',
              ranking: '9',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 9,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '10',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }
          ],
          prizeData: [
            {
              id: 0,
              nick: 'prize主播名',
              follow: '最强助攻粉丝',
              ranking: '1',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 1,
              nick: 'prize',
              follow: '最强助攻粉丝',
              ranking: '2',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 2,
              nick: 'prize-man',
              follow: '最强助攻粉丝',
              ranking: '3',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 3,
              nick: 'prizeman',
              follow: '最强助攻粉丝',
              ranking: '4',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 4,
              nick: 'tprize',
              follow: '最强助攻粉丝',
              ranking: '5',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 5,
              nick: 'secprizeman',
              follow: '最强助攻粉丝',
              ranking: '6',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 6,
              nick: 'thprizeman',
              ranking: '7',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 7,
              nick: 'prize',
              ranking: '8',
              follow: '最强助攻粉丝',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 8,
              nick: 'thprize',
              ranking: '9',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 9,
              nick: 'tprize',
              follow: '最强助攻粉丝',
              ranking: '10',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }
          ]
        },
        monthRanking: {
          title: require('../imgs/glory_month_title.png'),
          data: [
            {
              id: 0,
              nick: '我是主播的名字',
              follow: '最强助攻粉丝的',
              ranking: '1',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 1,
              nick: 'second-man',
              follow: '最强助的攻粉丝',
              ranking: '2',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 2,
              nick: 'third-man',
              follow: '最强助攻粉丝的啊',
              ranking: '3',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 3,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '4',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 4,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '5',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 5,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '6',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 6,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '7',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 7,
              nick: 'second-man',
              follow: '最强助攻粉丝',
              ranking: '8',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 8,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '9',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 9,
              nick: 'third-man',
              follow: '最强助攻粉丝',
              ranking: '10',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }
          ],
          prizeData: [
            {
              id: 0,
              nick: 'prize主播名',
              follow: '最强助攻粉丝',
              ranking: '1',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 1,
              nick: 'prize',
              follow: '最强助攻粉丝',
              ranking: '2',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 2,
              nick: 'prize-man',
              follow: '最强助攻粉丝',
              ranking: '3',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 3,
              nick: 'prizeman',
              follow: '最强助攻粉丝',
              ranking: '4',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 4,
              nick: 'tprize',
              follow: '最强助攻粉丝',
              ranking: '5',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 5,
              nick: 'secprizeman',
              follow: '最强助攻粉丝',
              ranking: '6',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 6,
              nick: 'thprizeman',
              ranking: '7',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 7,
              nick: 'prize',
              ranking: '8',
              follow: '最强助攻粉丝',
              avatar: require('../imgs/avatar.png')
            }, {
              id: 8,
              nick: 'thprize',
              ranking: '9',
              follow: '最强助攻粉丝',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }, {
              id: 9,
              nick: 'tprize',
              follow: '最强助攻粉丝',
              ranking: '10',
               avatar: require('../imgs/avatar.jpeg'),isLive: true
            }
          ]
        }
      }
    }
  }
}
</script>


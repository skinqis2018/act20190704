<template>
  <div class="ranking">
    <div class="ranking__title">
      <img :src="title" />
    </div>
    <div class="ranking__btns">
      <div 
        :class="{ active: isPopularity }"
        @click="isPopularity = true">主播人气排行榜</div>
      <div 
        :class="{ active: !isPopularity }"
        @click="isPopularity = false">主播礼物排行榜</div>
    </div>
    <div v-show="isPopularity" class="ranking__body">
      <div class="ranking__body__top ranking__body__first">
        <div class="ranking__body__top__box ranking__body__top__box__first">
          <img :src="data[0].avatar" />
          <img 
            v-if="data[0].isLive"
            class="ranking__body__list__body__avatar__box__live" 
            src="../imgs/live.png"/>
        </div>
        <div class="ranking__nick ranking__name">{{data[0].nick}}</div>
        <div class="ranking__name">{{data[0].follow}}</div>
      </div>
      <div class="ranking__body__top ranking__body__second">
        <div>
          <div class="ranking__body__top__box ranking__body__top__box__second">
            <img :src="data[1].avatar" />
            <img 
              v-if="data[1].isLive"
              class="ranking__body__list__body__avatar__box__live" 
              src="../imgs/live.png"/>
          </div>
          <div class="ranking__nick ranking__name">{{data[1].nick}}</div>
          <div class="ranking__name">{{data[1].follow}}</div>
        </div>
        <div>
          <div class="ranking__body__top__box ranking__body__top__box__third">
            <img :src="data[2].avatar" />
            <img 
              v-if="data[2].isLive"
              class="ranking__body__list__body__avatar__box__live" 
              src="../imgs/live.png"/>
          </div>
          <div class="ranking__nick ranking__name">{{data[2].nick}}</div>
          <div class="ranking__name">{{data[2].follow}}</div>
        </div>
      </div>
      <div class="ranking__body__list">
        <div class="ranking__body__list__title">
          <span class="ranking__body__list__title__rank">排名</span>
          <span class="ranking__body__list__title__avatar">主播头像</span>
          <span class="ranking__body__list__title__nick">主播名</span>
          <span class="ranking__body__list__title__follow">最强助攻粉丝</span>
        </div>
        <div 
          v-for="item in lastData" 
          :key="item.ranking"
          class="ranking__body__list__body">
          <div class="ranking__body__list__body__rank">
            <div class="ranking__body__list__body__rank__box">
              {{item.ranking}}
            </div>
          </div>
          <div class="ranking__body__list__body__avatar">
            <div class="ranking__body__list__body__avatar__box">
              <img 
                class="ranking__body__list__body__avatar__box__img" 
                :src="item.avatar"/>
              <img 
                v-if="item.isLive"
                class="ranking__body__list__body__avatar__box__live" 
                src="../imgs/live.png"/>
            </div>
          </div>
          <div class="ranking__body__list__body__nick">
            {{item.nick}}
          </div>
          <div class="ranking__body__list__body__follow">
            {{item.follow}}
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isPopularity" class="ranking__body">
      <div class="ranking__body__top ranking__body__first">
        <div class="ranking__body__top__box ranking__body__top__box__first">
          <img :src="prizeData[0].avatar" />
          <img 
            v-if="prizeData[0].isLive"
            class="ranking__body__list__body__avatar__box__live" 
            src="../imgs/live.png"/>
        </div>
        <div class="ranking__nick ranking__name">{{prizeData[0].nick}}</div>
        <div class="ranking__name">{{prizeData[0].follow}}</div>
      </div>
      <div class="ranking__body__top ranking__body__second">
        <div>
          <div class="ranking__body__top__box ranking__body__top__box__second">
            <img :src="prizeData[1].avatar" />
            <img 
              v-if="prizeData[1].isLive"
              class="ranking__body__list__body__avatar__box__live" 
              src="../imgs/live.png"/>
          </div>
          <div class="ranking__nick ranking__name">{{prizeData[1].nick}}</div>
          <div class="ranking__name">{{prizeData[1].follow}}</div>
        </div>
        <div>
          <div class="ranking__body__top__box ranking__body__top__box__third">
            <img :src="prizeData[2].avatar" />
            <img 
              v-if="prizeData[2].isLive"
              class="ranking__body__list__body__avatar__box__live" 
              src="../imgs/live.png"/>
          </div>
          <div class="ranking__nick ranking__name">{{prizeData[2].nick}}</div>
          <div class="ranking__name">{{prizeData[2].follow}}</div>
        </div>
      </div>
      <div class="ranking__body__list">
        <div class="ranking__body__list__title">
          <span class="ranking__body__list__title__rank">排名</span>
          <span class="ranking__body__list__title__avatar">主播头像</span>
          <span class="ranking__body__list__title__nick">主播名</span>
          <span class="ranking__body__list__title__follow">最强助攻粉丝</span>
        </div>
        <div 
          v-for="item in prizeLastData" 
          :key="item.ranking"
          class="ranking__body__list__body">
          <div class="ranking__body__list__body__rank">
            <div class="ranking__body__list__body__rank__box">
              {{item.ranking}}
            </div>
          </div>
          <div class="ranking__body__list__body__avatar">
            <div class="ranking__body__list__body__avatar__box">
              <img 
                class="ranking__body__list__body__avatar__box__img" 
                :src="item.avatar"/>
              <img 
                v-if="item.isLive"
                class="ranking__body__list__body__avatar__box__live" 
                src="../imgs/live.png"/>
            </div>
          </div>
          <div class="ranking__body__list__body__nick">
            {{item.nick}}
          </div>
          <div class="ranking__body__list__body__follow">
            {{item.follow}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    prizeData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.lastData = this.data.slice(3)
    this.prizeLastData = this.prizeData.slice(3)
  },
  data () {
    return {
      isPopularity: true,
      lastData: [],
      prizeLastData: []
    }
  }
}
</script>



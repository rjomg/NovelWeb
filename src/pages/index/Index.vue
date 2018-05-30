<template>
  <div>
    <index-header></index-header>
    <index-nav></index-nav>
    <div class="block"></div>
    <div class="containerbox">
      <div class="wrap">
        <index-sidebar v-bind:recommendInfot="recommendInfot"></index-sidebar>
        <index-swiper></index-swiper>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="block"></div>
    <div class="containerbox">
      <index-sidebar v-bind:newsInfo="newsInfo"></index-sidebar>
    </div>
  </div>
</template>

<script>
import IndexHeader from './components/Header' // 头部
import IndexSwiper from './components/Swiper' // 轮播
import IndexNav from './components/Nav' // 导航
import IndexSidebar from './components/sidebar' // 侧边栏
export default{
  name: 'Index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexNav,
    IndexSidebar,
    IndexSidebar
  },
  data: function () {

    return {
      recommendInfot: [{
        id: '1',
        tags: '「悬疑」',
        title: '诡案追凶录'
      },
      {
        id: '2',
        tags: '「都市」',
        title: '都市全能大相师'
      },
      {
        id: '3',
        tags: '「悬疑」',
        title: '赎罪者'
      }],
      newsInfo: [{
        id: '4',
        tags: '「悬疑1」',
        title: '诡案追凶录1'
      },
      {
        id: '5',
        tags: '「都市1」',
        title: '都市全能大相师1'
      },
      {
        id: '6',
        tags: '「悬疑」',
        title: '赎罪者'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .block
    width: 100%;
    height: 10px;
    background-color: #fafafa;
    // background-color: red
  .containerbox
    background-color: #fafafa;
    .wrap
      margin: 0 auto;
      width: 1200px;
      background-color: #fafafa;
      background-color: red;
</style>

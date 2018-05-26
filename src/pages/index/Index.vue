<template>
  <div>
    <index-header></index-header>
    <index-nav></index-nav>
    <div class="block"></div>
    <div class="containerbox">
      <div class="wrap">
        <index-sidebar></index-sidebar>
        <index-swiper></index-swiper>
      </div>
      <div style="clear:both;"></div>
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
    IndexSidebar
  }
}
</script>

<style lang="stylus" scoped>
  .block
    width: 100%;
    height: 10px;
  .containerbox
    background-color: #fafafa;
    .wrap
      margin: 0 auto;
      width: 1200px;
      background-color: #fafafa;
      background-color: red;
</style>

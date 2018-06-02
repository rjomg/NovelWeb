<template>
  <div>
    <index-header></index-header>
    <index-nav></index-nav>
    <div class="block"></div>
    <div class="containerbox">
      <div class="wrap">
        <index-sidebar :title="recommendTitle" :list="recommendList"></index-sidebar>
        <index-swiper></index-swiper>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="block"></div>
    <div class="containerbox">
      <div class="wrap">
        <index-sidebar :title="newsTitle" :list="newsList"></index-sidebar>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!-- <router-link to="/User">
      <div>User</div>
    </router-link> -->
  </div>
</template>

<script>
import IndexHeader from './components/Header' // 头部
import IndexSwiper from './components/Swiper' // 轮播
import IndexNav from './components/Nav' // 导航
import IndexSidebar from './components/sidebar' // 侧边栏
import axios from 'axios' // ajax
export default{
  name: 'Index',
  components: {
    // 组件注册
    IndexHeader,
    IndexSwiper,
    IndexNav,
    IndexSidebar
  },
  data () {
    return {
      recommendTitle: '',
      recommendList: [],
      newsTitle: '',
      newsList: []
    }
  },
  methods: {
    // 方法
    getIndexInfo () {
      axios.get('/api/index.json')
        .then(this.getIndexInfoSucc)
    },
    getIndexInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendTitle = data.recommendTitle
        this.recommendList = data.recommendList
        this.newsTitle = data.newsTitle
        this.newsList = data.newsList
      }
    }
  },
  mounted: function () {
    // 生命周期函数
    this.getIndexInfo()
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

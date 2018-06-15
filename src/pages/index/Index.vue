<template>
  <div>
    <index-header></index-header>
    <index-nav></index-nav>
    <div class="block"></div>

    <div class="containerbox">
      <div class="wrap">
        <index-sidebar :info="recommendInfo"></index-sidebar>
        <index-swiper></index-swiper>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="block"></div>

    <div class="containerbox">
      <div class="wrap">
        <index-sidebar :info="newsInfo"></index-sidebar>
        <div class="wrap950">
          <index-hotlist :info="hotInfo"></index-hotlist>
          <Index-small-img-coll :info="smallImgCollInfo"></Index-small-img-coll>
        </div>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="block20"></div>

    <div class="containerbox">
      <div class="wrap">
        <index-imglist :list="imgList"></index-imglist>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // ajax
import IndexHeader from './components/Header' // 头部
import IndexSwiper from './components/Swiper' // 轮播
import IndexNav from './components/Nav' // 导航
import IndexSidebar from './components/Sidebar' // 侧边栏
import IndexHotlist from './components/Hotlist' // 推荐列表
import IndexSmallImgColl from './components/SmallImgColl' // 藏金阁
import IndexImglist from './components/Imglist' // 图片列表

export default{
  name: 'Index',
  components: {
    // 组件注册
    IndexHeader,
    IndexSwiper,
    IndexNav,
    IndexSidebar,
    IndexHotlist,
    IndexSmallImgColl,
    IndexImglist
  },
  data () {
    return {
      recommendInfo: [],
      newsInfo: [],
      hotInfo: [],
      smallImgCollInfo: [],
      imgList: []
    }
  },
  methods: {
    // 方法
    getIndexInfo () {
      axios.get('/api/test')
        .then(this.getIndexInfoSucc)
    },
    getIndexInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendInfo = data.recommendInfo
        this.newsInfo = data.newsInfo
        this.hotInfo = data.hotInfo
        this.smallImgCollInfo = data.smallImgCollInfo
        this.imgList = data.imgList
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
  .block20
    width: 100%;
    height: 20px;
    background-color: #fafafa;
  .containerbox
    background-color: #fafafa;
    .wrap
      margin: 0 auto;
      width: 1200px;
      background-color: #fafafa;
      .wrap950
        float: right;
        width: 950px;
        height: 280px;
        background-color: #fafafa;
</style>

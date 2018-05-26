<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'IndexSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'fade', // 渐变
        loop: true, // 环路
        autoplay: 5000, // 轮播
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      },
      swiperList: [{
        id: '1',
        imgUrl: 'http://pic.motieimg.com/img/15271302248586114_950_360.jpg'
      },
      {
        id: '2',
        imgUrl: 'http://pic.motieimg.com/img/152713028552916_950_360.jpg'
      },
      {
        id: '3',
        imgUrl: 'http://pic.motieimg.com/img/152713021647223889_950_360.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background : #ff4c2f
  .wrapper:hover .swiper-button-next, .wrapper:hover .swiper-button-prev
    opacity:1;
  .wrapper
    float: right;
    height: 360px;
    width: 950px;
    .swiper-img
      width: 100%;
    .swiper-button-next
      opacity:0;
      width : 40px;
      background-size : 40px 40px;
      background-image:url("~@/assets/images/next.png");
      transition:opacity 0.5s;
      -moz-transition:opacity 0.5s; /* Firefox 4 */
      -webkit-transition:opacity 0.5s; /* Safari and Chrome */
      -o-transition:opacity 0.5s; /* Opera */
    .swiper-button-prev
      opacity:0;
      width : 40px;
      background-size : 40px 40px;
      background-image:url("~@/assets/images/prev.png");
      transition:opacity 0.5s;
      -moz-transition:opacity 0.5s; /* Firefox 4 */
      -webkit-transition:opacity 0.5s; /* Safari and Chrome */
      -o-transition:opacity 0.5s; /* Opera */
</style>

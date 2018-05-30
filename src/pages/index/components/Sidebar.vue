<template>
  <div class="sidebar">
    <!-- <div v-bind:recommendList="recommendList">{{recommendList}}</div>
    <div>11111-</div>
    <div v-bind:newsList="newsList">{{newsList}}</div> -->

    <span class="title">本周强推</span>
    <ul>
      <li v-for="item of sidebarList" :key="item.id">
        <a href="#" target="_blank" v-bind:title="item.title"><span class="tags">{{item.tags}}</span>{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexSidebar',
  props: {
    recommendInfot: {
      type: Array
    },
    newsInfo: {
      type: Array
    }
  },
  data: function () {
    return {
      recommendList: this.recommendInfot,
      newsList: this.newsInfo,
      sidebarList: ''
    }
  },
  mounted: function () {
    var sidebarList = [{id:1,title:2}]
    // var sidebarList = []
    // if(this.recommendList.length > 0){
    //   sidebarList = this.recommendList
    // }

    // if(this.newsList.length > 0){
    //   sidebarList = this.newsList
    // }
    // console.log(sidebarList)
    // console.log(this.newsList)
  }
  // data: function () {
  //   return {
  //     sidebarList: [{
  //       id: '1',
  //       tags: '「悬疑」',
  //       title: '诡案追凶录'
  //     },
  //     {
  //       id: '2',
  //       tags: '「都市」',
  //       title: '都市全能大相师'
  //     },
  //     {
  //       id: '3',
  //       tags: '「悬疑」',
  //       title: '赎罪者'
  //     },
  //     {
  //       id: '4',
  //       tags: '「玄幻」',
  //       title: '最强坑人系统'
  //     },
  //     {
  //       id: '5',
  //       tags: '「二次元」',
  //       title: '命运之夜 守护者联盟'
  //     },
  //     {
  //       id: '6',
  //       tags: '「悬疑」',
  //       title: '开冥路'
  //     },
  //     {
  //       id: '7',
  //       tags: '「悬疑」',
  //       title: '末代3 太爷传奇'
  //     },
  //     {
  //       id: '8',
  //       tags: '「悬疑」',
  //       title: '直播之鬼畜天师'
  //     },
  //     {
  //       id: '9',
  //       tags: '「都市」',
  //       title: '一世兵神'
  //     },
  //     {
  //       id: '10',
  //       tags: '「都市」',
  //       title: '一世兵神'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .sidebar
    float: left;
    width: 240px;
    height: auto;
    background-color: #ffffff;
    .title
      margin-left: 20px;
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      border-bottom: 1px solid #f2f2f2;
      display: block;
    ul
      margin: 7px 20px 14px 20px;
    ul li
      height: 29px;
      line-height: 29px;
    ul li a
      display: block;
      width: 100%;
      font-size: 12px;
      ellipsis();
    li:hover a, .tags:hover
      color: #f5546f;
    .tags
      color: #999;
</style>

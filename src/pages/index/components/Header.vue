<template>
  <div class="header">
    <div class="header-bg">
      <div class="subnavbar-content">
        <div class="header-left">
          <a>油菜中文</a>
          <a class="header-left-active">油麦菜阅读</a>
          <a>油麦菜阅读</a>
          <a>油麦菜阅读</a>
          <a>油麦菜阅读</a>
          <a>油麦菜阅读</a>
        </div>
        <div class="header-right">
          <a href="">手机版</a>
          <a href="">注册</a>
          <a href="">登录</a>
        </div>
      </div>
    </div>
    <div class="select-column">

      <div class="logo">
        <img src="@/assets/motie_logo.png">
      </div>

      <div class="mybook">
        <a href="#">
          <i class="book-icon"></i>
          我的书架
        </a>
      </div>

      <div class="select">
        <input type="text" value="" class="searchinput" placeholder="找书、找人"/>
        <i class="search-icon"></i>
        <input type="button" class="searchbtn" />
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'IndexHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    .header-bg
      height 40px;
      width: 100%;
      background-color: #f2f2f2;
      .subnavbar-content
          display: block;
          width: 1200px;
          margin: 0 auto;
          height: 40px;
          line-height: 40px;
          zoom: 1;
        .header-left
          float: left;
          height: 40px;
        .header-left a
          padding: 0 20px;
          font-size: 12px;
          display: inline-block;
          text-align: center;
          color: #666;
        .header-left-active
          background #ffffff

        .header-right
          height: 40px;
          float:right;
        .header-right a
          font-size: 12px;
          margin-left: 29px;
          line-height: 40px;
          color: #333;
          float:right;

    .select-column
      height: 50px;
      width: 100%;
      padding-top: 25px;
      padding-bottom: 25px;
      border-color: red
      width: 1200px;
      margin: 0 auto;
      line-height: 40px;
      zoom: 1;
      .logo
        float: left;
        height: 50px;
        width: 250px;
      .select
        float: right;
        margin-top:8px;
        .searchinput
          float: left;
          border: 0;
          padding: 0px 21px !important;
          font-size: 12px;
          width: 217px;
          height: 30px;
          line-height: 30px;
          margin-top: 0;
          display: block;
          background: #faf9f4;
          border-radius: 16px;
        .search-icon
          position:absolute;
          z-index: 2;
          margin-left:-27px;
          margin-top:6px;
          pointer-events: none;
          background-image: url("~@/assets/images/sprite.png");
          background-position: -451px -24px;
          width: 20px;
          height: 20px;
        .searchbtn
          position:relative;
          float: left;
          display: block;
          background: #333;
          border: 0;
          cursor: pointer;
          right: 0;
          top: 1px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin-left:-33px;

      .mybook
        float: right;
        padding-left : 46px;
        margin-top:8px;
        height: 30px;
        .mybook, a
          display: block;
          line-height:30px;
          text-decoration: none;
          color: #333;
        .book-icon
          display: block;
          margin-top: 2px;
          margin-right: 15px;
          float: left;
          border-radius: 50%;
          background-image: url("~@/assets/images/sprite.png");
          background-position: -414px -197px;
          width: 30px;
          height: 30px;
          background-color: #333;
</style>

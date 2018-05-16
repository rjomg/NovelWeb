<template>
  <div class="header">
    <div class="header-bg">
      <div class="subnavbar-content">
        <div class="header-left">
          <a>油菜中文</a>
          <a>油麦菜阅读</a>
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
        <img class="logo-img" src="@/assets/motie_logo.png">
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
        display: block
        .logo-img
          display: block
          height: 50px;
          width: 250px;
</style>

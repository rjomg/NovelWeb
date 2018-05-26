<template>
  <div class="nav">
    <ul>
      <li><a href="#" target="_blank">首页</a></li>
      <li><a href="#" target="_blank">书库</a></li>
      <li><a href="#" target="_blank">排行</a></li>
      <li><a href="#" target="_blank">精品</a></li>
      <li><a href="#" target="_blank">论坛</a></li>
      <li><a href="#" target="_blank">作家专区</a></li>
      <li><a href="#" target="_blank">福利</a></li>
      <li><a href="#" target="_blank">IP专区</a></li>
      <li><a href="#" target="_blank">蓝海阅读</a></li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexNav'
}
</script>

<style lang="stylus" scoped>
  .nav
    margin: auto;
    width: 1200px;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    background: #333;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .nav, ul
      padding-left: 38px;
    .nav, ul li
      float: left;
      margin-left: 22px;
      padding: 0 19px;
    .nav, ul li a
      color: #fff;
      font-size: 16px;
</style>

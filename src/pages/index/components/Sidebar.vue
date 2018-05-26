<template>
  <div class="sidebar">
    <span class="title">本周强推</span>
    <ul>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>诡案追凶录</a></li>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>大风水师</a></li>
      <li><a href="#" target="_blank"><span class="tags">「都市」</span>都市全能大相师</a></li>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>赎罪者</a></li>
      <li><a href="#" target="_blank"><span class="tags">「二次元」</span>命运之夜 守护者联盟</a></li>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>开冥路</a></li>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>末代3 太爷传奇</a></li>
      <li><a href="#" target="_blank"><span class="tags">「悬疑」</span>直播之鬼畜天师</a></li>
      <li><a href="#" target="_blank"><span class="tags">「都市」</span>一世兵神</a></li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexSidebar'
}
</script>

<style lang="stylus" scoped>
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
      margin: 7px 20px 0;
    ul li
      height: 29px;
      line-height: 29px;
    ul li a
      font-size: 12px;
    li:hover a, .tags:hover
      color: #f5546f;
    .tags
      color: #999;
</style>

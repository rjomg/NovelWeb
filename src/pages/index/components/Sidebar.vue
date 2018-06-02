<template>
  <div class="sidebar">
    <span class="title">{{title}}</span>
    <ul>
      <li v-for="item of list" :key="item.id">
        <a :href="item.url" target="_blank" v-bind:title="item.title"><span class="tags">{{item.tags}}</span>{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexSidebar',
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
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

<template>
  <div class="hot-list">
    <div class="title">{{info.title}}</div>
    <div class="titmenu">
      <ul>
        <li v-for="item of info.list" :key="item.id">
          <a :href="item.url"><img :src="item.img"></a>
          <div class="novel-info">
            <a class="name" :href="item.url">{{item.name}}</a>
            <a class="author" :href="item.url">{{item.author}}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name: 'IndexHotlist',
  props: {
    info: {
      type: [Array, Object],
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .hot-list
    float: left
    width: 700px;
    height: 280px;
    background-color: #ffffff;
    .title
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      border-bottom: none;
      margin-left: 30px;
    .titmenu ul
      margin: 9px 15px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      li
        padding-bottom: 20px;
        overflow: hidden;
        width: 140px;
        float: left;
        img
          margin: 0 auto;
          display: block;
          width: 110px;
          height: 150px;
          overflow: hidden;
          border-radius: 5px;
          -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.3);
          box-shadow: 1px 1px 2px rgba(0,0,0,.3);
  .novel-info
    margin-top: 12px;
    .name
      display: block;
      height: 22px;
      line-height: 22px;
      overflow: hidden;
      font-size: 16px;
      text-align: center;
    .name:hover
      color: #f5546f;
    .author
      display: block;
      text-align: center;
      color: #999;
      font-size: 14px;
</style>

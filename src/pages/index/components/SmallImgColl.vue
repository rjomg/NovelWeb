<template>
  <div class="smallimgcoll">
    <span class="title">{{info.title}}</span>
    <ul>
      <li>
        <a :href="info.url"><img :src="info.img"></a>
        <div class="novel-info">
          <a class="name" :href="info.url">{{info.name}}</a>
          <a class="author" :href="info.author_url">{{info.author}}</a>
          <a class="details" :href="info.url">书籍详情</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'IndexSmallImgColl',
  props: {
    info: {
      type: [Array, Object],
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .smallimgcoll
    float: right
    background: #fff;
    width: 240px;
    height: 280px;
    ul
      overflow: hidden;
      padding-bottom: 16px;
      width: 100px;
      margin: 17px auto 0;
      li
        margin: 0;
        padding: 0;
        border: 0;
        a
          text-decoration: none;
          font-size: 12px;
          color: #333;
          img
            display: block;
            overflow: hidden;
            border-radius: 5px;
            -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.3);
            box-shadow: 1px 1px 2px rgba(0,0,0,.3);
            margin: 0 auto;
            width: 83px;
            height: 114px;
        .novel-info
          margin-top: 12px;
          .name
            display: block;
            height: 22px;
            line-height: 22px;
            overflow: hidden;
            font-size: 16px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
          .name:hover
            color: #f5546f;
          .author
            display: block;
            text-align: center;
            color: #999;
            font-size: 14px;
          .details
            display: block;
            margin-top: 9px;
            border: 1px solid #ff4c2f;
            font-size: 16px;
            color: #ff4c2f;
            text-align: center;
            width: 98px;
            height: 27px;
            border-radius: 5px;
    .title
      margin-left: 20px;
      display: block;
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      border-bottom: 1px solid #f2f2f2;
</style>

<template>
  <div class="imglist">
    <a v-for="item of list" :key="item.id" :href="item.url">
      <img :src="item.img" alt="">
    </a>
  </div>
</template>

<script>
export default{
  name: 'IndexSmallImgColl',
  props: {
    list: {
      type: [Array],
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .imglist
    margin: 0 auto;
    a
      display: block;
      float: left;
      img
        width: 340px;
        height: 100px;
        overflow: hidden;
        border-radius: 5px;
  .imglist a:nth-child(3n-1)
    margin: 0 90px
</style>

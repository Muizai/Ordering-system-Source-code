<template>
  <div class="edit">
    <ul>
      <li>
        <span>收货人</span>
        <input
          type="text"
          placeholder="李文"
        >
      </li>
      <li>
        <span>联系电话</span>
        <input
          type="text"
          placeholder="1352624585"
        >
      </li>
      <li class="pr">
        <span>所在地区</span>
        <input
          type="text"
          placeholder="李文"
        >
        <svg
          class="icon pa"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </li>
      <li>
        <span class="haha">详细地区</span>
        <textarea
          placeholder="桂城街道千灯湖花园A902"
          id=""
          cols="30"
          rows="5"
        ></textarea>
      </li>
    </ul>
    <div class="save redbg whitetext">保存</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edit li {
  background: #fff;
  margin-bottom: 1px;
  padding: 0 0.2rem;
  box-sizing: border-box;
  line-height: 1rem;
  font-size: $fs28;
  span {
    display: inline-block;
    width: 1.5rem;
  }
  .haha {
    vertical-align: top;
  }
  textarea {
    vertical-align: top;
    margin-top: 0.3rem;
    font-size: $fs28;
    border: none;
    outline: none;
    resize: none;
  }
}
.save {
  width: 6.9rem;
  line-height: 0.8rem;
  margin: 1.11rem auto;
  text-align: center;
}
.icon {
  @include w-h(0.29rem, 0.37rem);
  top: 0.315rem;
  right: 0.2rem;
  border-radius: 0.04rem;
}
</style>

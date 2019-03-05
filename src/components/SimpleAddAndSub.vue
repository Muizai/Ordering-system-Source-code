<template>
    <div class="add-reduce df">
        <div class="reduce df jc ac" @click="onChangeCount(-1)" :class="{disabled:count===min}">-</div>
        <div class="count df jc ac">{{count}}</div>
        <div class="add df jc ac" @click="onChangeCount(1)" :class="{disabled:count===999}">+</div>
    </div>

</template>
<script>
export default {
  data() {
    return {
        
    }
  },
  props:{
      count:{type:Number,default:0},
      min:{type:Number,default:0}
  },
  methods: {
    onChangeCount(increment) {
      let result = this.count + increment
      if (result >= 0 && result <= 999) {
        // this.count = result
        this.$emit("onChange",result);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.add-reduce {
  .add,
  .reduce {
    width: 0.54rem;
    height: 0.54rem;
    background-color: #f1f1f1;
  }
  .count {
    width: 0.7rem;
    height: 0.54rem;
    margin: 0 0.03rem;
    background-color: #f1f1f1;
  }
  .disabled {
    background-color: #f8f8f8;
  }
}
</style>

<template>
    <div class="nothing">
        <img src="./../../../../static/img/no_record.png" alt="">
        <p class="no-order">暂无订单</p>
        <div class="go-shop">去逛逛</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nothing{
        height: 100vh;
        background: #fff;
        padding-top: 2.54rem;
    }
    img{
        display: block;
        @include w-h(1.2rem,1.03rem);
        margin: 0 auto;

    }
    .no-order{
        text-align: center;
        margin: 0.72rem auto;
    }
    .go-shop{
        background: $red;
        @include w-h(2.4rem,0.8rem);
        border-radius: 0.04rem;
        text-align: center;
        line-height: 0.8rem;
        color: #fff;
        margin: 0 auto;
    }
</style>

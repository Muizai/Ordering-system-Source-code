<template>
    <div class="follow df fdc ac">
        <div class="imgWrap">
            <img src="./../../../static/img/follow-qrcode.jpg" alt="">
        </div>
        <p>长按二维码关注微信公众号， 及时接收商家动态</p>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhiwenrenzheng1"></use>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .follow{
        height: 100vh;
        background: url('./../../../static/img/follow-business.jpg') no-repeat center center;
        background-size: cover;
    }
    .imgWrap{
        @include w-h(2.9rem,2.9rem);
        margin-top: 2.2rem;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    p{
        @include w-h(2.93rem,0.52rem);
        color: #fff;
        font-size: $fs24;
        text-align: center;
        word-break: keep-all;
        margin-top: 0.6rem;
    }
    .icon{
        @include w-h(1.46rem,1.46rem);
        color: #fff;
        margin-top: 0.5rem;
    }
</style>

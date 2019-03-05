<template>
    <div class="team-performance-2">
        <div class="num df jsb ac">
            <span>团队人数</span>
            <span class="redtext">10</span>
        </div>
        <div class="container-wrap">
            <div class="container df " v-for="(item,index) in containerList" :key="index">
                <div class="img-wrap">
                    <img src="./../../../static/img/agent-img.jpg" alt="">
                </div>
                <div>
                    <p>Atreuse(13789564525)</p>
                    <p>个人业绩：￥500.00</p>
                    <p>团队业绩：￥500.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            containerList:[
                1,2,3,
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.team-performance-2{
    height: 100vh;
    background: #fff;
}
.img-wrap{
    @include w-h(1.28rem,1.28rem);
    border-radius: 50%;
    margin-right: 0.3rem;

    img{
        max-width: 100%;
        max-height: 100%;
    border-radius: 50%;

    }
}
.container-wrap{
    padding: 0 0.2rem;
}
.container{
    padding: 0.2rem;
    box-sizing: border-box;
    height: 1.8rem;
    background: #fff;
    @include border-bottom;
}
.num{
    padding: 0 0.33rem;
    height: 1rem;
    background: #F5F5F5;
    font-size: $fs28;
    font-weight: bold;
}
</style>

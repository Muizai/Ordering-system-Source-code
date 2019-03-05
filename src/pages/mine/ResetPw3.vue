<template>
    <div class="login-wrap df fdc ac">
        <div class="df fdc login">
            <input type="text" placeholder="新密码：">
            <input type="text" placeholder="确认新密码：">
        </div>
        <Toast btnText="确认" tipText="重置密码成功"></Toast>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .login-wrap{
        height: 100vh;
        background: #fff;
        .login{
            margin-top: 0.88rem;
        }
        input{
            @include w-h(6.3rem,0.8rem);
            border: 1px solid #DBDBDB;
            border-radius: 0.1rem;
            padding-left: 0.2rem;
            margin-bottom: 0.29rem;
            box-sizing: border-box;
        }
    }
    /deep/.bulletBox .bulletBox-btn{
        width: 6.3rem !important;
        height: 0.8rem !important;
        background: $red;
        color: #fff;
        border-radius: 0.04rem;
        margin-top:0.88rem;
    }

</style>

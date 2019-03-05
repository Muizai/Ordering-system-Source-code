<template>
    <div class="add-account df fdc ac ">
        <ul>
            <li class="df ac">
                <span>账户名</span>
                <input type="text" class="f1" placeholder="请输入你的支付宝账号名称">
            </li>
            <li class="df ac">
                <span>账户</span>
                <input type="text" class="f1" placeholder="请输入你的支付宝账号">
            </li>
        </ul>
        <div class="redBtn df ac jc">确认添加</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.add-account{
    ul{
        width: 100%;
        li{
            height: 1rem;
            background: #fff;
            border-bottom: 1px solid #EAEAEA;
            span{
                margin-left: 0.27rem;
                font-size: $fs30;
                color: #444;
                vertical-align: middle;
                width: 20%;

            }
            input{
                color: #C5C5C5;
                font-size: $fs30;
                vertical-align: middle;

            }
        }
    }
}

</style>

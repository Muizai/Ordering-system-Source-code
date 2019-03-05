<template>
    <div>
        <div v-for="n in 300">
            <span>站点{{n}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arr:300
        }
    }

}
</script>

<style>

</style>

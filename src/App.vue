<template>
  <div
    id="app"
  >

    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "App"
    };
  },
  beforeCreate() {
    if (this.$route.path === "/") {
      this.$router.push({ path: "/agent" });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

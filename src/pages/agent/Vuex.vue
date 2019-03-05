<template>
  <div>
    <p>{{countt}}</p>
    <p>{{counbb}}</p>
    <p>{{aa}}</p>

  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
        a:5
    };
  },
  mounted(){
      let arr=[1,2,3];
      let MapState =mapState({
          counta:'counta'
      });
      let json={
          'a':'json',
          ...MapState
      };

  },
  computed: mapState({
    countt: state => state.countt,
    counbb: "counbb",
    aa(state){
        return state.countt+this.a
    }
  })
};
</script>

<style>
</style>

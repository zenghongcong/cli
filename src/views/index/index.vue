<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png">
    <cube-button>Button</cube-button>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "index",
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="stylus">
.index {
  img {
    margin: 0 auto;
    width: 50%;
  }

  .cube-btn {
    border-radius: 20px;
  }
}
</style>



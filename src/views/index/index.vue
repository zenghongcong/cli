<template>
  <div class="index">
    <img alt="Vue logo" src="../../assets/logo.png">
    <cube-button>Button</cube-button>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  methods: {
    getList() {
      this.ajax({
        type: "get",
        url: "/asd/asd",
        data: {},
        loading: true
      });
    }
  },
  mounted() {
    this.$delay(5000).then(() => {
      this.getList();
    });
  }
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



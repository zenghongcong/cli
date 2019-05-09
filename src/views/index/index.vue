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
    setTimeout(() => {
      this.getList();
    }, 5000);
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



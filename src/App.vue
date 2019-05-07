<template>
  <div id="app">
    <router-view></router-view>
    <div v-show="$store.state.loading" class="loading">
      <cube-loading :size="48"></cube-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

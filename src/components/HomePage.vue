<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png"
           aria-hidden="true" alt=""
           class="robot">
    </div>
    <div class="get-started">
      <router-link :to="{name: 'Build'}" >Get started</router-link> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    height: 300px;
  }
</style>

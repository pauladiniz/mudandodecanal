<template>
  <div class="container">
    <div class="header">
      header
    </div>
    <section class="content">
      <post-box/>
    </section>
  </div>
</template>

<script>
import PostBox from '../components/PostBox.vue'

export default {
  components: {
    PostBox
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 40px;
  background-color: #dc8d80;
  color: #F7F3F0;
}
.content {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="container">
    <div class="header">
      <ul>
        <li>Home</li>
        <li>Sobre</li>
      </ul>
    </div>
    <section class="banner">
      <blog-banner/>
    </section>
    <div class="content">
      <section class="post">
        <post-box/>
      </section>
      <section class="sidebar">
        <blog-sidebar/>
      </section>
    </div>
  </div>
</template>

<script>
import BlogBanner from '../components/BlogBanner.vue'
import PostBox from '../components/PostBox.vue'
import BlogSidebar from '../components/BlogSidebar.vue'

export default {
  components: {
    BlogBanner,
    PostBox,
    BlogSidebar
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
.banner {
  margin: 50px 0;
}
.content {
  display: flex;
  justify-content: center;
}
.post {
  margin: 0 50px;
}
ul, li {
  list-style: none;
  display: flex;
  padding: 4px;
  font-size: 14px;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 300;
}
</style>

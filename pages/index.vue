<template>
  <div class="container">
    <section class="banner">
      <blog-banner/>
    </section>
    <div class="content">
      <section class="post">
        <post-box
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :description="post.excerpt"
        >
        </post-box>
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
import { getPosts } from '../services/ghost'

export default {
  components: {
    BlogBanner,
    PostBox,
    BlogSidebar
  },
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  }
}
</script>

<style>
.banner {
  margin: 50px 0;
}
.content {
  display: flex;
  justify-content: center;
}
.post {
  margin: 0 70px;
}
ul, li {
  list-style: none;
  display: flex;
  padding: 4px;
  font-size: 14px;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 400;
}
</style>

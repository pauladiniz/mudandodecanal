<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div class="content">
      <div v-html="post.html">{{ post.html }}</div>
    </div>
  </div>
</template>

<script>
import { getSinglePost } from '../../services/ghost';

export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    return { post: post }
  }
}
</script>
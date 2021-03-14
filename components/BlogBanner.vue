<template>
	<div class="blog-banner">
		<blog-logo/>
	</div>
</template>

<script>
import BlogLogo from '../components/BlogLogo.vue'

export default {
	components: {
		BlogLogo
	}
}
</script>

<style scoped>
.blog-banner {
	display: flex;
	justify-content: center;
	height: 500px;
}
</style>
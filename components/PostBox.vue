<template>
<div class="post-box">
	<div class="post-title">
		<h3 :title="title">{{ title }}</h3>
	</div>
	<div class="post-content">
		<p :description="description">{{ description }}</p>
	</div>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		description: {
			type: String
		}
	}
}
</script>

<style scoped>
.post-title {
	display: flex;
	width: 700px;
	align-items: center;
	height: 30px;
	font-size: 20px;
	font-family: 'Raleway';
	text-transform: uppercase;
	font-weight: 600;
}
.post-box {
	width: 700px;
	min-height: 350px;
}
.post-content {
	text-align: justify;
	color: #4E4E4E;
	font-family: 'Raleway';
}
p {
	margin-top: 20px;
	font-size: 14px;
}
</style>
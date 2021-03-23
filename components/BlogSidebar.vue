<template>
	<div class="blog-sidebar">
		<div class="sidebar-photo">
			<img src="../static/about-photo.jpg">
		</div>
		<div class="sidebar-description">
			<p>Oi, pessoal! Meu nome é Paula Diniz, tenho 27 anos e sou desenvolvedora front end.
			Resolvi criar um espaço pra compartilhar coisas que gosto,
			de filmes até uns pensamentos aleatórios!</p>
		</div>
	</div>
</template>

<style scoped>
.blog-sidebar {
	width: 400px;
	height: auto;
	display: flex;
	flex-direction: column;
}
.sidebar-photo > img {
	width: 250px;
	height: 250px;
	border: 8px solid #fff;
	border-radius: 50%;
}
p {
	text-align: justify;
	font-size: 14px;
	line-height: 1.4;
}
</style>
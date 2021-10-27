<template>
	<div>
		<router-view/>
	</div>

</template>

<style>

#app{
	position: relative;
	padding-bottom: 360px;
	min-height: 100vh;
}

body{
	margin: 0;
	font-family: 'Arimo', sans-serif!important;
}

:root{
	--verde: #256b4e;
}

a{
	text-decoration: none;
}

a:hover{
	text-decoration: underline;
	text-decoration-color: var(--verde);
}

h2, h5,h6{
	margin: 0!important;
}
.btn{
	background-color: var(--verde) !important;
}

.linha-titulo{
	padding-top: 35px;
}

</style>

<template>
	<div class="footer-dashboard">
		<div class="inf-footer">
			<h6>Desenvolvido por Varlei De Cesare</h6>&nbsp;
			<a href="https://github.com/VarleiDeCesare"><i class="fab fa-github fa-lg hvr-float"></i></a>
			<a href="https://www.instagram.com/varlei_cesare/"><i class="fab fa-instagram fa-lg hvr-float"></i></a>
			<a href="https://wa.me/5554991091980"><i class="fab fa-whatsapp fa-lg hvr-float"></i></a>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
			<path fill="#1C513B" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,197.3C560,192,640,192,720,192C800,192,880,192,960,208C1040,224,1120,256,1200,250.7C1280,255,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
		</svg>
	</div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

.footer-dashboard{
	position: absolute;
	bottom: 0;
	width: 100%;
	left: 0;
	z-index: 9;
}

.inf-footer{
	position: absolute;
	bottom: 15px;
	left: 0;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.inf-footer a{
	margin: 0 5px;
	color: white;
}

</style>
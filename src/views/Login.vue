<template>
	<div id="page-login">
		<div id="formulario-login">
			<i class="fas fa-tractor fa-3x"></i>
			<h2>AgroTehc</h2>
			<div id="div-form-son">
				<h5>E-mail</h5>
				<input type="text" placeholder="ex: joao@exemplo.com">
				<h5>Senha</h5>
				<input type="text" placeholder="No mínimo 8 caracteres.">
				<button id="enviar-login" @click="login()">Enviar</button>
				<div class="d-flex justify-content-end align-items-center link-cadastrar">
					<h6>Não tem conta?&nbsp;</h6><a href="/">Cadastre-se</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import router from "@/router";
import Dashboard from "@/views/Dashboard";

export default {
	name: "Login.",

	data(){
		return {}
	},
	created() {

	},
	methods:{
		login(){
			router.push(Dashboard)
		}
	}

}
</script>

<style scoped>

#page-login{
	overflow: hidden;
	width: 100%;
	height: 100vh;
	background-image: url("../assets/fundologin.jpg");
	position: relative;
	background-size: cover;
	background-position: 100% auto;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
}

#formulario-login{
	text-align: center;
	width: 530px;
	height: 440px;
	background-color: white;

	border-radius: 5%;
	color: var(--verde);
}

#formulario-login i{
	margin: 35px 0 5px 0;
}

#formulario-login h2{

	color: #25674e;
}

#div-form-son{
	margin-top: 40px;
	opacity: 1;
}

#div-form-son input::placeholder{
	color: #fff;
	opacity: 0.4;
}


#div-form-son input{
	margin-bottom: 15px;
	width: 61%;
	border: none;
	border-radius: 20px;
	height: 39px;
	background-color: var(--verde);
	padding-left: 25px;
	color: white;
	outline: none;
}

#enviar-login{
	margin-top: 8px!important;
	width: 40%!important;
	height: 45px!important;
	border-radius: 30px!important;
	color: white;
	font-weight: 700;
	font-size: 20px;
	padding: 0!important;
	background-color: var(--verde);
	border: none;
}

#enviar-login:hover{
	background-color: #194432!important;
}

.link-cadastrar h6{
	margin: 0;
}

.link-cadastrar{
	margin: 10px 20px 0 0;
}

.link-cadastrar a{
	text-decoration: none;
	color: var(--verde) !important;
	font-weight: 700;
	font-size: 17px;
}

.link-cadastrar a:hover{
	text-decoration: underline;
}
</style>
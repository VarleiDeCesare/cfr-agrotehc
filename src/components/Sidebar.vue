<template>
	<div>
		<div id="mySidebar" class="sidebar">
			<div id="aux-sidebar">
				<button class="closebtn hvr-float" @click="closeNav()"><i class="fas fa-times"></i></button>
				<div class="links-sidebar">
					<router-link
						to="/lavouras" class="hvr-float">
						<i class="fas fa-hat-cowboy"></i> Lavouras</router-link>
					<router-link
						to="/newproduct" class="hvr-float">
						<i class="fas fa-folder-plus"></i> Novo Produto
					</router-link>
					<router-link
						to="/user/1" class="hvr-float">
						<i class="fas fa-user"></i> Editar Perfil
					</router-link><router-link
						to="/login" class="hvr-float">
					<i class="fas fa-sign-out-alt"></i> Sair
					</router-link>
				</div>
			</div>
		</div>
		<div id="main">
			<button class="openbtn hvr-float" @click="openNav()"><i class="fas fa-bars fa-lg"></i></button>
		</div>
	</div>
</template>

<script>

export default {
	name: "Sidebar",
	data(){
		return {}
	},

	methods:{
		openNav() {
			document.getElementById("mySidebar").style.width = "200px";
			document.getElementById("main").style.marginLeft = "200px";
		},
		closeNav() {
			document.getElementById("mySidebar").style.width = "0";
			document.getElementById("main").style.marginLeft= "0";
		}
	}
}

</script>

<style scoped>
.sidebar {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #1C513B;
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
}

.sidebar a {
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 18px;
	color: #fff;
	display: block;
	transition: 0.3s;
}

#aux-sidebar{
	margin-top: -30px;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
}

#aux-sidebar .links-sidebar{
	margin-top: 70px;
}

#aux-sidebar button{
	position: absolute;
	top: 0;
	right: 25px;
}

.sidebar .closebtn {
	position: relative;
	font-size: 36px;
	background-color: transparent;
	border: none;
}

.sidebar i{
	color: white;
}

.openbtn {
	font-size: 20px;
	cursor: pointer;
	background-color: transparent;
	color: #256B4E;
	padding: 10px 15px;
	border: none;
	border-radius: 20%;
}

#main button{
	position: fixed;
	top: 30px;
	left: 78px;
	margin-left: 50px;
}

@media screen and (max-height: 450px) {
	.sidebar {padding-top: 15px;}
	.sidebar a {font-size: 18px;}
}

</style>
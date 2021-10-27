<template>
	<div id="page-lavouras">
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row linha-titulo">
				<div class="col">
					<h3 class="text-center mb-3">Lavouras</h3>
				</div>
			</div>
			<div class="row second-row">
				<div class="col">
					<div class="row">
						<div class="col d-flex justify-content-center">
							<div class="row">
								<div v-for="lavoura in this.lavouras" class="col-4 mt-3 hvr-float-shadow">
									<div class="card">
										<img class="card-img-top" src="../../assets/lavouraz.jpg" alt="Card image cap">
										<div class="card-body">
											<h5 class="card-title">{{ lavoura.nome }}</h5>
											<p class="card-text">{{ lavoura.desc }}</p>
											<div class="links-safras text-center">
												<a class="hvr-shrink" v-for="safra in lavoura.safras" :href="`/lavouras/${lavoura.id}/safras/${safra.id}`">
													{{ safra.ano }}
												</a>
											</div>
											<div class="d-flex justify-content-center mt-3 nova-safra">
												<a :href="`/lavouras/${lavoura.id}/safras/create`" class="d-flex align-items-center">
													<i class="fas fa-plus"></i>
													<h6> Adicionar Safra</h6>
												</a>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row linha-nova-lavoura">
				<div class="col d-flex justify-content-center">
					<a class="btn btn-primary" href="/lavouras/create">
						<i class="fas fa-plus-circle"></i>
						Nova lavoura
					</a>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default {
	data() {
		return {
			lavouras: [
				{
					id: 1,
					nome: "lavora x",
					desc: "descricao da lavoura x",
					safras: [
						{
							id: 1,
							ano: "2020-2021"
						}
					]
				},
				{
					id: 2,
					nome: "lavora y",
					desc: "descricao da lavoura y",
					safras: [
						{
							id: 5,
							ano: "2019-2020"
						},
						{
							id: 6,
							ano: "2020-2021"
						},
						{
							id: 7,
							ano: "2021-2022"
						}
					]
				},
				{
					id: 3,
					nome: "lavora z",
					desc: "descricao da lavoura z",
					safras: [
						{
							id: 8,
							ano: "2019-2020"
						},
						{
							id: 9,
							ano: "2020-2021"
						},
					]
				}
			],
		}
	},
	name: "Index",
	components: {Footer, Sidebar}
}

</script>

<style scoped>

.nova-safra a {
	color: var(--verde) !important;
	text-decoration: none;
}

.nova-safra a:hover {
	text-decoration: none;
	color: #194432;
}


.second-row .card-body {
	padding: 0.5rem 1rem 1rem 1rem;
}

.links-safras a {
	color: #fff;
	padding: 5px;
	font-size: 14px;
	background-color: #256B4E;
	margin: 0 3px;
	text-decoration: none;
	border-radius: 5px;
}

.second-row {
	margin-top: 80px;
}

.third-row {
	margin-top: 50px;
}

.card a h5,
.card a p {
	color: black;
}

.second-row .card {
	border-radius: 1rem;
	min-height: 320px;
}

.second-row .card h5 {
	margin-bottom: 6px;
}

.second-row .card-img-top {
	border-radius: 1rem 1rem 0 0;
	height: 210px;
}

.third-row .card {
	height: 150px;
}

#page-dashboard {
	background-color: var(--verde);
	color: white;
}

.card-body h5 {
	margin-right: 5px;
}

.third-row .titulo-card {
	color: #205B43;
	justify-content: center;
	text-align: center;
	margin-bottom: 20px;
}

.linha-nova-lavoura a{
	color: white;
	margin-top: 40px;
}
</style>
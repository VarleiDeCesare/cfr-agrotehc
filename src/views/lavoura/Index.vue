<template>
	<div>
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row second-row">
				<div class="col">
					<div class="row">
						<h3 class="text-center mb-3">Lavouras</h3>
						<div class="col d-flex justify-content-center">
							<div class="row">

								<div class="col-4 mt-3 hvr-float-shadow">
									<div class="card">
										<router-link to="#">
											<img class="card-img-top" src="../../assets/lavourax.jpg" alt="Card image cap">
											<div class="card-body">
												<h5 class="card-title">Lavoura X</h5>
												<p class="card-text">Lavoura próximo à cidade de Putinga</p>
											</div>
										</router-link>
									</div>
								</div>

								<div class="col-4 mt-3 hvr-float-shadow">
									<div class="card">
										<router-link
											to="/#">
											<img class="card-img-top" src="../../assets/lavouray.jpg" alt="Card image cap">
											<div class="card-body">
												<h5 class="card-title">Lavoura Y</h5>
												<p class="card-text">Lavoura em Anta Gorda</p>
											</div>
										</router-link>
									</div>
								</div>

								<div class="col-4 mt-3 hvr-float-shadow">
									<div class="card">
										<router-link
											:to='{path: `/lavouras/${this.id}`,  params: {lavoura: "1"}}'>
											<img class="card-img-top" src="../../assets/lavouraz.jpg" alt="Card image cap">
											<div class="card-body">
												<h5 class="card-title">Lavoura Z</h5>
												<p class="card-text">Lavoura lá em Mato Castelhano, Lavoura do Cleiton</p>
											</div>
										</router-link>
									</div>
								</div>

							</div>
						</div>
					</div>
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
	data(){
		return {
			id: 1,
			name: 'claudio seila'
		}
	},
	name: "Index",
	components: {Footer, Sidebar}
}

</script>

<style scoped>
.second-row .card-body {
	padding: 0.5rem 1rem 1rem 1rem;
}

.second-row{
	margin-top: 80px;
}


.third-row{
	margin-top: 50px;
}

.card a h5,
.card a p{
	color: black;
}

.second-row .card{
	border-radius: 1rem;
	height: 320px;
}

.second-row .card h5{
	margin-bottom: 6px;
}

.second-row .card-img-top{
	border-radius: 1rem 1rem 0 0;
	height: 210px;
}

.third-row .card{
	height: 150px;
}

#page-dashboard{
	min-height: 100vh;
	background-color: var(--verde);
	color: white;
}

.card-body h5{
	margin-right: 5px;
}

.third-row .titulo-card{
	color: #205B43;
	justify-content: center;
	text-align: center;
	margin-bottom: 20px;
}

</style>
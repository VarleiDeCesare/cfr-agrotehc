<template>
	<div id="page-safra">
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row linha-titulo">
				<div class="col d-flex justify-content-center">
					<h4>Edite atributos da Safra</h4>
				</div>
			</div>
			<div class="row">
				<div class="col">
					nn sei mais oq fazer aqui to perdido vo me mata
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
	name: "View",
	components: {Footer, Sidebar},
	data(){
		return {
			safra:{

			}
		}

	}
}

</script>
<style scoped>
#page-safra{
	min-height: 47.7vh;
}
</style>
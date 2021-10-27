<template>
	<div>
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row linha-titulo">
				<div class="col d-flex justify-content-center">
					<h3 style="color: var(--verde)">Adicione uma nova Safra</h3>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col">
					<div class="form-row">
						<div class="form-group col-md-4">
							<label>Ano Safra</label> <select class="form-control">
							<option>Escolha...</option>
							<option>2021-2022</option>
							<option>2020-2021</option>
							<option>2019-2020</option>
							<option>2018-2019</option>
							<option>2017-2018</option>
							<option>2016-2017</option>
							<option>2015-2016</option>
							<option>2014-2015</option>
							<option>2013-2014</option>
							<option>2012-2013</option>
						</select>
						</div>
						<div class="form-group col-md-6">
							<label>Descrição</label>
							<textarea class="form-control" rows="3"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="row linha-produtos-safra">
				<div class="col d-flex align-items-center flex-column">
					<h4 style="color: var(--verde)">Anexe produtos usados nessa safra</h4>
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
	name: "Create",
	components: {Footer, Sidebar},
	data() {
		return {
		}
	}
}

</script>
<style scoped>

.linha-produtos-safra{
	margin-top: 40px;
}

</style>
<template>
	<div id="page-lavoura">
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row d-flex justify-content-center linha-titulo">
				<div class="col">
					<h4 class="text-center titulo-lavoura">Edite os dados da Lavoura</h4>
				</div>
			</div>
			<div class="row edicao-lavoura">
				<div class="col">
					<div class="form-row d-flex justify-content-between">
						<div class="form-group col-md-5">
							<label for="inputEmail4">Nome da Lavoura</label>
							<input type="email" class="form-control" id="inputEmail4" placeholder="Nome Lavoura">
						</div>
						<div class="form-group col-md-5">
							<label for="inputAddress">Localização</label>
							<input type="text" class="form-control" id="inputAddress" placeholder="Cidade">
						</div>
					</div>
					<div class="form-row d-flex justify-content-between">
						<div class="form-group col-md-5">
							<label for="exampleFormControlTextarea1">Descrição/Observações da Lavoura</label>
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>
						<div class="form-group col-md-5">
							<label for="inputAddress2">Complemento</label>
							<input type="text" class="form-control" id="inputAddress2" placeholder="Complemento para a localização">
						</div>
					</div>
					<div class="form-row d-flex justify-content-center">
						<button type="submit" class="btn btn-primary salva-edicao">Salvar</button>
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
	name: "View",
	components: {Footer, Sidebar},
}

</script>

<style scoped>

.titulo-lavoura {
	margin-bottom: 20px;
}

.safra-lavoura-botao {
	margin: 0 10px;
	background-color: var(--verde);
}

.safra-lavoura-botao:hover {
	background-color: #1B4E39;
}

.edicao-lavoura {
	margin-top: 40px;
}

.salva-edicao {
	border: none;
	background-color: #194432;
	margin-top: 20px;
}


</style>
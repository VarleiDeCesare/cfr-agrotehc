<template>
	<div>
		<Sidebar></Sidebar>
		<div class="container">
			<div class="row linha-titulo">
				<div class="col d-flex justify-content-center">
					<h4>Edite seu perfil</h4>
				</div>
			</div>
			<div class="row formulário">
				<div class="col">
					<div class="form-row d-flex justify-content-between">
						<div class="form-group col-md-5">
							<label>CPF</label> <input type="text" class="form-control" placeholder="Seu CPF">
						</div>
						<!--						<div class="form-group col-md-6">-->
						<!--							<label>CNPJ</label>-->
						<!--							<input type="text" class="form-control" placeholder="CNPJ da sua empresa">-->
						<!--						</div>-->
						<div class="form-group col-md-5">
							<label>Nome Completo</label>
							<input type="text" class="form-control" placeholder="Nome completo">
						</div>
					</div>
					<div class="form-row d-flex justify-content-between">
						<div class="form-group col-md-4">
							<label>E-mail</label> <input type="email" class="form-control" placeholder="Seu E-mail">
						</div>
						<div class="form-group col-md-4">
							<label>Endereço</label> <input type="text" class="form-control">
						</div>
						<div class="form-group">
							<label>Cidade</label> <select class="form-control">
							<option selected>São Paulo</option>
							<option>Água Santa</option>
							<option>Tapejara</option>
						</select>
						</div>
					</div>
					<div class="form-row d-flex justify-content-between align-items-center">
						<div class="form-group col-md-5">
							<label>CEP</label>
							<input type="text" class="form-control" placeholder="Cep do seu endereço">
						</div>
						<div class="form-group col-md-5">
							<label>Senha</label>
							<input type="password" class="form-control" placeholder="Senha, será usada para o login no sistema">
						</div>
						<div>
							<button type="submit" class="btn btn-primary salva-user">Salvar</button>
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
	name: "Edit",
	components: {Footer, Sidebar}
}
</script>

<style scoped>
.form-row{
	margin-top: 15px;
}

.salva-user{
	margin-top: 24px;
}

.formulário{
	margin-top: 100px;
}
</style>
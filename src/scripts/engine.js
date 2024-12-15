function classificarHeroi() {
	const nome = document.getElementById("heroName").value;
	const xp = parseInt(document.getElementById("heroXP").value);
	const modalResultadoTexto = document.getElementById("modalResultadoTexto");
    const modalResultadoImagem = document.getElementById("modalResultadoImagem");
    const modal = document.getElementById("modal");

	if (!nome || isNaN(xp)) {
		alert("Por favor, insira o nome e o XP do herói.");
        return;
	}

	let nivel = "";
	let imagem = "";

	if (xp < 1000) {
		nivel = "Ferro";
		imagem = "./src/assets/iron.png";
	} else if (xp <= 2000) {
		nivel = "Bronze";
		imagem = "./src/assets/bronze.png";
	} else if (xp <= 5000) {
		nivel = "Prata";
		imagem = "./src/assets/silver.png";
	} else if (xp <= 7000) {
		nivel = "Ouro";
		imagem = "./src/assets/gold.png";
	} else if (xp <= 8000) {
		nivel = "Platina";
		imagem = "./src/assets/platinum.png";
	} else if (xp <= 9000) {
		nivel = "Ascendente";
		imagem = "./src/assets/ascendant.png";
	} else if (xp <= 10000) {
		nivel = "Imortal";
		imagem = "./src/assets/immortal.png";
	} else {
		nivel = "Radiante";
		imagem = "./src/assets/radiant.png";
	}

	modalResultadoTexto.textContent = `O Herói de nome ${nome} está no nível de ${nivel}!`;
    modalResultadoImagem.src = imagem;
    modalResultadoImagem.alt = nivel;
    modal.classList.remove("hidden");
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");

    document.getElementById("heroName").value = "";
	document.getElementById("heroXP").value = "";
}

const quadros = document.querySelectorAll(".quadro");
const nome = document.querySelector(".nome");
const imagem = document.querySelector(".foto");
const descricao = document.querySelector(".sobre");

quadros.forEach((quadro) => {
  const persornagem = quadro.getAttribute("data-tipo");

  quadro.addEventListener("click", function () {
    switch (persornagem) {
      case "Akame":
        nome.innerHTML = "Akame";
        imagem.src = "assets/fotos/Akame.jpg";
        descricao.innerHTML =
          "he printpe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Bulat":
        nome.innerHTML = "Bulat";
        imagem.src = "assets/fotos/bulat.jpg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Chelsea":
        nome.innerHTML = "Chelsea";
        imagem.src = "assets/fotos/chelsea.jpg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Leone":
        nome.innerHTML = "Leone";
        imagem.src = "assets/fotos/leone.jpg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Lubbok":
        nome.innerHTML = "Lubbok";
        imagem.src = "assets/fotos/lubbok.png";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Mine":
        nome.innerHTML = "Mine";
        imagem.src = "assets/fotos/mine.jpeg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Najenda":
        nome.innerHTML = "Najenda";
        imagem.src = "assets/fotos/Najenda.webp";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Sheele":
        nome.innerHTML = "Sheele";
        imagem.src = "assets/fotos/sheele.jpg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Susanoo":
        nome.innerHTML = "Susanoo";
        imagem.src = "assets/fotos/susano.jpg";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
      case "Tatsumi":
        nome.innerHTML = "Tatsumi";
        imagem.src = "assets/fotos/Tatsumi.webp";
        descricao.innerHTML =
          "he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise";
        break;
    }
  });
});

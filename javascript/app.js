const botoes = document.querySelectorAll(".add-cart");


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


const mensagem = document.createElement("div");
mensagem.style.position = "fixed";
mensagem.style.bottom = "20px";
mensagem.style.right = "20px";
mensagem.style.background = "#4CAF50";
mensagem.style.color = "#fff";
mensagem.style.padding = "10px 15px";
mensagem.style.borderRadius = "5px";
mensagem.style.display = "none";
mensagem.style.zIndex = "1000";
mensagem.innerText = "Produto adicionado ao carrinho";

document.body.appendChild(mensagem);


function mostrarMensagem() {
  mensagem.style.display = "block";
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 2000);
}


botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const produto = botao.closest(".product-card");

    const nome = produto.querySelector(".product-name").innerText;
    const preco = produto.querySelector(".price").innerText;

    const item = {
      nome: nome,
      preco: preco
    };

    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarMensagem();
  });
});

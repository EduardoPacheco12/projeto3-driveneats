// Selecionar Itens
function selecionarComida(comida) {
    let comidaSelecionada = document.querySelector(".opcoes-um .selecionado");
    let checkComida= document.querySelector(".opcoes-um .selecionado ion-icon");
    if (comidaSelecionada !== null) {
       comidaSelecionada.classList.remove("selecionado");
       checkComida.classList.add("escondido");
    }
    comida.classList.add("selecionado");
    aparecerCheckComida();
    aparecerFinalizar();
}
function aparecerCheckComida() {
    let checkComida= document.querySelector(".opcoes-um .selecionado ion-icon");
    checkComida.classList.remove("escondido");
}

function selecionarBebida(bebida) {
    let bebidaSelecionada = document.querySelector(".opcoes-dois .selecionado");
    let checkBebida = document.querySelector(".opcoes-dois .selecionado ion-icon");
    if (bebidaSelecionada !== null) {
       bebidaSelecionada.classList.remove("selecionado");
       checkBebida.classList.add("escondido");
    }
    bebida.classList.add("selecionado");
    aparecerCheckBebida();
    aparecerFinalizar();
}
function aparecerCheckBebida() {
    let checkBebida = document.querySelector(".opcoes-dois .selecionado ion-icon");
    checkBebida.classList.remove("escondido");
}

function selecionarSobremesa(sobremesa) {
    let sobremesaSelecionada = document.querySelector(".opcoes-tres .selecionado");
    let checkSobremesa= document.querySelector(".opcoes-tres .selecionado ion-icon");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
        checkSobremesa.classList.add("escondido");
        
    }
    sobremesa.classList.add("selecionado");
    aparecerCheckSobremesa();
    aparecerFinalizar();
}
function aparecerCheckSobremesa() {
    let checkSobremesa= document.querySelector(".opcoes-tres .selecionado ion-icon");
    checkSobremesa.classList.remove("escondido");
}

// Validação de itens selecionados
function aparecerFinalizar() {
    let verificacaoComida = document.querySelector(".opcoes-um .selecionado");
    let verificacaoBebida = document.querySelector(".opcoes-dois .selecionado");
    let verificacaoSobremesa = document.querySelector(".opcoes-tres .selecionado");
    if (verificacaoComida !== null && verificacaoBebida !== null && verificacaoSobremesa !== null) {
        document.querySelector(".aguardando-pedido").classList.add("escondido");
        document.querySelector(".pedido-pronto").classList.remove("escondido");
    }
}

// Finalizar pedido
function finalizarPedido() {
    let pratoAdicionado = document.querySelector(".selecionado .titulo-comida")
    pratoAdicionado = pratoAdicionado.innerHTML
    let bebidaAdicionada = document.querySelector(".selecionado .titulo-bebida")
    bebidaAdicionada = bebidaAdicionada.innerHTML
    let sobremesaAdicionada = document.querySelector(".selecionado .titulo-sobremesa")
    sobremesaAdicionada = sobremesaAdicionada.innerHTML
    somarValor();
    const mensagemFinal =  `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoAdicionado}\n- Bebida: ${bebidaAdicionada}\n- Sobremesa: ${sobremesaAdicionada}\nTotal: R$ ${valorTotal}`;
    const code= encodeURIComponent(mensagemFinal);
    window.open(`https://wa.me/5564996023292?text=${code}`);
}

function somarValor() {
    let valorPrato = document.querySelector(".selecionado .preco-comida");
    valorPrato = valorPrato.innerHTML;
    valorPrato = valorPrato.substr(3,4,5,6,7);
    valorPrato = valorPrato.replace(",",".");
    valorPrato = Number(valorPrato);
    console.log(valorPrato);

    let valorBebida = document.querySelector(".selecionado .preco-bebida");
    valorBebida = valorBebida.innerHTML;
    valorBebida = valorBebida.substr(3,4,5,6);
    valorBebida = valorBebida.replace(",",".");
    valorBebida = Number(valorBebida);
    console.log(valorBebida);
    
    let valorSobremesa = document.querySelector(".selecionado .preco-sobremesa");
    valorSobremesa = valorSobremesa.innerHTML;
    valorSobremesa = valorSobremesa.substr(3,4,5,6,7);
    valorSobremesa = valorSobremesa.replace(",",".");
    valorSobremesa = Number(valorSobremesa);
    console.log(valorSobremesa);

    let valor = valorPrato + valorBebida + valorSobremesa;
    valorTotal = valor.toFixed(2);
    console.log(valorTotal);
}

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
    alert("Tamo quase terminando :)");
}

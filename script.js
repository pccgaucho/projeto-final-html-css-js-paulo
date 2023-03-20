window.addEventListener("load", aoCarregar);

function aoCarregar() {
    const botao = document.getElementById("btn");
    document.getElementById("envio").style.display = "none"
    document.getElementById("retorno").style.display = "none"    
    botao.addEventListener("click", enviar);
}

async function enviar() {
    let dados
    let validacao = false
    do {
        dados = pegarDados()
        validacao = validar(dados)
    } while (validacao = false)
    let retornoDaAPI = await enviarDadosAPI(dados)
    let pegarDadosRetornados = pegarDadosRetorno(retornoDaAPI)
    escreverRetornoAPI(pegarDadosRetornados)
    limparCampos()
}

function pegarDados() {
    const elementoNome = document.getElementById("input_nome")
    const nome = elementoNome.value
    const elementoEmail = document.getElementById("input_email")
    const email = elementoEmail.value
    const elementoTexto = document.getElementById("texto_area")
    const mensagem = elementoTexto.value
    let retorno = Array(3)
    retorno[0] = nome
    retorno[1] = email
    retorno[2] = mensagem
    return retorno
}

/*
function escrever(texto) {
    console.log(texto)
}
*/

async function enviarDadosAPI(dados) {
    const url = "https://target-api-simples.cyclic.app/generica"
    const opcoesFetch = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: dados[0],
            email: dados[1],
            mensagem: dados[2]
        })
    }
    const resposta = await fetch(url, opcoesFetch)
    const retornoApi = await resposta.json()
    return retornoApi
}

function pegarDadosRetorno(retornoDaAPI) {
    let passagem = Array(4)
    passagem[0] = retornoDaAPI.mensagem
    passagem[1] = retornoDaAPI.apiRecebeu.nome
    passagem[2] = retornoDaAPI.apiRecebeu.email
    passagem[3] = retornoDaAPI.apiRecebeu.mensagem
    return passagem
}

function escreverRetornoAPI(escrita) {
    document.getElementById("envio").style.display = "block"
    document.getElementById("retorno").style.display = "block"
    document.getElementById("mensagem_retorno").innerText = escrita[0]
    document.getElementById("nome_retornado").innerText = "Nome: " + escrita[1]
    document.getElementById("email_retornado").innerText = "E-mail: " + escrita[2]
    document.getElementById("mensagem_retornada").innerText = "Mensagem: " + escrita[3]
}

function limparCampos() {
    document.getElementById("input_nome").value = ""
    document.getElementById("input_email").value = ""
    document.getElementById("texto_area").value = ""
}

function validar (dados) {
    if (dados[0] == "") {
        alert("Nome é obrigatório!")
        document.getElementById("input_nome").focus()
    }
    if (dados[1] == "") {
        alert("Email é obrigatório!")
        document.getElementById("input_email").focus()
    }
    if (dados[2] == "") {
        alert("Mensagem é obrigatória!")
        ocument.getElementById("texto_area").focus()
    }
    if (dados[0] != "" && dados[1] != "" && dados != "") {
        return true
    }
}
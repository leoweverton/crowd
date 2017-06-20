function abrirModalCadastro() {
    var msgErro = $(".msg-validacao-erro span");
    msgErro.text("");
    msgErro.parent().hide();
    $("input[name=txt-email-cadastro").focus();
}

function abrirModalLogin() {
    /*var msgErro = $(".msg-validacao-erro span");
    msgErro.text("");
    msgErro.parent().toggle();*/
    $("input[name=txt-email-login").focus();
}
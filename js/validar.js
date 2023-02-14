// Validação de Campos do Formulário

function ValidarFormulario(){
    var nome = formulario.nome;
    var email = formulario.email;
    var ass = formulario.ass;
    var msg = formulario.msg;

    if(nome.value == ""){
        alert("Preencher o camo obrigatório Nome!");
        nome.focus();
        return false;
    }

    if(email.value == ""){
        alert("Preencher o camo obrigatório E-mail!");
        email.focus();
        return false;
    }

    if(ass.value == ""){
        alert("Preencher o camo obrigatório Assunto!");
        ass.focus();
        return false;
    }

    if(msg.value == ""){
        alert("Preencher o camo obrigatório Mensagem!");
        msg.focus();
        return false;
    }
}
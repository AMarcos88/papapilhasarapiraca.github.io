function validar(){
    var nome = form.nome.value;
    var email = form.email.value;
    var sexo = form.sexo.value;
    var logradouro = form.rua.value;
    var numero = form.numero.value;
    var bairro = form.bairro.value;
    var estado = form.bairro.value;
    var cidade = form.cidade.value;

    if (nome == ""){
        alert("Nome não informado!");
        form.nome.focus();
        return false;
    }

    if (email == ""){
        alert("Email não informado!");
        form.email.focus();
        return false;
    }

    if (sexo == ""){
        alert("Sexo não informado!");
        form.sexo.focus();
        return false;
    }

    if (logradouro == ""){
        alert("Endereço não informado!");
        form.logradouro.focus();
        return false;
    }

    if (numero == ""){
        alert("Numero não informado!");
        form.numero.focus();
        return false;
    }

    if (bairro == ""){
        alert("Bairro não informado!");
        form.bairro.focus();
        return false;
    }

    if (cidade == ""){
        alert("Cidade não informada!");
        form.cidade.focus();
        return false
    }

    if (estado == ""){
        alert("Estado não informado!");
        form.estado.focus();
        return false;
    }
}

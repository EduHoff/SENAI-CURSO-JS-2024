

function verificarCampos(){
    const userNome = document.getElementById("userNome").value
    const userEmail = document.getElementById("userEmail").value
    const userMensagem = document.getElementById("userMensagem").value

    if(userNome === "" || userEmail === "" || userMensagem === ""){
        document.getElementById('btnEnviar').disabled = true
    }else{
        document.getElementById('btnEnviar').disabled = false
    }

    if (!userEmail.includes("@") || !userEmail.includes(".com")) {
        //document.getElementById('btnEnviar').disabled = true
        document.getElementById('btnEnviar').disabled = true
    }

    const nomeValido = /^[A-Za-z\s]+$/.test(userNome);
    if (!nomeValido) {
        document.getElementById('btnEnviar').disabled = true;
    }

    if (userMensagem.length < 20 || userMensagem.length > 500) {
        document.getElementById('btnEnviar').disabled = true;
    }
    
}

function totalCaractere(){
    const userMensagem = document.getElementById("userMensagem").value;
    const total = userMensagem.length;
    document.getElementById("totalCaractere").textContent = total;


    if(userMensagem.length < 20 || userMensagem.length > 500){
        document.getElementById("totalCaractere").style.color = "red";
    }else{
        document.getElementById("totalCaractere").style.color = "black";
    }
}

function bntBotao(){
    alert("Mensagem enviada!")

    document.getElementById("userNome").value = ""
    document.getElementById("userEmail").value = ""
    document.getElementById("userMensagem").value = ""
    document.getElementById("totalCaractere").innerHTML = "0"

}
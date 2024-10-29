function validarLogin(){


    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value
    const senhaRegex = new RegExp(/[!@#$%^&*(),.?":{}|<>]/)
    const emailRegex = new RegExp(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)


        
    

    if(!(emailRegex.test(usuario))){
        alert("Formato do email inválido!")
        return false
    }

    if(usuario === "" || senha === ""){
        alert("Todos os campos precisam ser preenchidos!")
        return false
    }

    if(senha.length < 8){
        alert("Senha precisa ter pelo menos 8 digitos!")
        return false
    }

    if(!(senhaRegex.test(senha))){
        alert("Senha precisa ter pelo menos um caractere especial!")
        return false
    }
    
/*
    fetch('/usuario.json',{
        method: 'POST',
        headers:{
            'content-Type': 'application/json'
        };
        body: JSON.stringify({usuario, senha})
    })
    .then(response =>{
        if(response.ok){
            (window.location.herf = 'home.html')
        }else{
            alert('Login inválido')
        })
        .catch(erro =>{
            console.error('Erro ao fazer logi:', error)
        })
    })

    */

    alert("Funciona!")
    console.log("Deu certo!")
    return false
    
}
document.addEventListener('submit',(event)=> {
    
    // Previne o envio dos dados do Formulario
    event.preventDefault();

    // Captura a senha do usuario
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let senhacon = document.getElementById('senhacon').value

    if(senha != senhacon){
        Swal.fire({
            title: "Atenção",
            text: "Verifique as senha, não conferem!",
            icon: "warning"
          });

        return
    }

    // Envio dos dados do form de cadastro para o backend PHP usando JS(Fetch/Ajax)
    fetch('backend/cadastrar-usuario.php',{
        method: 'POST',
        body: `nome=${nome}&email=${email}&senha=${senha}`,
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })

    
})

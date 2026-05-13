const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  // 1. Pega os campos
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const nome = document.getElementById("nome").value;

  // 2. Valida os dados
  if (email === '' || senha === '' || nome === '') {
    alert('Por favor, preencha todos os campos.');
    
    // 3. Bloqueia o envio
    event.preventDefault(); 
    return;
  }

  if (!email.includes('@')) {
    alert('E-mail inválido.');
    event.preventDefault();
    return;
  }
  if(!senha.includes( || '0' || '1' || '2' || '3'
  || '4' || '5' || '6' || '7' || '8' || '9')){
    alert('A senha precisa ter números');
    event.preventDefault();
    return;
  }

  // Se chegar aqui, o envio prossegue
  console.log('Formulário enviado com sucesso!');
});
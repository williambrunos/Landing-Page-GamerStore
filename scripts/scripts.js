const addLeadForm = document.querySelector("#lead-form");
let clients = JSON.parse(localStorage.getItem("clients")) || [];

// Listener de eventos do forms do tipo "submit"
addLeadForm.addEventListener("submit", (e) => {
  // Previne a reinicialização da página após enviar o formulário
  e.preventDefault();

  const inputNameValue = document.querySelector("#name").value;
  const inputEmailValue = document.querySelector("#email").value;
  // Retorna a sigla de cada estado
  const inputStateValue = document.querySelector("#state-select").value;
  const experienceText = document.querySelector("#experience").value;
  // Como conseguir o valo marcado nos radio buttons?

  // Criação de um objeto client a ser adicionado no array clients
  const client = {
    name: inputNameValue,
    email: inputEmailValue,
    estado: inputStateValue,
    // Como consertar o bug do textarea começar lá na frente?
    experiência: experienceText === "                " ? "Sem comentários":experienceText,
  };

  // Verifica se o client a ser cadastrado já existe no array de clients, utilizando
  // o e-mail como chave
  const alreadyRegistered = clients.some(c => c.email === client.email);

  if(!alreadyRegistered) {
    // Se não estiver cadastrado, adicionamos o client em clients e no local storage
    clients.push(client);
    localStorage.setItem("clients", JSON.stringify(clients));
    alert("Cliente cadastrado com sucesso!");
  } else {
    // Se não, avisamos que o cliente com aquele e-mail já está cadastrado
    alert("Cliente com esse e-mail já cadastrado!");
  }
});
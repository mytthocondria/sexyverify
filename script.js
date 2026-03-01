let contas = JSON.parse(localStorage.getItem("contas")) || [];
const tabela = document.getElementById("tabela");

function salvar() {
  localStorage.setItem("contas", JSON.stringify(contas));
}

function render() {
  tabela.innerHTML = "";
  contas.forEach((conta, i) => {
    tabela.innerHTML += `
      <tr>
        <td>${conta.usuario}</td>
        <td>${conta.status}</td>
        <td>
          <button class="abrir" onclick="abrirPerfil('${conta.usuario}')">Abrir Perfil</button>
          <button class="verificado" onclick="atualizar(${i}, 'Verificado')">✔</button>
          <button class="pendente" onclick="atualizar(${i}, 'Pendente')">↺</button>
          <button onclick="remover(${i})">X</button>
        </td>
      </tr>
    `;
  });
}

function adicionar() {
  const usuario = document.getElementById("usuario").value.trim();
  if (!usuario) return alert("Digite o usuário");

  contas.push({ usuario, status: "Pendente" });
  salvar();
  render();
  document.getElementById("usuario").value = "";
}

function abrirPerfil(usuario) {
  window.open(`https://erome.com/${usuario}`, "_blank");
}

function atualizar(i, status) {
  contas[i].status = status;
  salvar();
  render();
}

function remover(i) {
  contas.splice(i, 1);
  salvar();
  render();
}

function mostrarForm() {
  document.getElementById("form").classList.toggle("hidden");
}

render();

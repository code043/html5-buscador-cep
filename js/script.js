const buscaCepbotao = document.querySelector("#buscar");
const limpaBotao = document.querySelector("#limpar");

const cepInput = document.querySelector("#cep");
const cidadeInput = document.querySelector("#cidade");
const dddInput = document.querySelector("#ddd");
const ufInput = document.querySelector("#uf");
const ruaInput = document.querySelector("#logradouro");
const bairroInput = document.querySelector("#bairro");
const estadoInput = document.querySelector("#estado");
const regiaoInput = document.querySelector("#regiao");

async function buscarCep() {
  const cepRecebido = cepInput.value;
  const response = await fetch(
    "https://viacep.com.br/ws/" + cepRecebido + "/json"
  );
  const dados = await response.json();
  render(dados);
}
function render(dadosRecebidosViaCEP) {
  const { cep, localidade, ddd, uf, logradouro, bairro, estado, regiao } =
    dadosRecebidosViaCEP;
  const info = {
    CEP: cep,
    rua: logradouro,
    bairro: bairro,
    cidade: localidade,
    ddd: ddd,
    uf: uf,
    estado: estado,
    regiao: regiao,
  };

  cepInput.value = info.CEP;
  cidadeInput.value = info.cidade;
  dddInput.value = info.ddd;
  ufInput.value = info.uf;
  ruaInput.value = info.rua;
  bairroInput.value = info.bairro;
  estadoInput.value = info.estado;
  regiaoInput.value = info.regiao;
}
function limpar() {
  cepInput.value = "";
  cidadeInput.value = "";
  dddInput.value = "";
  ufInput.value = "";
  ruaInput.value = "";
  bairroInput.value = "";
  estadoInput.value = "";
  regiaoInput.value = "";
}
const eventos = ["click", "touchstart"];

eventos.forEach((evento) => {
  buscaCepbotao.addEventListener(evento, buscarCep);
  limpaBotao.addEventListener(evento, limpar);
});

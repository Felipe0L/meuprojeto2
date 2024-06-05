const form = document.getElementById('form');
let linhas = '';
const nome = [];
const tel = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    addLinha();
    atualizaTabela();
});

function addLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');

    if (tel.includes(inputTel.value)) {
        alert(`O número de telefone: ${inputTel.value} já foi inserido.`);
    } else{
        nome.push(inputNome.value);
        tel.push(inputTel.value);

        let linha = `<tr>`;
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
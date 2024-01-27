const form = document.getElementById('form-contato');
const nome= [];
const telefone = [];

let linhas='';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-pessoa');
    const inputNumeroContato= document.getElementById('numero-contato');

    if(telefone.includes(parseInt(inputNumeroContato.value))){
        alert(`O numero informado ${inputNumeroContato.value} ja existe em sua lista de contatos`)
    }else{

        nome.push(inputNomeContato.value)
        telefone.push(parseInt(inputNumeroContato.value))

        let linha= "<tr>"
        linha+= `<td>${inputNomeContato.value}</td>`
        linha+= `<td>${inputNumeroContato.value}</td>`
        linha+= '</tr>';

        linhas += linha;

        inputNomeContato.value='';
        inputNumeroContato.value='';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}
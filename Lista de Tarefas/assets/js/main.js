const inputTarefa = document.querySelector('.input-tarefa');
inputTarefa.setAttribute('title', 'Escreva Algo'); //atribuiu o paramentro title na tag html.
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criatarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const BotaoApagar = document.createElement('button');
    BotaoApagar.innerText = 'Apagar';
    //BotaoApagar.classList.add('apagar');
    BotaoApagar.setAttribute('class', 'apagar');
    BotaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(BotaoApagar);
}

btnTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return; //return pois function se encerra.
    criatarefa(inputTarefa.value);
    
});

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){ //keycode 13 é o botão Enter.
        if(!inputTarefa.value) return;
        criatarefa(inputTarefa.value);
        
    }
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){ //true se o elemento tiver o nome da classe 'apagar'.
        el.parentElement.remove(); //remove o pai do elemento filho que tem a classe "apagar".
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; //tarefa são os itens li dentro da ul.
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);//converte um elemento javascript para um elemento JSON.
    localStorage.setItem('tarefas', tarefasJSON);//só e possivel salvar strings nesse caso.
    //salva itens do array em uma mini base de dados do navegador.
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //volta a ser um array JavaScript.
    
    for(let tarefa of listaDeTarefas){
        criatarefa(tarefa);
    }

}
adicionaTarefasSalvas();

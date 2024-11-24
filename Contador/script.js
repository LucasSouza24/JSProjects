function Script(){
    const h2 = document.querySelector('.h2');
    let contador = document.createElement('p');
    h2.appendChild(contador);
    
    contador = 0;
    
    h2.innerText = contador;
    console.log(contador);

    const decrease = document.querySelector('.decrease');
    function decreaseNum(num){ 
        let conta = num - 1;
        contador = conta; //atualiza variavel contador
        return h2.innerText = conta;
        
    }
    decrease.addEventListener('click',function(e){
        decreaseNum(contador);
        console.log(contador);
    });

    const increase = document.querySelector('.increase');
    function increaseNum(num){
        let conta = num + 1;
        contador = conta;
        return h2.innerText = conta;
    }
    increase.addEventListener('click', function(e){
        increaseNum(contador);
        console.log(contador);
    });

    const reset = document.querySelector('.reset');
    reset.addEventListener('click',function(e){
        contador = 0;
        h2.innerText = contador;
        localStorage.setItem('Numero', JSON.stringify(0)); //faz o programa continuar do zero ao fazer o reset.
    });

    const save = document.querySelector('.save');
    save.addEventListener('click',function(){
        localStorage.setItem('Numero', JSON.stringify(contador));//envia numero atual ao localstorage.
    });

    let NumeroStorage = localStorage.getItem('Numero', JSON.parse(contador));//retira o numero do localstorage.
    let NumSalvo = parseInt(NumeroStorage);
    if(!NumSalvo){
        NumSalvo = 0;
    }
    h2.innerText = NumSalvo;
    contador = NumSalvo;

}
Script();
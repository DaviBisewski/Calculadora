function inserir(num){
    document.querySelector(".tela").innerHTML += num;
}
function limpar(){
    document.querySelector(".tela").innerHTML = "";
}
function apagar(){
   let tela = document.querySelector(".tela").innerHTML;
   document.querySelector(".tela").innerHTML = tela.substring(0, tela.length -1);
}
function calcular(){
    let conta = document.querySelector(".tela").innerHTML;  
    try{
        let tela = eval(conta)
        document.querySelector('.tela').innerHTML = tela;
    }
    catch(error){
            document.querySelector('.tela').innerHTML = 'Erro';
        }
    }



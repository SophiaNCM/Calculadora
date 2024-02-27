function insert(num){
    var numero = document.getElementById('Mostrar_Conta').innerHTML;
    document.getElementById('Mostrar_Conta').innerHTML = numero + num;
}
function limpar(){
    document.getElementById('Mostrar_Conta').innerHTML = "";
}
function apagar(){
    var resultado = document.getElementById('Mostrar_Conta').innerHTML;
    document.getElementById('Mostrar_Conta').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('Mostrar_Conta').innerHTML;
    if (resultado){
        document.getElementById('Mostrar_Conta').innerHTML = eval(resultado);
    }
}
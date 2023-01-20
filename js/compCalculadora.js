var entrada = document.querySelector("#tela");
var audio = document.querySelector("#audio1");
function setText(a){   
    if(a == '+' || a == '-' || a == 'x' || a == '÷' || a == '%'){
        if(naoPermiteMaisOperacao() == false && entrada.value != "" && entrada.value[entrada.value.length - 1] != "."){
            entrada.value += a;
        }
    }
    else if(a == "."){
        if(entrada.value[entrada.value.length - 1] != "+" && entrada.value[entrada.value.length - 1] != "-" && entrada.value[entrada.value.length - 1] != "x" && entrada.value[entrada.value.length - 1] != "÷" && entrada.value[entrada.value.length - 1] != "%" && entrada.value != ""){
            if(naoPermiteMaisOperacao() == false){
                if(verificaPontoFlutuanteDosElementos(0,entrada.value.length) == false){
                    entrada.value += a;
                }
            }
            else{
                if(verificaPontoFlutuanteDosElementos(posicaoDaOperacao()+1,entrada.value.length) == false){
                    entrada.value += a;
                }
            }
    }
}
    else{
    entrada.value += a;
    } 
    adicionaAudio()
}
function limpaCampoFull(){
  
    entrada.value = "";
    adicionaAudio()
}
function limpaCampoCaracter(){
    var s = ""
    for(var i = 0; i < entrada.value.length - 1;i++){
        s += entrada.value[i];
    }
    entrada.value = s;
    adicionaAudio()
}
function naoPermiteMaisOperacao(){
    for(var i = 0; i < entrada.value.length;i++){
        if(entrada.value[i] == "+" || entrada.value[i] == "-" || entrada.value[i] == "x" || entrada.value[i] == "÷" || entrada.value[i] == "%"){
            return true;
        }
        
    }
    return false;
}

function posicaoDaOperacao(){
    for(var i = 0;i < entrada.value.length;i++){
        if(entrada.value[i] == "+" || entrada.value[i] == "-" || entrada.value[i] == "x" || entrada.value[i] == "÷" || entrada.value[i] == "%"){
            return i;
        }
    }
    return null
    
}
function primeiroElemento(){
    var a = "";
    if(posicaoDaOperacao != null){
        for(var i = 0; i < posicaoDaOperacao();i++){
            a += entrada.value[i];
        }
    }
    return entrada.value;

}
function segundoElemento(){
    var b = "";
    for(var i = posicaoDaOperacao()+1;i < entrada.value.length;i++){
        b += entrada.value[i];
}
    return b;
}
function verificaPontoFlutuanteDosElementos(inic,fim){

    for(var i = inic;i < fim;i++){
        if(entrada.value[i] == "."){
            return true;
        }
    }
    return false;

}
function primeiroElementoNumerico(){
    var ponto = false;
    for(var i = 0;i < primeiroElemento().length;i++){
        if(primeiroElemento()[i] == "."){
            ponto = true;
        }
    }
    if(ponto == true){
        return parseFloat(primeiroElemento());
    }
    return parseInt(primeiroElemento());
       
}
function segundoElementoNumerico(){
    var ponto = false;
    for(var i = 0;i < segundoElemento().length;i++){
        if(segundoElemento()[i] == "."){
            ponto = true;
        }
    }
    if(ponto == true){
        return parseFloat(segundoElemento());
    }
    return parseInt(segundoElemento());
}

function soma(){
    return primeiroElementoNumerico()+segundoElementoNumerico();
}
function subtracao(){
    return primeiroElementoNumerico()-segundoElementoNumerico();
}
function multiplicacao(){
    return primeiroElementoNumerico()*segundoElementoNumerico();
}
function divisao(){
    return primeiroElementoNumerico()/segundoElementoNumerico();
}
function porcentagem(){
    return (primeiroElementoNumerico()/100) * segundoElementoNumerico();
}

function calculaOperacao(){
    if(entrada.value[posicaoDaOperacao()] == "+"){
        
        entrada.value = soma();
    }
    else if(entrada.value[posicaoDaOperacao()] == "-"){
       
        entrada.value = subtracao();
    }
    else if(entrada.value[posicaoDaOperacao()] == "x"){

        entrada.value = multiplicacao();
    }
    else if(entrada.value[posicaoDaOperacao()] == "%"){

        entrada.value = porcentagem();
    }
    else{

        entrada.value = divisao();
    }
    adicionaAudio()
}

function adicionaAudio(){
    audio.play()
}

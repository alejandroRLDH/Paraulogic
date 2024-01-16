let paraula = RATON

function send(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    if (resposta.length==5){
        document.getElementById('no5').hidden = true;
        for (i=1;i<resposta.length+1;i++){
            let id = "lletra" + i;
            let lletra = resposta.charAt(i-1);
            document.getElementById(id).innerHTML = lletra;
        }
    }else{
    document.getElementById('no5').hidden = false;
    }
}
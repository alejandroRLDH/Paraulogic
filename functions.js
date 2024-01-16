const paraula = "RATON"

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
        comprova()
    }else{
    document.getElementById('no5').hidden = false;
    }
}

function comprova(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    for (i=1;i<resposta.length+1;i++){
        let id = "lletra" + i;
        if (resposta.charAt(i-1)==paraula.charAt(i-1)) {
            document.getElementById(id).className = "slotgreen";
        }else if(paraula.includes(resposta.charAt(i-1))){
            document.getElementById(id).className = "slotyellow";
        }else{
            document.getElementById(id).className = "slot";
        }
    }
}
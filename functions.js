const paraula = "BAZINGA"
let count = 0

function send(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    if (resposta.length==7){
        document.getElementById('no5').hidden = true;
        count++
        crear()
        for (i=1;i<resposta.length+1;i++){
            let id = "lletra" + count + i;
            let lletra = resposta.charAt(i-1);
            document.getElementById(id).innerHTML = lletra;
        }
        comprova()
        if(count==5){
            document.getElementById("boton").hidden = "true";
            window.alert("Has perdut!")
        }
    }else{
    document.getElementById('no5').hidden = false;
    }
}

function comprova(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    for (i=1;i<resposta.length+1;i++){
        let id = "lletra" + count + i;
        if (resposta.charAt(i-1)==paraula.charAt(i-1)) {
            document.getElementById(id).className = "slotgreen";
        }else if(paraula.includes(resposta.charAt(i-1))){
            document.getElementById(id).className = "slotyellow";
        }else{
            document.getElementById(id).className = "slot";
        }
    }
    if(resposta==paraula){
        document.getElementById("boton").hidden = "true";
        window.alert("Has guanyat!");
        count--
    }
}

function crear(){
    let linea = "<div class=\"resposta\">" + '<br>';
    for (i=1;i<paraula.length+1;i++){
        let id = "lletra" + count + i;
        linea += "<div class=\"slot\" id=\"" + id +  "\"></div>" + '<br>';
    }
    linea += "</div>" + "<br>"
    document.getElementById("respostes").innerHTML += linea;
}
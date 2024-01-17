const paraula = "RATON"
let count = 0

function send(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    if (resposta.length==5){
        document.getElementById('no5').hidden = true;
        count++
        crear()
        if(count==6){
            document.getElementById("boton").hidden = "true";
            window.alert("Has perdut!")
        }else{ for (i=1;i<resposta.length+1;i++){
            let id = "lletra" + count + i;
            let lletra = resposta.charAt(i-1);
            document.getElementById(id).innerHTML = lletra;
            }
            comprova()
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
    }
}

function crear(){
    let linea = "<div class=\"resposta\">" + '<br>';
    for (i=1;i<6;i++){
        let id = "lletra" + count + i;
        linea += "<div class=\"slot\" id=\"" + id +  "\"></div>" + '<br>';
    }
    linea += "</div>" + "<br>"
    document.getElementById("respostes").innerHTML += linea;
}
let paraula = RATON

function send(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    if (resposta.length==5){
        document.getElementById('no5').hidden = true;
        for (i=0;i<resposta.length;i++){
            let lletra = resposta.charAt(i);
            if (i==0){
                document.getElementById('lletra1').innerHTML = lletra;
            } else if (i==1){
                document.getElementById('lletra2').innerHTML = lletra;
            } else if (i==2){
                document.getElementById('lletra3').innerHTML = lletra;
            } else if (i==3){
                document.getElementById('lletra4').innerHTML = lletra;
            } else if (i==4){
                document.getElementById('lletra5').innerHTML = lletra;
            }
        }
        comprova();
    }else{
    document.getElementById('no5').hidden = false;
    }
}

function comprova(){
    if=
}
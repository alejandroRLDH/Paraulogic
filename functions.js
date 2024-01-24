// Es determinen la paraula i un comptador d'intents.
const paraula = "BAZINGA"
let count = 0

function send(){
    //Agafa la resposta i es posa en majúscula per poder usarla.
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    if (resposta.length==7){
        //Es quita l'alerta que diu que no té lletres correctes, i suma un al comptador d'intents.
        document.getElementById('no').hidden = true;
        count++;
        crear();
        //El for asigna una lletra a cada casella, utilitzant el comptador per cambiar d'ID (L'ID de les caselles son lletra + intent + número).
        for (i=1;i<resposta.length+1;i++){
            let id = "lletra" + count + i;
            let lletra = resposta.charAt(i-1);
            document.getElementById(id).innerHTML = lletra;
        }
        comprova()
        //Mecanisme de perdre si has arribat al màxim.
        if(count==5){
            document.getElementById("boton").hidden = "true";
            document.getElementById("pista").innerHTML = "Mala sort. :/";
            window.alert("Has perdut!");
        }
    }else{
    //Alerta al no tenir nombre de lletres correctes.
    document.getElementById('no').hidden = false;
    }
}

function comprova(){
    let resposta = document.getElementById('resposta').value;
    resposta = resposta.toUpperCase();
    //Utilitzant el mateix sistema d'ID per pintar lletres, comprova si la lletra és a la paraula i pinta colors.
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
    //Comprovació de si hi ha lletres repetides per avisar-te.
    let repetit = 0;
    for (i=1;i<resposta.length+1;i++){
        if (paraula.includes(resposta.charAt(i-1))){
            for (o=1;o<resposta.length+1;o++){
                if (resposta.charAt(i-1)==paraula.charAt(o-1)){
                    repetit++;
                }
            }
        }
    }
    //Fa els intents. Compta enrera dels intents per saber quants et queden.
    let intents= 5-count;
    //Mecanisme que pinta dins pistes si una de les lletres que tens està repetida dins la paraula. No et diu quina per més dificultat.
    if (repetit>0){
        repetit = " Una d'aquestes lletres és repetida.";
    }else{
        repetit = "";
    }
    document.getElementById("pista").innerHTML = "Pista: Tens " + intents + " intents." + repetit;
    //Comprovació de si has guanyat.
    if(resposta==paraula){
        document.getElementById("boton").hidden = "true";
        document.getElementById("pista").innerHTML = "Felicitats! :D";
        window.alert("Has guanyat!");
        //Resta intents per no alertar el sistema de pèrdua.
        count--;
    }
}

function crear(){
    //Crea les caselles amb codi, usant el mateix sistema d'ID per posar-los.
    let linea = "<div class=\"resposta\">" + '<br>';
    for (i=1;i<paraula.length+1;i++){
        let id = "lletra" + count + i;
        linea += "<div class=\"slot\" id=\"" + id +  "\"></div>" + '<br>';
    }
    linea += "</div>" + "<br>"
    document.getElementById("respostes").innerHTML += linea;
}
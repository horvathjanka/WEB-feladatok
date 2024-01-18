function NevValt(elem){
    document.getElementById("nev").innerText=elem.value;
}

function AlkValt(elem){
    akt=elem.id;
    switch(akt){
        case "eljegyzes":
            document.getElementById("esemeny").innerText="az eljegyzésünkre"
            document.getElementById("kep").src="gyuru.png"
            break;
        case "ballagas":
            document.getElementById("esemeny").innerText="a ballagásomra"
            document.getElementById("kep").src="ballagas.png"
            break;
        case "szulinap":
            document.getElementById("esemeny").innerText="a születésnapomra"
            document.getElementById("kep").src="szulinap.png"
            break;
        default:
            break;
    }
}

function DatValt(elem){
    document.getElementById("datum").innerText=elem.value;
}

function IdoValt(elem){
    document.getElementById("idopont").innerText=elem.value;
}

function HelyValt(elem){
    hely=elem.value
    if (hely=="hajo"){
        document.getElementById("helyszin").innerText="Hajó Étterem"
    }
    else if (hely=="face"){
        document.getElementById("helyszin").innerText="Face Room Étterem"
    }
    else{
        document.getElementById("helyszin").innerText="Nálunk"
    }
}

function SzinValt(elem){
    document.getElementById("meghivo").style.backgroundColor=elem.value;
}
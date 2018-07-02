
"use strict";
let mots =["javascript","react","angular","bootstrap","html","css"];
let quantite = mots.length-1;
let pos = Math.round(Math.random()*quantite);
let motchoisi = mots[pos];
let mottaille = motchoisi.length;
let boitelettre = [];
let correct;
let mauvaismax = 4;
let mauvais = 0;
let partiesimg = [];
let bonchoix = false;
let enjouant = false;
let player;

document.getElementById("btnnouveaujeu").addEventListener("click",debut);
document.getElementById("consignes").addEventListener("click",consignes);
document.getElementById("jouer").addEventListener("click",jouer);

function lettredefini(l) {
    let obj;
    for (let i=0;i<16;i++){
        obj = document.getElementById("lettre"+i).value="";
        obj = document.getElementById("lettre"+i).style.display="none";
    }
    for(let i=0;i<l;i++){
        obj = document.getElementById("lettre"+i).style.display="inline-block";
    }
}

function debut(evt) {
    enjouant = true;
    player = document.getElementById("joueurlettreid");
    player.value ="";
    player.focus();
    correct = 0;
    mauvais = 0;
    bonchoix = false;
    document.getElementById("lettrestapees").innerHTML="Lettres Tapées:";
    pos = Math.round(Math.random()*quantite);
    motchoisi = mots[pos];
    mottaille = motchoisi.length;
    lettredefini = (mottaille);
    document.getElementById("msg").innerHTML="";
    partiesimg[1]=document.getElementById("tete");
    partiesimg[2]=document.getElementById("corps");
    partiesimg[3]=document.getElementById("jambe");
    partiesimg[4]=document.getElementById("pied");
    for (let i=1;i<5;i++){
        partiesimg[i].style.display="none";
    }
}

function consignes(evt) {
    alert("consignes");
    player.focus();
}

function jouer(evt) {
    player.focus();
    if (player.value===""){
        alert("Vous devez taper 1 lettre!");
    }
    else{
        if(enjouant){
        let obj;
        let lettretap;
        let lettre;
        let search;
        lettre = player.value;
        player.valeu="";
        bonchoix=false;
        search = motchoisi.match(lettre);
        while (search!=null){
            lettretap=motchoisi.search(lettre);
            obj=document.getElementById("lettre"+lettretap).value="lettre";
            motchoisi=motchoisi.replace(lettre,"0");
            bonchoix++;
            search=motchoisi.match(lettre);
            bonchoix=true;
        }if(!bonchoix){
                document.getElementById("lettrestapees").innerHTML+=lettre.toUpperCase();
                mauvais++;
                if(mauvais<4){
                    partiesimg[mauvais].style.display="block";
                } else {
                    document.getElementById("msg").innerHTML="Jeu perdu";
                    enjouant=false;
                    }
                }
            }
        }
    }
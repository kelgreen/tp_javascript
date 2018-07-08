
"use strict";

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
     if (window.pageYOffset >= 50) {
         document.getElementById("navbar").style.backgroundColor = "#0B0B0B";
         document.getElementById("navbar").style.opacity = "0.8";
    } else {
         document.getElementById("navbar").style.backgroundColor = "transparent";

    }
}


/*
$(document).ready(function(){
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            let $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                let targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 800);
                return false;
            }
        }
    });
});
*/

// PENDU
let mots =["javascript","react","angular","bootstrap","html","css", "macaco"];
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
let bonchoixtaille; 
let enjouant = false;
let player;
let consignemot =["Langage de programmation de scripts","Bibliothèque JavaScript","Plate-forme d'applications web open-source","Collection d'outils utile à la création du design","Langage de balisage","Feuille de style"];

document.getElementById("btnnouveaujeu").addEventListener("click",debut);
document.getElementById("consignes").addEventListener("click",consignes);
document.getElementById("jouer").addEventListener("click",jouer);

function lettredefini(l) {
    for (let i=0;i<15;i++){
        document.getElementById("lettre"+i).value="";
        document.getElementById("lettre"+i).style.display="none";
    }
    for(let i=0;i<l;i++){
        document.getElementById("lettre"+i).style.display="inline-block";
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
    bonchoixtaille = 0;
    document.getElementById("lettrestapees").innerHTML="Lettres Tapées:";
    pos = Math.round(Math.random()*quantite);
    motchoisi = mots[pos];
    mottaille = motchoisi.length;
    lettredefini(mottaille);
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
    alert(consignemot[pos]);
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
        let lettrechoisie = false;
        lettre = player.value;
        player.value="";
        bonchoix=false;
        search = motchoisi.match(lettre);

        if(boitelettre.length > 0){
            for(let x = 0; x < boitelettre.length; x++){
                if(lettre.toUpperCase() === boitelettre[x]){
                    lettrechoisie = true;
                }
            }
        }

        if(lettrechoisie === false){
            while (search!=null){
                lettretap=motchoisi.search(lettre);
                document.getElementById("lettre"+lettretap).value=lettre;
                motchoisi=motchoisi.replace(lettre,"0");
                bonchoixtaille++;
                search=motchoisi.match(lettre);
                bonchoix=true;
            }
            if(!bonchoix){
                boitelettre[boitelettre.length] = lettre.toUpperCase();
                document.getElementById("lettrestapees").innerHTML+=lettre.toUpperCase();
                mauvais++;
                if(mauvais < mauvaismax){
                    partiesimg[mauvais].style.display="block";
                } else {
                    partiesimg[mauvais].style.display="block";
                    document.getElementById("msg").innerHTML="Jeu perdu";
                    enjouant=false;
                    }
            }
            if(bonchoixtaille===mottaille){
                document.getElementById("msg").innerHTML="";
                document.getElementById("msg").innerHTML="Felicitation,vous avez gagné le jeu";
                enjouant=false;
            }

        }
        else{
            alert("Vous avez déjà taper cette lettre!");
        }
        }
    }
}

window.addEventListener("load", debut);
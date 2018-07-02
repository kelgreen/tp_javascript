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

function lettredefini(l) {

}

function debut() {
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
}
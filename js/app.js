// Importation des modules 
import * as ui from './ui.js';
import calculate from './calculator.js';
import * as operations from './operations.js';

// DOM
let screen = document.getElementById("display");
let btnRes = document.getElementById("equals");
let btnClean = document.getElementById("clear");
let btnDel = document.getElementById("backspace");

// Ma fonction initApp : sélectionne tous les boutons et prépare une zone pour l'affichage du résultat 
function initApp(){
  // Pour les touches : nombres, opérateurs
  ui.onClickBtn(function(value){ // Fonction callback qui sera exécutée quand il y a un clic.
    // => Fonction appelée
    ui.majScreen(screen, value)
  });
  
  // Pour le bouton égal 
  ui.showRes(function(){
    let res = calculateString(screen.value);
    if(isNaN(res)){
      ui.cleanScreen(screen);
      if(res == "Math Error"){
        ui.majScreen(screen, "Math Error");
      } else {
        ui.majScreen(screen, "Syntax Error");
      }
    } else {
      ui.cleanScreen(screen);
      ui.majScreen(screen, res);
    }
  });
  
  // Pour les boutons suppr et clean
  btnClean.addEventListener("click", function() {
    ui.cleanScreen(screen);
  });
  
  btnDel.addEventListener("click", function(){
    ui.del(screen);
  });
}

// Fonctions utilitaires 
function calculateString(string){
  // Logique : tokenizer le string en le mettant dans un tableau puis parcourir ce tableau
  let tab = [];
  let cleanTabIndex = 0;
  let tabIndex = 0;
  let j = 0;
  tab = string.split(""); // string → tableau
  let cleanTab = [];
  let currentNumber = "";
  
  for (let i = 0; i < tab.length; i++) {
    const char = tab[i];

    if (char >= "0" && char <= "9" || char === ".") {
      // Chiffre ou point → ajouter au nombre courant
      currentNumber += char;
    } else if (char === "-" && (i === 0 || ["+", "-", "*", "/"].includes(tab[i-1]))) {
      // Signe "-" qui indique un nombre négatif
      currentNumber += char;
    } else if (["+", "-", "*", "/"].includes(char)) {
      // Opérateur rencontré
      if (currentNumber !== "") {
        cleanTab.push(parseFloat(currentNumber)); // push nombre
        currentNumber = "";
      }
      cleanTab.push(char); // push opérateur
    }
  }

  // Push le dernier nombre s'il existe
  if (currentNumber !== "") {
    cleanTab.push(parseFloat(currentNumber));
  }

  console.log(cleanTab);

  // Après avoir obtenu cleanTab, on transforme les éléments du tableau en float sauf les opérateurs
  for(let value of cleanTab){
    if(value != "+" && value != "-" && value != "*" && value != "/"){
      cleanTab[cleanTab.indexOf(value)] = parseFloat(value);
    }
  }

  let priorityTab = [];
  let i = 0;

  while (i < cleanTab.length) {
    if (cleanTab[i] === "*" || cleanTab[i] === "/") {
      // Calculer le résultat
      let result = calculate(priorityTab.pop(), cleanTab[i + 1], cleanTab[i]); 
      priorityTab.push(result); // on push le résultat
      i += 2; // on saute l'opérande suivant déjà utilisé
    } else {
      // Nombre ou +/-
      priorityTab.push(cleanTab[i]);
      i++;
    }
  }
  console.log(priorityTab);

  // Puis, parcourir cleanTab et faire les opérations par binôme de gauche à droite 
  let res = null;
  if(priorityTab.length == 1){ res = priorityTab[0]; }
  else{
    for(let i = 0; i< priorityTab.length; i++){
      if(priorityTab[i] == "+" || priorityTab[i] == "-" || priorityTab[i] == "*" || priorityTab[i] == "/"){
        if(res == null){
          res = calculate(priorityTab[i-1], priorityTab[i+1], priorityTab[i]);
        } else {
          res = calculate(res, priorityTab[i+1], priorityTab[i]);
        }
      }
    }
  }
  return res;
}

initApp();
console.log(calculate(2,3,"+"));
let s = "2*2*3";
console.log(calculateString(s));
let test = ["1","2"];
test[0] = parseInt(test[0]);
console.log(test[0]);

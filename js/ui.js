// pour l'interface utilisateur 
// approche callback pour utiliser les dataset à app.js
export function onClickBtn(maFonction){
 let btn = document.querySelectorAll(".btn");
 
 btn.forEach(function(oneBtn){
 oneBtn.addEventListener("click", function(){
  if(oneBtn.dataset.value){
   maFonction(oneBtn.dataset.value); //callback: 
   // quand l'utilisateur onclick, on exécute la fonction dans app.js
   //=> fonction appelante
  }
  if(oneBtn.dataset.operator){
   maFonction(oneBtn.dataset.operator); 
  }
 });
});
}

export function showRes(callback){
 let btn = document.getElementById("equals");
 btn.addEventListener("click",function(){
  callback();
 })
}

// fonct pour maj l'écran 
export function majScreen(screen, value){
 if(isValide(screen.value)){
  screen.value += value; 
 }
} 
// pour effacer l'ecran
export function cleanScreen(screen){
 screen.value = "";
}
// pour suppr le dernier caractère
export function del(screen){
 if(screen.value !== ""){
   screen.value = screen.value.slice(0, -1)// suppr le dernier element 
 }
}

function isValide(s){
if(s!= ""){
 if(s[s.length-1] != "+" && s[s.length-1] != "-" && s[s.length-1] != "*" && s[s.length-1] != "/" && s[s.length-1] != "."){
  if(isNaN(parseInt(s[s.length-1]))){
   return false;
  }
 }
}
 return true;
}
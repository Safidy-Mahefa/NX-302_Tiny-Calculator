// Qui gère les opérations 
import * as base from './operations.js'
export default function calculate(a,b,op){
 try{
  
   switch (op) {
    case '+':
     return base.som(a,b); // affichage result
     break;
    case '-':
     return base.sub(a,b);
     break;
    case '*':
     return base.mult(a,b);
     break;
    case '/':
     if(b== 0){return "Math Error";}
     else{return base.div(a,b);}
     break;
    
    default:
     
   }
 } catch(e){
  console.log(e.message);
 }
}
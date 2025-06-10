const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let word1 = ""
let word2 = ""
let v = 0
let password1 = document.getElementById("pw1")
let password2 = document.getElementById("pw2")


function makePw() {
   
   
   
   for (let i = 0; i < 15; i++) {
    v = Math.floor(Math.random() * characters.length)
    word1 += characters[v]
   }

   
   for (let i = 0; i < 15; i++) {
    v = Math.floor(Math.random() * characters.length)
    word2 += characters[v]
   }
   
  
   password1.textContent = word1
   password2.textContent = word2 
    word1 = ""
    word2 = ""
}







   
    





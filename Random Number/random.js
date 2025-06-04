
let screenNum = document.getElementById("screen")
let minNum = 0
let maxNum = 0



function generate() {

    // get numbers from input 
let fromNum = document.getElementById("from").value
let toNum = document.getElementById("to").value
console.log(fromNum)
console.log(toNum)
    // generate rando number between range
let ranNum = Math.floor(Math.random() * (toNum - fromNum + 1)) 
    console.log(ranNum)
    
    // make the screen show random number
screenNum.textContent = ranNum

if (fromNum > toNum) {
screenNum.textContent = "Your min range number can't be higher than your max range number"
document.getElementById("screen").style.color = "red"    
  
} else if (fromNum === toNum) {
screenNum.textContent = "Your range numbers are the same"
document.getElementById("screen").style.color = "red"    

}
}


let screenNum = document.getElementById("screen")


function generate() {

    // get numbers from input 
let fromNum = Number(document.getElementById("from").value)
let toNum = Number(document.getElementById("to").value)

console.log(fromNum + "from")
console.log(toNum + "to")
    // generate rando number between range


    let ranNum = Math.floor(Math.random() * ( toNum - fromNum + 1) + fromNum) 
    console.log(ranNum)
    
    // make the screen show random number
screenNum.textContent = ranNum

    // data validation
if (fromNum > toNum) {
screenNum.textContent = "Your min range number can't be higher than your max range number"
document.getElementById("screen").style.color = "red"    
  
} else if (fromNum === toNum) {
screenNum.textContent = "Your range numbers are the same"
document.getElementById("screen").style.color = "red"    

}
}

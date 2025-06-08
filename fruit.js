let basket = []
let oranges = []
let apples = []
let basketEl = document.getElementById("basket")
let appleEl = document.getElementById("apple")
let orangeEl = document.getElementById("orange")

function addOrange() {
basketEl.textContent += "🍊"
basket.push("🍊")
}

function addApple() {
basketEl.textContent += "🍏"
basket.push("🍏")
}


function sorting() {
    basketEl.textContent = "Basket: "
    for (let i = 0; i < basket.length; i++) {
        if (basket[i] === "🍊") {
            orangeEl.textContent += "🍊"
        } else if (basket[i] === "🍏") {
            appleEl.textContent += "🍏"
        }
    }
    basket = []

}


function reset() {
basketEl.textContent = "Basket: "

orangeEl.textContent = "Orange: "
appleEl.textContent = "Apple: "
basket = []

}
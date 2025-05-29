
let screenOne = document.getElementById("screen1")
let screenTwo = document.getElementById("screen2")
let count = 0

function ladd1() {
    count += 1
    screenOne.textContent = count
}

function ladd2() {
    count += 2
    screenOne.textContent = count
}

function ladd3() {
    count += 3
    screenOne.textContent = count
}

function radd1() {
    count += 1
    screenTwo.textContent = count
}

function radd2() {
    count += 2
    screenTwo.textContent = count
}

function radd3() {
    count += 3
    screenTwo.textContent = count
}

function reset() {
    count = 0
    screenTwo.textContent = 0
    screenOne.textContent = 0
}
    
    if (screenTwo.textContent >= 20) {
        
    }

    if (screenOne.textContent >= 20) {
        
    }

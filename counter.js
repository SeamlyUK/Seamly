
let screenOne = document.getElementById("screen1")
let screenTwo = document.getElementById("screen2")
let lcount = 0
let rcount = 0 

function ladd1() {
    lcount += 1
    screenOne.textContent = lcount
}

function ladd2() {
    lcount += 2
    screenOne.textContent = lcount
}

function ladd3() {
    lcount += 3
    screenOne.textContent = lcount
}

function radd1() {
    rcount += 1
    screenTwo.textContent = rcount
}

function radd2() {
    rcount += 2
    screenTwo.textContent = rcount
}

function radd3() {
    rcount += 3
    screenTwo.textContent = rcount
}

function reset() {
    rcount = 0
    lcount = 0
    screenTwo.textContent = 0
    screenOne.textContent = 0
}
    
    if (screenTwo.textContent >= 20) {
        
    }

    if (screenOne.textContent >= 20) {
        
    }

// gets the element by the id
let countEl = document.getElementById('count-el')
let display = document.getElementById('displayData')
// let count_value = Number(countEl.value)

// Variable that will be incremented
let count = 0;

// Increment the value
function increment(){
    count ++
    countEl.innerText = count
}
// Decrement the value
function decrement(){
    if(count >0){
        count--
        countEl.innerText = count
    }
}

function saveQuantity(){
    // let display = document.getElementById('displayData')
    display.style.display = 'block'
    display.innerText+= ` ${count} - `
    
    
}

function reset(){
    count = 0
    countEl.innerText = 0
    display.innerText = 'Previous entries: '
    display.style.display = 'none'
}

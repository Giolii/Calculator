let calculator = {
    nums: [],
    operator:[],
    numFirst:[],
add: function add(num1,num2){//add
   return num1+num2
},
sub: function sub(num1,num2){//sub
    return num1-num2
},
multi: function multi(num1,num2){//multi
    return num1*num2
},
divide: function divide(num1,num2){//divide
    return (num1/num2).toFixed(1)
},
operate: function operate(num1,operator,num2){//operate
    if      (operator === '+') return add(num1,num2)
    else if (operator === '-') return sub(num1,num2)
    else if (operator === '*') return multi(num1,num2)
    else if (operator === '/') return divide(num1,num2)
}
}
let display = document.querySelector('.result');
let numToDisplay = document.querySelectorAll('.numbers');
numToDisplay.forEach((num)=>{
    num.addEventListener('click', ()=>{
        calculator.nums.push(num.textContent)
        display.textContent = calculator.nums.join('')
    })
})

let operators = document.querySelectorAll('.operators')
operators.forEach((operator)=>
    operator.addEventListener('click',()=>{
        if ( calculator.operator.length === 0) {
        display.textContent = ''
        calculator.operator.splice(0,1,operator.textContent)
        let numToMove = calculator.nums.splice(0,calculator.nums.length)
        calculator.numFirst.push(... numToMove)
        calculator.numFirst = calculator.numFirst.join('')}
            else if(calculator.operator.length === 1) {
            
            }
    }
    ))
let equal = document.querySelector('.equal')
equal.addEventListener('click',function equalButton() {
    calculator.nums = calculator.nums.join('')
    if(calculator.operator[0] === '+') {
        display.textContent = calculator.add(parseInt(calculator.nums),parseInt(calculator.numFirst))
    }
    else if(calculator.operator[0] === '-') {
        display.textContent = calculator.sub(parseInt(calculator.numFirst),parseInt(calculator.nums))
    }
    else if(calculator.operator[0] === 'x') {
    display.textContent = calculator.multi(parseInt(calculator.numFirst),parseInt(calculator.nums))
    }
    else if(calculator.operator[0] === '/') {
        display.textContent = calculator.divide(parseInt(calculator.numFirst),parseInt(calculator.nums))
        }
    calculator.numFirst = []
    calculator.nums = []

})

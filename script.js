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
let numbers = document.querySelectorAll('.numbers');
numToDisplay.forEach((num)=>{
    num.addEventListener('click', ()=>{
        calculator.nums.push(num.textContent)
        display.textContent = calculator.nums.join('')
    })
})

let operators = document.querySelectorAll('.operators')
operators.forEach((operator)=>
    operator.addEventListener('click',()=>{
        
    }))

let equal = document.querySelector('.equal')
equal.addEventListener('click',function equalButton() {
    })

let calculator = {
    firstNumber: [],
    operator:[],
    lastNumber:[],
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
operate: function (num1,operator,num2){//operate
    if      (operator === '+') return (parseInt(num1) + parseInt(num2))
    else if (operator === '-') return (parseInt(num1) - parseInt(num2))
    else if (operator === 'x') return (parseInt(num1) * parseInt(num2))
    else if (operator === '/') return (parseInt(num1) / parseInt(num2))
}
}
let display = document.querySelector('.result');
let numbers = document.querySelectorAll('.numbers');
numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        calculator.firstNumber.push(number.textContent)
        display.textContent = calculator.firstNumber.join('')
    })
})

let operators = document.querySelectorAll('.operators')
operators.forEach((operator)=>
    operator.addEventListener('click',()=>{
        if (calculator.operator.length === 0){
        display.textContent = ''
        calculator.operator = operator.textContent //Save operator on object
        calculator.lastNumber = calculator.firstNumber.join('')//Save Number on object
        calculator.firstNumber = [] //return empty array
        } else {
            calculator.firstNumber = calculator.firstNumber.join('')
            let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
            display.textContent = resultFromOperator
            calculator.lastNumber = resultFromOperator
            calculator.firstNumber = []
            calculator.operator = operator.textContent
        }
        console.table(calculator)
    }))

let equal = document.querySelector('.equal')
equal.addEventListener('click',function equalButton() {
    calculator.firstNumber = calculator.firstNumber.join('')
            let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
            console.log(calculator.firstNumber)
            console.log(calculator.operator)
            console.log(calculator.lastNumber)
            display.textContent = resultFromOperator
            calculator.lastNumber = []
            calculator.firstNumber = []
            calculator.operator = []
    })

let ac = document.querySelector('.ac')
ac.addEventListener('click',()=>{
    display.textContent = '0'
    calculator.lastNumber = []
    calculator.firstNumber = []
    calculator.operator = []
})
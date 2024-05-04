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
    if      (operator === '+') {
        let result = (parseFloat(num1) + parseFloat(num2))
        if (countDecimals(result) > 4) return parseFloat(result).toFixed(2)
        else return result
    }
    else if (operator === '-') {
            let result = (parseFloat(num1) - parseFloat(num2))
            if (countDecimals(result) > 4) return parseFloat(result).toFixed(2)
            else return result
        }
    else if (operator === 'x' || operator === '*') {
        let result = (parseFloat(num1) * parseFloat(num2))
        if (countDecimals(result) > 4) return parseFloat(result).toFixed(2)
        else return result
    }
    else if (operator === '/') {
        let result = (parseFloat(num1) / parseFloat(num2))
        if (countDecimals(result) > 4) return parseFloat(result).toFixed(2)
        else return result
    }},
dotCounter: [],
}
var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    else if (isNaN(value)) return 0;
    else
    return value.toString().split(".")[1].length || 0; 
}

let display = document.querySelector('.result');
let numbers = document.querySelectorAll('.numbers');
numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        // calculator.firstNumber.push(number.textContent)
        limitArray(calculator.firstNumber,number)
        display.textContent = calculator.firstNumber.join('')
    })
})

let operators = document.querySelectorAll('.operators')
operators.forEach((operator)=>
    operator.addEventListener('click',()=>{
        if (calculator.operator.length === 0 && display.textContent != ''){
        display.textContent = ''
        calculator.operator = operator.textContent //Save operator on object
        calculator.lastNumber = calculator.firstNumber.join('')//Save Number on object
        calculator.firstNumber = [] //return empty array
        calculator.dotCounter = [] //empty dot . counter (1 max)
        }
        else if (calculator.firstNumber.length > 0)
        {
            calculator.firstNumber = calculator.firstNumber.join('')
            let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
            display.textContent = resultFromOperator
            calculator.lastNumber = resultFromOperator
            calculator.firstNumber = []
            calculator.operator = operator.textContent
            calculator.dotCounter = []
        }
        else if (calculator.operator.length > 0 && calculator.lastNumber != ''){
            calculator.operator = operator.textContent
        }
    }))

let equal = document.querySelector('.equal')
equal.addEventListener('click',function equalButton() {
    calculator.firstNumber = calculator.firstNumber.join('')
            let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
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
    calculator.dotCounter = []
})
function limitArray(array,item){
    if (array.length > 6) return;
    else calculator.firstNumber.push(item.textContent)
}

let back = document.querySelector('.back')
back.addEventListener('click',()=>{
    calculator.firstNumber.pop()
    display.textContent = calculator.firstNumber.join('')
})

let dot = document.querySelector('.dot')
dot.addEventListener('click', () =>{
    if(calculator.firstNumber.length === 0){
        calculator.firstNumber.push('0.')
        display.textContent = calculator.firstNumber.join('')
    }else if (calculator.dotCounter.length === 0){
        calculator.firstNumber.push('.')
        display.textContent = calculator.firstNumber.join('')
        calculator.dotCounter.push('1')
    }
})


document.addEventListener('keydown', function(e) {
    console.log(e)
     if (e.key === 'Enter' || e.key === '='){
        if(calculator.firstNumber.length >= 1){ calculator.firstNumber = calculator.firstNumber.join('')}
        let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
        display.textContent = resultFromOperator
        calculator.lastNumber = []
        calculator.firstNumber = []
        calculator.operator = []
}
    else if (e.key === '+' || e.key === '-' || e.key === '*' ||
         e.key === '/'){
            if (calculator.operator.length === 0 && display.textContent != ''){
                display.textContent = ''
                calculator.operator = e.key //Save operator on object
                calculator.lastNumber = calculator.firstNumber.join('')//Save Number on object
                calculator.firstNumber = [] //return empty array
                calculator.dotCounter = [] //empty dot . counter (1 max)
                console.log(calculator.operator)
                }
                else if (calculator.firstNumber.length > 0)
                {
                    calculator.firstNumber = calculator.firstNumber.join('')
                    let resultFromOperator = calculator.operate(calculator.lastNumber,calculator.operator,calculator.firstNumber)
                    display.textContent = resultFromOperator
                    calculator.lastNumber = resultFromOperator
                    calculator.firstNumber = []
                    calculator.operator = e.key
                    calculator.dotCounter = []
                    console.log(calculator.operator)
                }
                else if (calculator.operator.length > 0 && calculator.lastNumber != ''){
                    calculator.operator = e.key
                    console.log(calculator.operator)
                }
                }
  else if (e.key >=0 && e.key <= 9){
    if (calculator.firstNumber.length > 7) return;
    else{
    calculator.firstNumber.push(e.key)
    display.textContent = calculator.firstNumber.join('')
        }
    }
})

let calculator = {
    nums: [],
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
    return num1/num2
},
operate: function operate(num1,operator,num2){//operate
    if (operator === '+') return add(num1,num2)
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

console.log(calculator.nums) 
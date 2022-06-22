
let num1 = parseInt(prompt("Enter number:"))
let op= prompt("Enter operator:")

let num2 = parseInt(prompt("Enter number:"))

if(op=== "+"){
  alert("Ans:" + (num1+num2))
}else if(op==="-"){
  alert("Ans:" + (num1-num2))
}else if(op==="*"){
  alert("Ans:" + (num1 * num2))
}else if(op==="/"){
  alert("Ans:" + (num1/num2))
}
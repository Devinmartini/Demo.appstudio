let name = "Mary"
let names = ["Mary", "Bob", "Joey"]
alert(`My best freind is ${names[1]}`)

btnShowMessage.onclick=function(){
  alert(`My best freind is ${names[1]}`)
  alert(`The first person in the array is ${names[0]}.`)
  lblMessage.textContent = "I really enjoy " + names[1]
}
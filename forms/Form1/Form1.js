let name = "Mary"
let names = ["Mary", "Bob", "Joey"]
alert(`My best freind is ${names[1]}`)

btnShowMessage.onclick=function(){
  alert(`My best freind is ${names[1]}`)
  lblMessage.textContent = "I really enjoy" + names[1]
}
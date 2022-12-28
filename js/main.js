var  elForm = document.querySelector('.form')


var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var inp3 = document.querySelector('.inp3')
var inp4 = document.querySelector('.inp4')
var inp5 = document.querySelector('.inp5')
var btn = document.querySelector('.btn')

elForm.addEventListener('submit', function(){
    // evn.preventDefault()
     var arr = ['++ Yangi Moshina']
 var obj1 ={
 name: inp1.value,
 marka: inp2.value,
 rang: inp3.value,
 yil: inp4.value,
 poz: inp5.value
 }

 arr.push(obj1)
 console.log(arr);












})







// const para=document.getElementsByClassName('.para')
// console.log(para)

// const para2=document.getElementsByClassName('.para')
// console.log(para2)

// const para3=document.getElementsByClassName('.para')
// console.log(para3)

// let arr=[23,45,235,56,45,3,2]
// arr.forEach((ele)=>console.log(ele))

// const containeer=document.querySelector(".container")
// containeer.innerHTML="<h1>This is a heading</h1>"
// console.log(container)

// const btn=document.queryselector('button')
// btn.classlist.add("btn")
// // btn.classlist.remove("btn")
// // btn.classlist.toggle("btn")
// const click=document.queryselector('#click')
// const stop=document.queryselector('#stop')

// function message(){
//     console.log("You clicked the button")
// }

// click.addEventListener('click',message)
// stop.addEventListener('click',()=>{
//     console.log("You clicked the stop button")
//     click.removeEventListener('click',message)
// })

// const form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
// })
// debugger
// console .log(a)
// // console .log(b)

// var a=678
// let b=567
 
// console .log(a)
// console .log(b) 

// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }

// print() 

// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }           
// function third(){
//     console.trace()
// }
// first()

// setTimeout(()=>{
//     alert("after 3 seconds")                
// },3*1000)

// const timerID=setInterval(()=>{
//     console.log("every 3 seconds")
// },1000)
// setTimeout(()=>{
// clearInterval(timerID)
// },10*1000)  

// const timerID=setInterval(()=>{
//     console.log(timerID)
// })

// console.log(timerID)
// setTimeout(()=>{
// clearInterval(timerID)
// }   

// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

// let count = 1;
// const timerID = setInterval(() => {
//     if(count===10)clearInterval(timerID);
//     console.log(count);
//     count+=1;
// }  , 1000);
const name=document.querySelector('#name')
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener('click',()=>{
    const li=document.createElement('li')
    const dlt=document.createElement('button')
    dlt.innerText="Delete"
    li.innerText=name.value
    dlt.addEventListener('click',()=>{
        list.removeChild(li)
    })

    list.appendChild(li)
    li.appendChild(dlt)
    name.value=""
})
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
// const name=document.querySelector('#name')
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value
//     dlt.addEventListener('click',()=>{
//         list.removeChild(li)
//     })

//     list.appendChild(li)
//     li.appendChild(dlt)
//     name.value=""
// })

// console.log("starting homework..."):

// setTimeout(()=>{
//     console.log("Homework completed!");
//     console.log("starting dinner...");

//     setTimeout(()=>{
//         console.log("Dinner is done!");
//         console.log("getting ready to go out...");

//         setTimeout(()=>{
//             console.log("going to the playground!");
//         },1000);//after  dinner

//     },1500);//dinner time

// },2000);//homework time


// function finishHomework(callback) {
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//         }, 2000);
// }

// function eatDinner (callback) {
//     console.log("Starting dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//         }, 1500);
//     }

// function goToPlayground() {
//     console.log("Going to the playground!");
// }
    
// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     }); 
//  }); 






// function doHomework() {
//     const p=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let done = true; 
//             if (done) {
//                 console.log("Homework is done!");
//                 resolve("Homework is done!");
//             } else {
//                 reject("Homework is not done!");
//             }
//         }, 2000);
//     });
//     return p;
// }

// function eatDinner() {
//     const p=new Promise((resolve) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//             console.log("Dinner is done!");
//             resolve("Dinner is done!");
//           } else {
//             reject("Dinner is not done!");
//           }
//         }, 2000);
//     });
    
// }

// function goToPlayground() {
//     const p=new Promise((resolve, reject) => {
//         setTimeout(() => {
//           let done = true;  
//           if (done) {  
//             console.log("Going to the playground!");
//             resolve("Going to the playground!");
//           } else {  
//             reject("Can't go to the playground!");
//             }
//         }, 2000);
//     });
    
// }   

// doHomework() .then((msg)=>{
//     console.log(msg)
//     return eatDinner();
// })
// .then((msg)=>{
//     console.log(msg)
//     return goToPlayground();
// }) .then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })


// const form=document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(eventTitle.value)
//     console.log(eventDate.value)
//     console.log(category.value)
//     console.log(description.value)
// })


 function orderFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food ordered!");
            resolve()
        },2000)
    })
 }
 function prepareFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food prepare!");
            resolve()
        },2000)
    })
 }
 async function order(){
    await orderFood()
    await prepareFood()
    await deliveredFood()
 }
  
 
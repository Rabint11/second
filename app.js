// const h1 = document.querySelector('h1')
// const button = document.querySelector('button')
// const image = document.querySelector('img')


// button.addEventListener("click",()=>{
//     const abc = new XMLHttpRequest();
//     abc.addEventListener("load",()=>{
//         console.log(abc.response);
//         const res = JSON.parse(abc.responseText)
//         image.src = res.message;
        
//     });
//     abc.open("GET","https://dummyjson.com/users/1");
//     abc.send();
// });

// function makeRequest (method,url, callback){
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.addEventListener("load",()=>{
//         if(xhr.status >= 200 && xhr.status< 300){
//             callback(xhr.response)
//         }
//             else{
//                 console.error("request failed with status",xhr.status)
//             }
//         })
//     xhr.open(method,url);
//     xhr.send()
// }
// makeRequest("GET","https://dummyjson.com/users", (data)=>{
//     console.log(data.users[1].id)
// })

// function makerequest(method,url, callback){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = "json"
//     xhr.addEventListener("load",()=>{
//         if(xhr.status >=200 && xhr.status < 300){
//             callback(xhr.response)
//         }else{
//             console.error("status request failed",xhr.status)
//         }
//     })
//     xhr.open(method,url);
//         xhr.send()
// }
// makerequest("GET","https://dummyjson.com/users",(data)=>{
//     makerequest("GET",`https://dummyjson.com/posts/user/${data.users[0].id}`,(data)=>{
//         makerequest("GEt",`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data)=>{
//             console.log(data.comments)
//         })
//     })
// });


// function makerequest(method, url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.addEventListener("load", () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             callback(xhr.response);
//         } else {
//             console.error("status request failed", xhr.status);
//         }
//     });
//     xhr.open(method, url);
//     xhr.send();
// }

// makerequest("GET", "https://dummyjson.com/users", (data) => {
//     console.log(data);
//     makerequest("GET", `https://dummyjson.com/users/${data.users[5].id}`, (data) => {
//         console.log(data);
//     });
// });


// function person(name, age){
//     this.name = name;
//     this.age = age
// }

// const person1 = new person("rabin",90);
// const person2 = new person("sabin", 89);

// console.log(person2.name);

// const promise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("successfull")
//     }else{
//         reject("not success")
//     }
    
// });

// console.log(promise);

// function person(name,profession,id){
//     this.name = name;
//     this.profession = profession;
//     this.id = id;
// }
// const person1 = new person("rabin","developer",785);
// console.log(person1.profession);

// const mypromise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("it is successful");
//     }else{
//         reject("not successful")
//     }
// })
// console.log(mypromise);

// const promise = new Promise( (resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"rabin thapa"});
//     },8000);
// });


// const resolvebtn = document.querySelector("#resolvebtn");
// const rejectbtn = document.querySelector("#rejectbtn");

// const button = new Promise((resolve, reject)=>{
//     resolvebtn.addEventListener("click",()=>{
//         resolve("promise has resolved")
//     });
//     rejectbtn.addEventListener("click",()=>{
//         reject("promise has rejected")
//     });

// });

// button.then((data)=>{
//     console.log(data)
// });

// button.catch((error)=>{
//     console.log(error)
// });

// button.finally(()=>{
//     console.log("finally")
// })


// function makeRequest(method,url){
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";

//     const promise = new Promise((resolve,reject)=>{
//         xhr.addEventListener("load",()=>{
//             resolve(xhr.response)
//         })
//     })
//     xhr.open(method,url);
//     xhr.send();

//     return promise;
// };

// makeRequest("GET","https://dummyjson.com/users").then((userdata)=>{
//     console.log(userdata);
// })

// fetch('https://dummyjson.com/products',{
//     method: "GET"
// })
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// fetch('https://dummyjson.com/products/add', {
//    method:"POST",
//    headers:{'content-type': 'application/json'},
//    body:JSON.stringify ({
//     title: 'pencil',
//     category: 'stationary'
//    })

//     })
//   .then(res => res.json())
//   .then(console.log);

// async function myRequest(){
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000'
//     const response = await fetch(url)
//     console.log(response)
//     console.log("hello")
// }

// myRequest()

// async function makeAsyncRequest() {
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=1000'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
//   }
  
//   makeAsyncRequest().then((data) => {
//       console.log(data);
//   })

// try{
//     console.log("hello")
// }catch(err){
//     console.log(err)
// }
// console.log(4+3)

// try{
//     let a = 10/0
// }catch(error){
//     console.log("error",error)
// }



// try {
//     let x = 10 / 0; // this will throw an error
//   } catch (error) {
//     console.error("Error:", error); // handle the error
//   }

// const user ={
//     name:"jon",
//     age:56,
//     address:{
//         city:'syd',
        
//     }
// }

// const add = user.address.street?.();
// console.log(add);


// const obj1 = {
//     name:'rabin',
//     id: 234,
//     profession:{
//         city:'syd',
//         street:'45street'
//     }
// };

// const obj2 = {
//     na:'sam',
//     i:794
// };

// const users = {...obj1, ...obj2};
// console.log(users);

// function outer() {
//     let x = 10;
  
//     function inner() {
//       console.log(x); // Accessing the variable x from the outer scope
//     }
  
//     inner(); // Outputs: 10
//   }
  
//   outer();

// const colors = ['red','green','white','purple']

// const newcolor = colors.map((color)=>{
    
//     return color;
// })
// console.log(newcolor);

// const nums = [1,2,3,4,56,7,8];
// const mynums = nums.filter((num)=>{
//     return  num % 2 != 0
   
// })

// console.log(mynums)

// const nums = [4,6,5,3,2]

// const myNums = nums.reduce((acc,cur) => acc + cur,0)
// console.log(myNums)

// const num = [1,2,3,4,54,56,6]

// const someNum = num.some((num)=>{
//     return num > 56
// })
// console.log(someNum)


// const everyNum = num.every((num)=>{
//     return num > 1
// })
// console.log(everyNum);

// function myFun (){
//     console.log(arguments)
// }
// myFun(1,2,3);

// const arrowFun = ()=>{
//     console.log(arguments)
// }
// arrowFun(4,5,6);

// function outer(){
//     const arrowfunction = ()=>{
//         console.log(arguments)
//     }
//     arrowfunction(1,2,3);
// }
// outer("rabin",'thapa');

// const arr1 = [1,2,3];
// const arr2 = [3,4,5,9];
// const arr3 = [...arr1,...arr2]
// console.log(arr3);

// function sum(a,b,c){
//     return a+b+c
// }
// const num = [3,4,5];
// console.log(sum(...num));

// const person ={
//     firstname:'rabin',
//     lastname:'thapa',
//     address:{
//         city:'syd',
//         street:'george'
//     }
// }

// const {address: {city}} = person;



// const parent = document.querySelector('.parent')

// const getchild = parent.children;

// const firstChild = getchild[0].className;
// console.log(firstChild);

// const secondchild = getchild[1].className;
// console.log(secondchild);

// const thirdchild = getchild[2].className;
// console.log(thirdchild);

// let firstChild = parent.firstElementChild;
// let lastChild = parent.lastElementChild;
// console.log(firstChild.className); 
// console.log(lastChild.className);


// const secondChild = document.querySelector('.second')

// const firstsibling = secondChild.previousElementSibling;
// console.log(firstsibling.className);

// const thirdsibling = secondChild.nextSibling;
// console.log(thirdsibling.className);

// const parent = document.querySelector('.parent')

// const first = document.querySelector('.first')
// const second = document.querySelector('.second')

// parent.removeChild(second);

// const button = document.querySelector('.button')

// button.addEventListener('click',()=>{
//     console.log("button clicked")
// })

// function handleForm(event){
//     event.preventDefault()
//     const formData = new formData(form)
//     console.log('form data ', Object.fromEntries(formData))
// }

// function inputChange(event){
//     console.log('input change',event.target.value)
// }
// document.addEventListener("DOMContentLoaded",()=>{

//     const form = document.querySelector('form');
//     form.addEventListener('submit',(event)=>{
//         event.preventDefault();

//         const formData = new FormData(event.target);

//         console.log('form data submitted', Object.fromEntries(formData))
//     })
// })
// document.addEventListener('DOMContentLoaded',()=>{


// const form = document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const formData = new FormData(event.target);

//     console.log('data submitted successfully',Object.fromEntries(formData));
// })
// })

// document.addEventListener("DOMContentLoaded", ()=>{
//     const parent = document.querySelector('.parent')
//     const child = document.querySelector('.child')
//     const grandchild = document.querySelector('.grandchild')


//     parent.addEventListener('click',(e)=>{
//         console.log("parent clicked");
        
//     },true)

//     child.addEventListener('click',(e)=>{
//         console.log("child clicked");
        
//     },true)
    
//     grandchild.addEventListener('click',(e)=>{
//         console.log("grandchild clicked");
       
//     },true)
// })


// const reqUrl = "https://api.github.com/users/hiteshchoudhary"
// const xhr =new  XMLHttpRequest();
// xhr.open("GET",reqUrl);
// xhr.onreadystatechange = function (){
//     console.log(xhr.readyState)
//     if(xhr.readystate === 4){
//         console.log(this.responseText)
//     }
// }
// xhr.send();

// const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl);

// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     console.log(this.responseText);
//   }
// };

// xhr.send();

// function makeRequest(method,url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.responseType = 'json'
//         xhr.open(method,url)
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response)
//             }else{
//                 reject(`Error: ${xhr.status} ${xhr.statusText}`);
//             }
//         }
//         xhr.onerror = function(){
//             reject("request failed")
//         }
//         xhr.send();
//     })
// }
// makeRequest("GET",'https://api.github.com/users/hiteshchoudhary')
// .then((userdata)=>{
//     console.log(userdata)
// })
// .catch((error)=>{
//     console.error("Error: ", error)
// })


// const api = 'https://api.github.com/users/hiteshchoudhary';

// fetch(api)
// .then(response => response.json())
// .then((data) =>{
//     console.log(`name: ${data.name}`)
//     console.log(`location: ${data.location}`)
// })
// .catch(error => console.error('error:',error))

// const api = 'https://api.github.com/user/hiteshchoudhary';

// async function fetchData(){
//     try{
//         const response = await fetch(api);
//         const data = await response.json();
//         console.log(data.id);
//     }
//     catch{
//         console.error("error",error)
//     }
// }
// fetchData();

import { multiply } from "./first.js";

const result = multiply(5,4);
console.log(result);


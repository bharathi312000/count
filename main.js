let count =0;

let scount=document.getElementById("number");
scount.innerText=count

let decresecount=document.getElementById("decrease");
let reset=document.getElementById("reset");
let increasecount=document.getElementById("increase");


increasecount.addEventListener("click",()=>{
    scount.innerText=++count
    reset.addEventListener("click",()=>{
        count=0
       scount.innerText=count 
    }) 
})
decresecount.addEventListener("click",()=>{
    scount.innerText=--count
})





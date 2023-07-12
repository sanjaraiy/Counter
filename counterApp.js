let decBtn=document.getElementsByClassName("Dec");
let incBtn=document.getElementsByClassName("Inc");
let displaycounter=document.getElementsByClassName("Display");
let resetBtn=document.getElementsByClassName("clear-btn");

console.log(decBtn);
console.log(incBtn);
decBtn[0].addEventListener("click", () => {
    const value = Number(displaycounter[0].innerText);
    if (value > 0) {
        displaycounter[0].innerText = value - 1;
    } else {
         alert("Not Allowed");
    }
  });


incBtn[0].addEventListener("click",()=>{
  let value= Number(displaycounter[0].innerText);
  if(value>=10){
    alert("10+ values are not allowed");
  }else{
    displaycounter[0].innerText=value+1;
  }
});

resetBtn[0].addEventListener("click",()=>{
    let value=Number(displaycounter[0].innerText);
    if(value!==0){
        displaycounter[0].innerText=0;
    }
})
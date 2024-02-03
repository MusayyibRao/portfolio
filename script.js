const toggle_btn =document.querySelector('.toggle_btn')
 const toggleIcon =document.querySelector('.toggle_btn i')
 const dropdownmenu =document.querySelector('.dropdown_menu')


console.log(toggle_btn);
    console.log(toggleIcon);
    console.log(dropdownmenu);

    toggle_btn.onclick = function(){
        dropdownmenu.classList.toggle('open')
        const isOpen =dropdownmenu.classList.contains('open')
        console.log(isOpen);
      toggleIcon.classList =isOpen
      ?'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    }


    function menuClose()
    {
      dropdownmenu.classList.toggle('open')
      const isOpen =dropdownmenu.classList.contains('open')
      toggleIcon.classList =isOpen
      ?'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    }
  
    

  // circular bar   

  let number1=document.getElementById("number1");
let number2=document.getElementById("number2");
let number3=document.getElementById("number3");
let number4=document.getElementById("number4");
let number5=document.getElementById("number5");
let number6=document.getElementById("number6");

let counter1 =0;
let counter2 =0;
let counter3 =0;
let counter4 =0;
let counter5 =0;
let counter6 =0;

setInterval(()=>{
 if(counter1==90) {
    clearInterval();
 }  
 else{
counter1+=1;
number1.innerHTML = counter1 +"%"
}
},22);

setInterval(()=>{
    if(counter2==80) {
       clearInterval();
    }  
    else{
   counter2+=1;
   number2.innerHTML = counter2 +"%"
   }
   },25);


   setInterval(()=>{
    if(counter3==75) {
       clearInterval();
    }  
    else{
   counter3+=1;
   number3.innerHTML = counter3 +"%"
   }
   },27)


   setInterval(()=>{
    if(counter4==60) {
       clearInterval();
    }  
    else{
   counter4+=1;
   number4.innerHTML = counter4 +"%"
   }
   },30)


   setInterval(()=>{
    if(counter5==55) {
       clearInterval();
    }  
    else{
   counter5+=1;
   number5.innerHTML = counter5 +"%"
   }
   },35)


   setInterval(()=>{
    if(counter6==50) {
       clearInterval();
    }  
    else{
   counter6+=1;
   number6.innerHTML = counter6 +"%"
   }
   },40);


   

   // contact me form 

   const scriptURL = 'https://script.google.com/macros/s/AKfycbyPWhxXze9Ssn5ApP9Fn-OLHV0PWyI_dqUobfxPoLILKDrPRwSCGJpHrJTciOram4Y/exec'
   const form = document.forms['submit-to-google-sheet']
 
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
       .catch(error => console.error('Error!', error.message))
       alert("Message sucessfully send");
       form.reset();
   })
let get=document.getElementById('getData');
let btns = document.querySelectorAll('button');
let string = "";
let arr = Array.from(btns);

arr.forEach(button => {
 button.addEventListener('click', (x) =>{

 if(x.target.innerHTML=='='){
     string=eval(string).toString();
    get.value=string;
 }
 else if(x.target.innerHTML == 'ac'){
     string="";
     get.value=string;
 }
 else if(x.target.innerHTML=='del'){
     string= string.substring(0, string.length-1);
     get.value=string;
 }
 else {
  string =string+ x.target.innerHTML;
 get.value=string;
  }
    })
})
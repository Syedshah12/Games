const btn1=document.getElementById(`btn1`);
const btn2=document.getElementById(`btn2`);
const btn3=document.getElementById(`btn3`);
const btn4=document.getElementById(`btn4`);
const btn5=document.getElementById(`btn5`);
const btn6=document.getElementById(`btn6`);
const btn7=document.getElementById(`btn7`);
const btn8=document.getElementById(`btn8`);
const btn9=document.getElementById(`btn9`);
const counter=document.getElementById("count");

let count=0;
btn1.onclick=function(){
    if(btn2.innerText==""){
        btn2.innerText=btn1.innerText;
        btn1.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn4.innerText==""){
        btn4.innerText=btn1.innerText;
        btn1.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}
btn2.onclick=function(){
    if(btn5.innerText==""){
        btn5.innerText=btn2.innerText;
        btn2.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn1.innerText==""){
        btn1.innerText=btn2.innerText;
        btn2.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn3.innerText==""){
        btn3.innerText=btn2.innerText;
        btn2.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}
btn3.onclick=function(){
    if(btn2.innerText==""){
        btn2.innerText=btn3.innerText;
        btn3.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn6.innerText==""){
        btn6.innerText=btn3.innerText;
        btn3.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}
btn4.onclick=function(){
    if(btn1.innerText==""){
        btn1.innerText=btn4.innerText;
        btn4.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn7.innerText==""){
        btn7.innerText=btn4.innerText;
        btn4.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn5.innerText==""){
        btn5.innerText=btn4.innerText;
        btn4.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}
btn5.onclick=function(){
    if(btn6.innerText==""){
        btn6.innerText=btn5.innerText;
        btn5.innerText="";
        count+=1;
        counter.innerHTML=`Moves:${count}`;
    }
    if(btn4.innerText==""){
        btn4.innerText=btn5.innerText;
        btn5.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn8.innerText==""){
        btn8.innerText=btn5.innerText;
        btn5.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn2.innerText==""){
        btn2.innerText=btn5.innerText;
        btn5.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}

btn6.onclick=function(){
    if(btn3.innerText==""){
        btn3.innerText=btn6.innerText;
        btn6.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn9.innerText==""){
        btn9.innerText=btn6.innerText;
        btn6.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn5.innerText==""){
        btn5.innerText=btn6.innerText;
        btn6.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
}
 btn7.onclick=function(){
    if(btn4.innerText==""){
        btn4.innerText=btn7.innerText;
        btn7.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn8.innerText==""){
        btn8.innerText=btn7.innerText;
        btn7.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    
}
btn8.onclick=function(){
    if(btn7.innerText==""){
        btn7.innerText=btn8.innerText;
        btn8.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn5.innerText==""){
        btn5.innerText=btn8.innerText;
        btn8.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    } 
    if(btn9.innerText==""){
        btn9.innerText=btn8.innerText;
        btn8.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    
}
btn9.onclick=function(){
    if(btn6.innerText==""){
        btn6.innerText=btn9.innerText;
        btn9.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    if(btn8.innerText==""){
        btn8.innerText=btn9.innerText;
        btn9.innerText="";
        count+=1;
        counter.innerHTML=`Moves: ${count}`;
    }
    
}
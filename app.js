prompt("welcome");
let userSrc=document.querySelector(".numberMy");
let cmpSrc=document.querySelector(".numberCmp");

let Userscore=0;
let cmpscore=0;



let message=document.querySelector(".msg");
let choice=document.querySelectorAll(".image");
// let playgame=()=>{

// };
const update=(a)=>{
    if(a==="user"){Userscore=Userscore+1;userSrc.textContent=Userscore;}
    else{cmpscore=cmpscore+1;cmpSrc.textContent=cmpscore;}
    
};
const generatecmp=()=>{
    const options=["rock","paper","scissor"]
    // Math.random() *3; /*math .random se jitne tk no. generate krna h uske 1 no pehle tk ke no. generate hote h..*/
    const random=Math.floor(Math.random() *3); // this will give +ve numbers.
    return options[random];
};
let checkResult=( i, j)=>{
    if(i===j){
        return "draw";
    }
    else {
        if((i=="rock" && j=="scissor") || (i=="scissor" && j=="paper") || (i=="paper" && j=="rock")){
            return "user";
        }
        else{
            return "computer";
        }
    }
};
const AddhoverEffect=(i)=>{
    const computerChoiceEle=document.querySelector(`.${i}`);     // q ki abhi tk jo bhi select ke=r rahe the vo html ki class ke naam se kr rahe  the  .. or iss baar js ke naam se krna h. Javascript se html me kuch bhi jaana hote h to..`&` ke saath he jaata h..
    computerChoiceEle.classList.add("hovered");
};
const Removehovereffect=(i)=>{
    const computerChoiceEle=document.querySelector(`.${i}`); 
    computerChoiceEle.classList.remove("hovered");
};

showwinner=(result , userChoice , computerChoice)=>{
    if(result==="user"){
        message.innerText=`You: ${userChoice} , Computer: ${computerChoice}, Result: You Win !!!`;
    }
    else if(userChoice === computerChoice){ message.innerText=`You: ${userChoice} , Computer: ${computerChoice} , Result:Draw !!!`;}
    else{
        message.innerText=`You: ${userChoice} , Computer: ${computerChoice} , Result:Computer Win !!!`;
    }
}

choice.forEach((it) => {
    it.addEventListener("click",()=>{
        console.log("choice was clicked");
         const userchoice=it.classList[0]; // It will return the first class of the clicked element
         const computerchoice= generatecmp();
         console.log("Users choice" , userchoice);
         console.log("cmp choice" , computerchoice);
         AddhoverEffect(computerchoice);
         setTimeout(()=>{
            Removehovereffect(computerchoice);
            let result=checkResult( userchoice , computerchoice);
            update(result);
            showwinner(result , userchoice, computerchoice ) ;
         },500);
         
        

    });

});

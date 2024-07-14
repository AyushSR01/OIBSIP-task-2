const frame=document.querySelector('.frame');
const left=document.querySelector('.left');
const right=document.querySelector('.right');
const imgs=document.querySelectorAll('.img');

let sl=1;



right.addEventListener("click" , ()=>{
    if(sl < 3){
        console.log("clicked");
        frame.style.transform=`translateX(-${sl*1100}px)`;
        sl++;
    }
    else{
        frame.style.transform=`translateX(0px)`;
        sl=1;
    }

    
});

left.addEventListener("click" , ()=>{
    if(sl > 1){
        console.log("clicked");
        frame.style.transform=`translateX(-${(sl-2)*1100}px)`;
        sl--;
    }
    else{
        frame.style.transform=`translateX(-${(2*1100)}px)`;
        sl=3;
    }

    
});

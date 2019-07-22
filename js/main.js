"use strict";



let btn = document.querySelector(".s-btn");
let progress = document.querySelector(".s-progress");
let inner = document.querySelector(".s-inner");
let sent = document.querySelector(".s-sent");
let width = 0;

btn.onclick = function()
{
    let timer = setInterval(() => 
    {
        width = width + parseInt(getComputedStyle(inner).width) + 50; //width = 50; 100;
        let result = width; //50; 100
        width = 0;
        inner.style.width = result + "px"; //50px; 150px;
        
        if(inner.style.width === "1000px")
        {
            // return console.log("b");
            progress.style.display = "none";
            sent.classList.remove("d-none");
            clearInterval(timer);
        } 
        
    }, 500);
    
    progress.onmouseover = function()
    {
        clearInterval(timer);
        let cancel = document.querySelector(".s-cancel");
        cancel.classList.remove("d-none");
    }

    progress.onmouseout = function()
    {
        let timer = setInterval(() => 
        {
            width = width + parseInt(getComputedStyle(inner).width) + 50; //width = 50; 100;
            let result = width; //50; 100
            width = 0;
            inner.style.width = result + "px"; //50px; 150px;
            
            if(inner.style.width === "1000px")
            {
                // return console.log("b");
                progress.style.display = "none";
                sent.classList.remove("d-none");
                clearInterval(timer);
            } 
            
        }, 500);
        
        progress.onmouseover = function()
        {
            clearInterval(timer);
            let cancel = document.querySelector(".s-cancel");
            cancel.classList.remove("d-none");
        }
    
        let cancel = document.querySelector(".s-cancel");
        cancel.classList.add("d-none");
    }

    progress.onclick = function()
    {
        clearInterval(timer);
        let cancel = document.querySelector(".s-cancel");
        cancel.classList.add("d-none");

        progress.onmouseover = function()
        {
            let cancel = document.querySelector(".s-cancel");
            cancel.classList.remove("d-block");
        }
        progress.onmouseout = function()
        {
            clearInterval(timer);
        }
    }
}









// width += window.getComputedStyle(inner);
    // inner.style.width = width;
    // width = inner.style.width + 5 + "%";
    // console.log(width);



    // if(inner.style.width === "1000px")
    // {
    //     // return console.log("b");
    //     progress.style.display = "none";
    //     text.classList.remove("d-none");
    // }



    // width = width + parseInt(getComputedStyle(inner).width) + 50; //width = 50; 100;
    // let result = width; //50; 100
    // width = 0; 
    // inner.style.width = result + "px"; //50px; 150px;
    // console.log(inner.style.width);

"use strict";

const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', second);


function second() {
    let body = document.querySelector('body');
    if(body.dataset.theme == "main")
    {
      body.dataset.theme = "second"
    }
    else if(body.dataset.theme == "second")
    {
      body.dataset.theme = "third"
    }
    else if(body.dataset.theme == "third")
    {
      body.dataset.theme = "fourth"
    }
    else{
      body.dataset.theme = "main"
    }
  }
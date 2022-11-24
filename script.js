
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
  const open = document.querySelector('.contact i');
  const modal = document.querySelector('.modal-contact');
  const close = document.querySelector('.modal-contact i');
  const page = document.querySelector('.mainPageMobile')
  open.addEventListener('click', ()=>{
    modal.style.animationName = "open"
    page.style.opacity ="0.5"
  })
  close.addEventListener('click', ()=>{
    modal.style.animationName = "close"
    page.style.opacity ="1"
  })


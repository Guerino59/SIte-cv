
"use strict";
// screen.lockOrientation('portrait');

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
   // on load
  const pp = document.querySelector('.profile');
  const titleM = document.querySelector('.title span:nth-child(1)');
  const titleN = document.querySelector('.title span:nth-child(3)');
   window.addEventListener('load', ()=>
   {
      pp.style.opacity = 1;
      titleM.style.marginLeft = "10px";
      titleN.style.right = "20px";
   })

   let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.5
  }
  
  let observer = new IntersectionObserver(callback, options);
  const passion = document.querySelector('.passion');
  const comp = document.querySelector('.comp');
  const forma = document.querySelector('.forma');
  

  
  observer.observe(passion);
  observer.observe(comp);
  observer.observe(forma);
  
  
  console.log(observer);
  function callback(entries, observer) { 
    entries.forEach(entry => {
      if(entry.isIntersecting)
      entry.target.style.marginLeft = "5vw"
    });
  }
  



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
  const page = document.querySelector('.mainPageMobile');
  const secondP = document.querySelector('.secondPageMobile');
  const project = document.querySelector('.project');
  const discuss = document.querySelector('.discussPage');
  open.addEventListener('click', ()=>{
    modal.style.animationName = "open"
    page.style.opacity ="0.5"
    secondP.style.opacity ="0.5"
    project.style.opacity ="0.5"
    discuss.style.opacity ="0.5"
  })
  close.addEventListener('click', ()=>{
    modal.style.animationName = "close"
    page.style.opacity ="1"
    secondP.style.opacity ="1"
    project.style.opacity ="1"
    discuss.style.opacity ="1"
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
  const proj = document.querySelectorAll('.blockproj');
  observer.observe(passion);
  observer.observe(comp);
  observer.observe(forma);

  function callback(entries, observer) { 
    entries.forEach(entry => {
      if(entry.isIntersecting)
      entry.target.style.marginLeft = "5vw"
    });
  }
  let observproj = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      console.log(entry);
      if(entry.isIntersecting)
      {
        entry.target.style.opacity = "1"
      }
    })
  },options)

  for(const pro of proj)
  {
  observproj.observe(pro);
  }


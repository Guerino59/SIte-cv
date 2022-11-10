
"use strict";



const btn = document.querySelector('nav button');

btn.addEventListener('click', second);


function second() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }
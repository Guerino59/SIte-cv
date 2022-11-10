
"use strict";



document.querySelector('nav button').forEach(item => {
    item.addEventListener('click', second);
})

function second() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }
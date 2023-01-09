"use strict";

// pour chaque lettre creer un span avec la lettre correspondante dedans

export default class Pendu {
  constructor() {
    // selection de tous les boutons
    this.buttons = document.querySelectorAll("button");
    // boucle pour recuperer le contenu de chaque boutons
    this.buttons.forEach((b) => {
      b.addEventListener("click", () => {
        this.letterInWord(b);
        this.result();
      });
    });
    //canvas
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    // fonction reset
    this.restart = document.querySelector('.restart');
    this.restart.addEventListener('click', this.reset.bind(this));
    // selction de mes elements html
    this.nbLetter = document.querySelector(".nbLetter");
    this.essais = document.querySelector(".nbError");
    this.mot = document.querySelector(".mot");
    this.img = document.querySelector(".anim");
    this.smot = document.querySelectorAll(".mot span");
    
    this.resize();
    this.draw();
    //Fetch
    this.url = "./mots.json"
    fetch(this.url).then(this.haFetch.bind(this));
    // variable mot à trouver
    this.findingWord = "";
  }
  //Fetch prenant un mot random dans le fichier ./mot.json
  haFetch(responseText)
  {
    if(responseText.ok)
    {
       responseText.json()
            .then(this.randomWord.bind(this))
            .catch(error=>console.log(error))
    }
    else{
        console.log(responseText.statusText);
    }
 }
 //resize de mon canvas
 resize()
 {
   this.canvas.width = this.img.getBoundingClientRect().width;
   this.canvas.height = this.img.getBoundingClientRect().height; 
 }
 draw(erreur)
 {
  this.ctx.beginPath()
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = 8;
  this.ctx.lineCap = "round";
  this.ctx.moveTo(45, 280)
  this.ctx.lineTo(255, 280)
  this.ctx.moveTo(235, 280)
  this.ctx.lineTo(235, 50)
  this.ctx.lineTo(105, 50)
  this.ctx.stroke()
  if(erreur == 1){  
  this.ctx.lineTo(105, 80)
  this.ctx.stroke()
  }  
  if(erreur == 2){
  this.ctx.beginPath() 
  this.ctx.arc(105, 100, 28, 0, 2*Math.PI)
  this.ctx.fill()
  }
  if(erreur == 3){
  this.ctx.beginPath() 
  this.ctx.moveTo(105, 100)
  this.ctx.lineTo(105, 210)
  this.ctx.stroke()
  }
  if(erreur == 4){ 
  this.ctx.moveTo(105,150)
  this.ctx.lineTo(145, 180)
  this.ctx.stroke()
  }
  if(erreur == 5){ 
  this.ctx.moveTo(105,150)
  this.ctx.lineTo(65, 180)
  this.ctx.stroke()
  }
  if(erreur == 6){ 
  this.ctx.moveTo(105, 210)
  this.ctx.lineTo(135, 250)
  this.ctx.stroke()
  }
  if(erreur == 7){ 
  this.ctx.moveTo(105, 210)
  this.ctx.lineTo(75, 250)
  this.ctx.stroke()
  }
  if(erreur > 7)
  {
    this.ctx.beginPath()
    this.ctx.lineWidth = 4
    this.ctx.strokeStyle = "red"
    this.ctx.moveTo(100, 90)
    this.ctx.lineTo(90, 100)
    this.ctx.moveTo(100, 100)
    this.ctx.lineTo(90, 90)
    this.ctx.moveTo(110, 90)
    this.ctx.lineTo(120, 100)
    this.ctx.moveTo(120, 90)
    this.ctx.lineTo(110, 100)
    this.ctx.stroke()
    
  }
  //

 }
 //fonction permettant d'ajouter les lettres de mon mot dans un tableau "arrLetter"
  push() {
    for (let i = 0; i < this.findingWord.length; i++) {
      this.arrLetter.push(this.findingWord[i]);
    }
  }
// fonction permettant de creer autant de span que de lettre presente dans mon tableau et les remplaçés par des "-"
  create() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.letter = document.createElement("span");
      this.letter.textContent = "-";
      this.mot.append(this.letter);
    }
  }
  // fonction permettant de choisir un mot aleatoirement et declaration de variable + appel des deux fonctions precedentes
  randomWord(data) {
    { 
        this.findingWord = data[Math.floor(Math.random() * data.length)];
        this.arrLetter = [];
        this.nbErr = 0;
        this.nbLetter.textContent = `Mot : ${this.findingWord.length} lettres`;
        this.push();
        this.create();
        
    }
  }
  // verifie a chaque fois qu'un boutton est appuyé si le contenu de mon mot est composé uniquement de lettre
  isStringOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
// fonction permettant de reveler l'entiereté du mot si on perd
  revealFinal() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot[i].textContent = this.arrLetter[i];
    }
  }
// fonction permettant de verifier si on a gagné ou perdu
  result() {
    this.essais.textContent = `${this.nbErr} erreurs`;
    if (this.isStringOnlyLetters(this.mot.textContent)) {
      this.essais.textContent = "C'est gagné !";
      this.essais.style.color = "green";
      this.restart.style.top = "49%"
      this.restart.style.borderColor = "green"
      this.smot.forEach(s=>{s.style.color = "green"})
      for(let i=0; i < this.buttons.length; i++)
    {
    this.buttons[i].style.backgroundColor = "";
    this.buttons[i].style.pointerEvents = "";
    }
      this.nbErr = 0;
      console.log(this.nbErr);
    }
    if (this.nbErr > 7) {
      this.essais.textContent = "C'est perdu !";
      this.essais.style.color = "red";
      this.smot.forEach(s=>{s.style.color = "red"})
      this.revealFinal();
      this.restart.style.top = "49%"
      this.restart.style.borderColor = "red"
      for(let i=0; i < this.buttons.length; i++)
    {
    this.buttons[i].style.backgroundColor = "";
    this.buttons[i].style.pointerEvents = "";
    }
      this.nbErr = 0;
    }
  }
  //fonction se declenchant au clic sur un de mes boutons permettant de verifier si la lettre appuyé est presente ou non dans mon tableau
  letterInWord(e) {
    this.selectedLetters = e.textContent;
    if (!this.arrLetter.includes(this.selectedLetters)) {
      e.style.pointerEvents = "none";
      e.style.backgroundColor = "rgba(204,29,29,0.5)";
      this.nbErr++;
      this.draw(this.nbErr);
      console.log(this.nbErr);
      // this.img.style.background = `url(./img-pendu/Le-Pendu${this.nbErr}.png)`;
      this.img.style.backgroundSize = "cover";
      this.essais.textContent = `${this.nbErr} erreurs`;
    }
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot = document.querySelectorAll(".mot span");
      if (this.selectedLetters === this.arrLetter[i]) {
        this.smot[i].textContent = this.selectedLetters;
        e.style.backgroundColor = "rgba(29,204,66,0.5)";
        e.style.pointerEvents = "none";
      }
    }
  }
  // Fonction permettant de reset le jeu
  reset()
  {
    this.findingWord = "";
    this.arrLetter = [];
    this.nbErr = 0;
    this.essais.textContent = "";
    this.essais.style.color = "";
    this.mot.style.animationName = "";
    this.mot.style.border = "";
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.draw();
    this.img.style.backgroundSize = "";
    this.mot.textContent = "";
    this.restart.style.top = "-50%"
    fetch(this.url).then(this.haFetch.bind(this));
    this.push();
    this.create();
    this.nbLetter.textContent = `Mot : ${this.findingWord.length} lettres`;
  }
}

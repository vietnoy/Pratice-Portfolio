import { randomRGBColor } from "./random color function.js";
const titles = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
    ];

const languages = ['react','javascript','numpy','redux','html','python','mongodb','node','pandas'];

const specialties = document.querySelector('.specialties');
let index1 = 0;

setInterval(() => {
    specialties.style.color = randomRGBColor();
    specialties.innerHTML = languages[index1];
    specialties.style.animationName = 'fading';
    specialties.style.animationDuration = '3s';
    specialties.style.animationIterationCount ='infinite';
    index1 = (index1+1)%languages.length;
},3000);


const icon = document.querySelector('.icon');
const jobs = document.querySelector('.jobs');
let index2 = 0;
setInterval(()=> {
    icon.innerHTML = titles[index2][0];
    jobs.innerHTML = titles[index2][1];
    jobs.style.animationName = 'sliding';
    jobs.style.animationDuration = '3s';
    jobs.style.animationIterationCount = 'infinite';
    index2 = (index2+1)%titles.length;
},3000);


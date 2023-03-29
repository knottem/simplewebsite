"use strict";
import { projects } from "./projects.js";

document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
  if(document.getElementById('projects')){
    projects.forEach(renderProjects);
  }
  
});


function renderProjects(element) {
  const project = document.createElement('li');
  project.classList.add('project');
  project.onclick = () => window.open(element.link, '_blank');
  let projecthtml = `
            <h2 class="sv">${element.titleSv}</h2>
            <h2 class="en">${element.titleEn}</h2>`;
  if (element.video) {
      projecthtml += `
          <video autoplay loop muted>
              <source src="${element.video}" type="video/mp4"> 
          </video>`; 

  } else {
      projecthtml += `<img src="${element.image}" alt="${element.alt}">`;
  }
  projecthtml += `<p class="sv">${element.descriptionSv}</p>
                  <p class="en">${element.descriptionEn}</p>`;

  project.innerHTML = projecthtml;
  
  document.getElementById('projects').appendChild(project);
}


const btnLang = document.getElementById('btnLang');

btnLang.addEventListener('click', () => {
  changeLanguage();
});

const preferredMode = getCookie('preferredMode');
if (preferredMode === 'dark') {
  document.body.classList.add('dark-mode');
} else if (!preferredMode) {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.cookie = 'preferredMode=dark; path=/; max-age=31536000';
  } else {
    document.body.classList.remove('dark-mode');
    document.cookie = 'preferredMode=light; path=/; max-age=31536000';
  }
} else {
  document.body.classList.remove('dark-mode');
}

const modeToggler = document.getElementById('mode-toggler');
modeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const preferredMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  document.cookie = `preferredMode=${preferredMode}; path=/; max-age=31536000`;
});

const preferredLanguage = getCookie('language');
const svElements = document.querySelectorAll('.sv');
const enElements = document.querySelectorAll('.en');
if (preferredLanguage === 'en') {
  for (let i = 0; i < svElements.length; i++) {
    svElements[i].style.display = 'none';
  }
  for (let i = 0; i < enElements.length; i++) {
    enElements[i].style.display = 'block';
  }
} else {
  for (let i = 0; i < svElements.length; i++) {
    svElements[i].style.display = 'block';
  }
  for (let i = 0; i < enElements.length; i++) {
    enElements[i].style.display = 'none';
  }
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

function changeLanguage(){
  const svElements = document.querySelectorAll('.sv');
  const enElements = document.querySelectorAll('.en');
  if (svElements[0].style.display === 'none') {
    for (let i = 0; i < svElements.length; i++) {
      svElements[i].style.display = 'block';
    }
    for (let i = 0; i < enElements.length; i++) {
      enElements[i].style.display = 'none';
    }
    document.cookie = 'language=sv; path=/; max-age=31536000';
  } else {
    for (let i = 0; i < svElements.length; i++) {
      svElements[i].style.display = 'none';
    }
    for (let i = 0; i < enElements.length; i++) {
      enElements[i].style.display = 'block';
    }
    document.cookie = 'language=en; path=/; max-age=31536000';
  }
}
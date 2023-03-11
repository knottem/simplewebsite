document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});

const preferredMode = getCookie('preferredMode');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (preferredMode === 'dark' || isDarkMode) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
  document.cookie = 'preferredMode=light; path=/; max-age=31536000';
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

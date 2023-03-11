document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

const preferredMode = getCookie('preferredMode');
if (preferredMode === 'dark') {
  document.body.classList.add('dark-mode');
} else if (preferredMode === 'light') {
  document.body.classList.remove('dark-mode');
} else {
  if (document.body.classList.contains('dark-mode')) {
    document.cookie = 'preferredMode=dark; path=/; max-age=31536000';
  } else {
    document.cookie = 'preferredMode=light; path=/; max-age=31536000';
  }
}

const modeToggler = document.getElementById('mode-toggler');
modeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const preferredMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  document.cookie = `preferredMode=${preferredMode}; path=/; max-age=31536000`;
});

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
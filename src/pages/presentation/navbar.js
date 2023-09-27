function classToggle() {
    const navs = document.querySelectorAll('Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('iconList'));
  }
  
  document.querySelector('iconList')
    .addEventListener('click', classToggle);
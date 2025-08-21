const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-link');
const menuLink = document.querySelectorAll('.nav-item');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if(value > 800){
    menuBtn.classList.add('mostrar-btn');
    menuBtn.classList.remove('ocultar-btn');
    menuBtn.style.position = 'fixed';
    header.style.backgroundColor = '#12273a3d'
    header.style.backdropFilter = 'blur(2px)'

    if (value > 800 && menuBtn.classList.contains('abrir')) {
      nav.classList.add('ocultar-menu');
      header.style.position = 'fixed'
      header.style.top = '0'
      header.style.back = '0'
    }
  } else {
    menuBtn.classList.add('ocultar-btn');
    menuBtn.classList.remove('mostrar-btn');
    if(menuBtn.classList.contains('cerrar')){
      menuBtn.classList.add('abrir');
      menuBtn.classList.remove('cerrar');
    }
    nav.classList.remove('ocultar-menu');
    nav.classList.remove('mostrar-menu');
    header.style.position = 'absolute'
    header.style.padding = '1rem'
    header.style.backdropFilter = 'none'
    header.style.backgroundColor = 'transparent'
  }

})

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('abrir')) {
    menuBtn.classList.remove('abrir');
    menuBtn.classList.add('cerrar');
    nav.classList.add('mostrar-menu');
    nav.classList.remove('ocultar-menu');
  } else if (menuBtn.classList.contains('cerrar')) {
    menuBtn.classList.remove('cerrar');
    menuBtn.classList.add('abrir');
    nav.classList.remove('mostrar-menu');
    nav.classList.add('ocultar-menu');
  }
})


menuLink.forEach((e) => {
  e.addEventListener('click', e => {
    if (menuBtn.classList.contains('mostrar-btn') && e.target.innerHTML !== 'Inicio') {  
    setTimeout(() => {  
        menuBtn.classList.add('abrir');
        menuBtn.classList.remove('cerrar');
        nav.classList.remove('mostrar-menu');
        nav.classList.add('ocultar-menu');
      }, 800);

    }
  })
})



/****************mobile*****************/
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
/***********************desktop*******************/





/*****************************modal1********************************* */

const modalProfil = document.querySelectorAll('.modal');
const closeModalProfil = document.querySelectorAll('.close_modal_profil');
const btnModalProfil = document.querySelectorAll('.btn_open_profil');

btnModalProfil.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.getAttribute('data-target');
        document.getElementById(modal).style.display = 'block';
    });
});
closeModalProfil.forEach(btn => {
    btn.addEventListener('click', () => {
        let modal = (btn.closest('.modal').style.display = 'none');
        
    });
});

window.onclick = function (e){
    if (e.target.className === 'modal'){
        e.target.style.display = 'none';
    }
};

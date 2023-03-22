
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

let modalProfil1 = document.getElementById("modal1");
let spanModalProfil1 = document.getElementById("btn_close1");
let btnModalProfil1 = document.getElementById("btn_open1");

btnModalProfil1.onclick = function () {
    modalProfil1.style.display = "block";
};

spanModalProfil1.onclick = function() {
    modalProfil1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil1) {
        modalProfil1.style.display = "none";
    }
}

/**********************************modal 2************************** */

let modalProfil2 = document.getElementById("modal2");
let spanModalProfil2 = document.getElementById("btn_close2");
let btnModalProfil2 = document.getElementById("btn_open2");

btnModalProfil2.onclick = function () {
    modalProfil2.style.display = "block";
};

spanModalProfil2.onclick = function() {
    modalProfil2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil2) {
        modalProfil2.style.display = "none";
    }
}

/**********************************modal 3************************** */

let modalProfil3 = document.getElementById("modal3");
let spanModalProfil3 = document.getElementById("btn_close3");
let btnModalProfil3 = document.getElementById("btn_open3");

btnModalProfil3.onclick = function () {
    modalProfil3.style.display = "block";
};

spanModalProfil3.onclick = function() {
    modalProfil3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil3) {
        modalProfil3.style.display = "none";
    }
}
/**********************************modal 4************************** */

let modalProfil4 = document.getElementById("modal4");
let spanModalProfil4 = document.getElementById("btn_close4");
let btnModalProfil4 = document.getElementById("btn_open4");

btnModalProfil4.onclick = function () {
    modalProfil4.style.display = "block";
};

spanModalProfil4.onclick = function() {
    modalProfil4.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil4) {
        modalProfil4.style.display = "none";
    }
}
/**********************************modal 5************************** */

let modalProfil5 = document.getElementById("modal5");
let spanModalProfil5 = document.getElementById("btn_close5");
let btnModalProfil5 = document.getElementById("btn_open5");

btnModalProfil5.onclick = function () {
    modalProfil5.style.display = "block";
};

spanModalProfil5.onclick = function() {
    modalProfil5.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil5) {
        modalProfil5.style.display = "none";
    }
}
/**********************************modal 6************************** */

let modalProfil6 = document.getElementById("modal6");
let spanModalProfil6 = document.getElementById("btn_close6");
let btnModalProfil6 = document.getElementById("btn_open6");

btnModalProfil6.onclick = function () {
    modalProfil6.style.display = "block";
};

spanModalProfil6.onclick = function() {
    modalProfil6.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalProfil6) {
        modalProfil6.style.display = "none";
    }
}


/******************************Form************************************/



const buttonform= document.getElementById("button99");
const closeForm= document.getElementById("close99");
const modalForm=document.getElementById("form99");

buttonform.addEventListener('click', (e)=>{
    e.preventDefault();
    const formName = document.getElementById("name").value;
    const formFirstName = document.getElementById("firstname").value;
    const formEmail = document.getElementById("email").value;
    const formObjet = document.getElementById("objet").value;
    const formMessage = document.getElementById("message").value;

    if (formName !== "" && formFirstName !== "" && formEmail !== "" && formObjet !== ""&& formMessage !== ""){
        alert(`Merci ${formName} pour votre message. L'équipe Nextmove vous répondra dans les plus brefs délais.`);
    }else {
        alert (`Le formulaire est incomplet. L'équipe Nextmove vous remercie de bien vouloir le compléter.`)};
    }
);

closeForm.addEventListener('click', ()=>{
    modalForm.style.display='none';
})

window.onclick=function(e){
    if (e.target.className === 'mainFormBody'){
        modalForm.style.display='none';
    }
}














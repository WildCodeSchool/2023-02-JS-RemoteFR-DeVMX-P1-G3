
/********************Profils content *********************** */

const profils = [
  {
    name:"Nicolas Lopes",
    caracteristiques: "Fédérateur, engagé et disponible Nicolas met à profit son savoir-faire pour atteindre les objectif fixés",
    img:"images/Nicolas1.webp",
    alt:"photo profil Nicolas Lopes",
    modalId:"modal1",
    mail:"lopes_nico@yahoo.fr",
    git:"https://github.com/SEF936",
    linkedin:"https://www.linkedin.com/in/nicolas-lopes-21441478/",
    description:"Issu d'une formation commerciale, j'ai su développer en tant que manager dans la grande distribution mon Leadership  pour federer et atteindre avec mes équipes les objectifs communs. Je suis actuellement en formation diplômante avec « Nextdev » pour devenir Développeur web et web mobile.",
    projet:"A l'issue de la formation je souhaiterais intégrer une entreprise en tant que développeur web / web mobile. Pouvoir mettre à disposition mes compétences techniques en html / CSS / JS / React et MySQL ainsi que mes compétences générales. Je suis également ouvert aux propositions de stages."
  },
  {
    name:"Charlotte Charrier",
    caracteristiques: "Dynamique, motivée et curieuse j'adore travailler en groupe. Cela me pousse à donner le meilleur de moi-même et mener le projet encore plus loin !",
    img:"images/Photo-Charlotte1.webp",
    alt:"photo profil Charlotte Charrier",
    modalId:"modal2",
    mail:"charlotte.charrier97@gmail.com",
    git:"https://github.com/ChaCharrier",
    linkedin:"https://www.linkedin.com/in/charlotte-charrier-81b48215b/",
    description:"Issue d'un bachelor Chef de Projet Événementiel j'ai appris à communiquer et travailler en équipe. Créative, j'apprécie l'UX/UI design mais j'aime encore plus être capable de mettre en application mes idées définitives ! C'est pour cette raison que j'ai intégré la formation “Développeur web et web mobile” chez NextDev !",
    projet:"Suite à la formation j'aimerais poursuivre mes études avec une alternance d'1 an dans une entreprise avec laquelle je partage mes valeurs et où je pourrai mettre à profit mes compétences humaines et professionnelles acquises au cours de mon cursus."
  },
  {
    name:"Alaric Henrot",
    caracteristiques: "Tenace, rigoureux et toujours très impliqué dans ce que je fais, je ne ménage pas mes efforts pour obtenir des résultats.",
    img:"images/Alaric1.webp",
    alt:"photo profil Alaric Henrot",
    modalId:"modal3",
    mail:"alaric.henrot@gmail.com",
    git:"https://github.com/Alaaric",
    linkedin:"https://www.linkedin.com/in/alaric-henrot-34a670227/",
    description:"Suite à une déception en licence de biologie/microbiologie, j'ai enchaîné quelques emplois alimentaires qui m'ont permis de développer ma capacité d'adaptation. L'idée de me former à un métier qui ferait appel à toutes mes capacités ne m'a jamais quitté, c'est pour cela que je suis actuellement en formation développeur web et web mobile.",
    projet:"A l'issue de cette formation j'aimerai approfondir mes connaissances en JS/ PHP et mon expérience avec une alternance. Tout  ceci n'est qu'un premier pas pour m'ouvrir la porte vers l'apprentissage d'une multitude de langages informatiques."
  },
  {
    name:"Anne Louis",
    caracteristiques: "Rigoureuse, persévérante et orientée sur le résultat, j'aime le travail en équipe et échanger les connaissances.",
    img:"images/Photo-Anne.webp",
    alt:"photo profil Anne Louis",
    modalId:"modal4",
    mail:"anne.louis51100@gmail.com",
    git:"https://github.com/AnneL51100",
    linkedin:"https://www.linkedin.com/in/anne-louis-3326b826b/",
    description:"De formation supérieure, j'ai évolué en toute autonomie dans différents environnements internationaux, industriels et marketing exigeants. Fortement intéressée par le développement web full stack, je suis actuellement en formation dans ce domaine.",
    projet:"Après la formation, mon objectif serait de réaliser un stage ou une alternance, afin d'approfondir mes connaissances en HTML, CSS, JavaScript... Je reste à votre disposition et à l'écoute de toute proposition. A titre plus personnel, fortement investie dans le monde associatif, je souhaiterais également réaliser un site Web, pour l’association dans laquelle j'œuvre."
  },
  {
    name:"Jean-Baptiste Noiraud",
    caracteristiques: "Motivé et toujours impliqué dans mon travail afin d'atteindre mon objectif. Le travail en groupe me permet d'avoir un autre point de vue sur moi.",
    img:"images/jean-Baptiste1.webp",
    alt:"photo profil Jean-Baptiste Noiraud",
    modalId:"modal5",
    mail:"jean.noiraud@gmail.com",
    git:"https://github.com/jbaptiste51",
    linkedin:"#",
    description:"Après plusieurs années en licence et en master de japonais, j'ai vécu au Japon pendant deux ans. C'est par un ami que je suis actuellement en formation développeur web et mobile. Mon intérêt pour le dessin et pour les arts en général fait que je préfère travailler le front-end.",
    projet:"J'ai pour projet de continuer en alternance à la fin de ma formation et ainsi intégrer une entreprise en tant que développeur web et mobile. J'ai également des projets plus personnels comme la création d'un site sur l'écriture de la langue japonaise ainsi qu'une application mobile d'apprentissage du japonais. J'aimerais pouvoir utiliser mes connaissances acquises autour du Japon lors de ma licence et de mon master."
  },
  {
    name:"Antoine Gash",
    caracteristiques: "Fédérateur, engagé et disponible Nicolas met à profit son savoir-faire pour atteindre les objectif fixés",
    img:"images/Nicolas1.webp",
    alt:"photo profil Antoine",
    modalId: "modal6",
    mail: "lopes_nico@yahoo.fr",
    git: "https://github.com/SEF936",
    linkedin: "https://www.linkedin.com/in/nicolas-lopes-21441478/",
    description: "Issu d'une formation commerciale, j'ai su développer en tant que manager dans la grande distribution mon Leadership  pour federer et atteindre avec mes équipes les objectifs communs. Je suis actuellement en formation diplômante avec « Nextdev » pour devenir Développeur web et web mobile.",
    projet:"A l'issue de la formation je souhaiterais intégrer une entreprise en tant que développeur web / web mobile. Pouvoir mettre à disposition mes compétences techniques en html / CSS / JS / React et MySQL ainsi que mes compétences générales. Je suis également ouvert aux propositions de stages."
  }
];


/************************************Container Modal Global************************************* */
const containerModals = document.querySelector('.container_modal_profils');

const modalProfilsArray = [];
for (let i = 0; i < profils.length; i++) {
  modalProfilsArray.push(`<div id=${profils[i].modalId} class="modal">
<div class="modal_content_profil">
  <span id="btn_close1" class="close_modal_profil" >&times;</span>
  <div class="container_head_profil">
    <div class="picture_profil_modal">
      <img class="photoNicolas" src=${profils[i].img} alt=${profils[i].alt}/>
      <h2>${profils[i].name}</h2>
      <div class="container_icons">
        <div class="logoreseaux1">
            <a href="${profils[i].git}" target="_blank">
              <i class="fa-brands fa-square-github"></i>
            </a>
        </div>
        <div class="logoreseaux2">
          <a href="${profils[i].linkedin}8" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
      </div>
      <div class="logoreseaux3">
        <a href="mailto:${profils[i].mail}" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
      </div>
    </div>
 
  </div>

  <div class="divider_modal"></div>
  <div class="description_profil_modal">
    <h3>Description</h3>
    <p>${profils[i].description}</p>
  </div>
  <div class="divider_modal"></div>
  <div class="project_profil_modal">
    <h3>Projet</h3>
    <p>${profils[i].projet}</p>
  </div>
</div>
</div>`);
}

containerModals.innerHTML = modalProfilsArray.join(" ");

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
    if (e.target.className === 'modal'){
      e.target.style.display = 'none';
  }
}
/**********************************footer contact*********************************/

    const contact = document.querySelector(".contact");
    const span = document.getElementsByClassName("close")[0];

/* When the user clicks the button, open the modal*/ 
contact.addEventListener("click", () =>{
     modalForm.style.display = "block";
     modalForm.style.animation = "popmodal 2s";
  })


/**************Carousel***************/
const slider = document.querySelector('.gallery');

const cardsArray = [];
for (let i = 0; i < profils.length; i++) {
  cardsArray.push(`<li class="card-container">
  <div class="card-profil card-profil-1" draggable="false">
  <img class="image-profil" src=${profils[i].img} alt="">
  <div class="description-profil">
      <h2 class="title-profil">${profils[i].name}</h2>
      <div class="divider_card"></div>
      <p class="text-profil">${profils[i].caracteristiques}</p>
  </div>
  <button class="btn_open_profil" data-target=${profils[i].modalId}>More</button>
</div>
</li>`)
 
}
slider.innerHTML = cardsArray.join("");


const next = document.getElementById("next-btn");
const previous = document.getElementById("previous-btn");

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

const card = document.querySelector(".card-container");

previous.addEventListener("click", () =>{
  slider.scrollBy({
      top: 0,
      left: -(card.offsetWidth),
      behavior : "smooth"});
  });
  
  next.addEventListener("click", () => {
      slider.scrollBy({
      top: 0,     
      left: card.offsetWidth,     
      behavior : "smooth"});  });


/*****************************modal1********************************* */
      
const modalProfil = document.querySelectorAll('.modal');
const closeModalProfil = document.querySelectorAll('.close_modal_profil');
const btnModalProfil = document.querySelectorAll('.btn_open_profil');

btnModalProfil.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.getAttribute('data-target');
        document.getElementById(modal).style.display = 'block';
        document.getElementById(modal).style.animation = "popmodal 2s";
    });
});
closeModalProfil.forEach(btn => {
    btn.addEventListener('click', () => {
        let modal = (btn.closest('.modal').style.display = 'none');
        
    });
});
/* Show Menu */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');
// remove menu mobile
const navLink = document.querySelectorAll('.nanv__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))
// scroll sections active link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('activr-link')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('activr-link')

        }
    })
}
window.addEventListener('scroll',scrollActive)
// change background header
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
// Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// mixituo filter portfolio
// const mixer = mixitup('.portfolio__container', {
//     selectors: {
//         target: '.portfolio__content'
//     },
//     animation: {
//         duration: 200
//     }
// });
// link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click',activePortfolio))
gsap.from('.home__img',{opacity:0, duration:2 , delay:.5,x:60})

// contact
var btnContact = document.querySelector('.contact__button');
btnContact.addEventListener('click',function(e){
    
    e.preventDefault()
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var messages = document.getElementById('message').value;
    if(name == "" || email == "" || subject == "" || messages ==""){
        alert('Please file the content')
        return;
    }else
    var body = 'name:'+name+'<br/> email:'+email+'<br/> subject:'+subject+'<br/> message:'+messages;

    Email.send({
    SecureToken : "b8f98cba-2511-42c2-a102-9ce2beb3a5cc",
    To : 'rouichaimad@gmail.com',
    From : "rouichaimad@gmail.com",
    Subject : subject,
    Body : body
}).then(
  message => alert("Send Succeful")
);
})


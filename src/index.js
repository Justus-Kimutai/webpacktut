import sembe from './sembe.jpg'
import menuModule from './menu';
import contactModule from './contacts';
import './style.css'

function header(){
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo')
    logo.textContent = 'CHINI YA MNAZI RESTURANT'
    header.appendChild(logo);

    const navList = document.createElement('ul')
    navList.classList.add('nav--list');

    const home = document.createElement('li');
    home.classList.add('nav--item');
    home.classList.add('nav-item--home');
    home.textContent = 'home'
    navList.appendChild(home);
    home.addEventListener('click',()=>{
        contentDiv.textContent = ''
        contentDiv.appendChild(component());
    })

    const menu = document.createElement('li');
    menu.classList.add('nav--item');
    menu.classList.add('nav-item--menu');
    menu.textContent = 'menu'
    navList.appendChild(menu);
    menu.addEventListener('click',()=>{
        contentDiv.textContent = ''
        contentDiv.appendChild(menuModule());
    })

    const contact = document.createElement('li');
    contact.classList.add('nav--item');
    contact.classList.add('nav-item--contact');
    contact.textContent = 'contact'
    navList.appendChild(contact);
    contact.addEventListener('click',()=>{
        contentDiv.textContent = ''
        contentDiv.appendChild(contactModule());
    })

    header.appendChild(navList);

    return header;
}

function component(){
    const landingPage = document.createElement('div');
    landingPage.classList.add('landingPage')
    landingPage.classList.add('container')

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = sembe;
    myIcon.classList.add('landing-img')

    const title = document.createElement('h1');
    title.classList.add('title-text');
    title.textContent = 'Original taste';
    
    const captionText = document.createElement('p');
    captionText.classList.add('caption-text');
    captionText.textContent = `Best Kalenjin dish served since world war 1 Discover the secret that makes Kalenjin hold world record in running sports since the begining of time.`;

    const callToAction = document.createElement('button');
    callToAction.classList.add('callToAction');
    callToAction.textContent = 'Book a shade';

    landingPage.appendChild(myIcon)
    landingPage.appendChild(header())
    landingPage.appendChild(title)
    landingPage.appendChild(captionText)
    landingPage.appendChild(callToAction)

    return landingPage;
}
export default header

const contentDiv = document.getElementById('content');

contentDiv.appendChild(component());


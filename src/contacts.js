import milkingCow from './milkingacow.jpg'
import header from '.';

function contactModule(){
    const contactPage = document.createElement('div');
    contactPage.classList.add('menuPage')
    contactPage.classList.add('container')

    const womanMilking = new Image();
    womanMilking.src = milkingCow;
    womanMilking.classList.add('contact-img')

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contacts')

    const phone = document.createElement('p')
    phone.classList.add('phone')
    phone.textContent = 'Call Now: +254 983 214 578 965'

    const fax = document.createElement('p')
    fax.classList.add('fax')
    fax.textContent = 'fax Now: +2546 8251 4987 5215 7645'

    const eMail = document.createElement('p')
    eMail.classList.add('eMail')
    eMail.textContent = '@notfakeemail.com'

    contactContainer.appendChild(phone)
    contactContainer.appendChild(fax)
    contactContainer.appendChild(eMail)


    contactPage.appendChild(header())
    contactPage.appendChild(womanMilking)
    contactPage.appendChild(contactContainer)

    return contactPage
}

export default contactModule

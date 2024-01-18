import mursik from './mursik.svg'
import ugaliMursik from './ugaliMursik.svg'
import ugaliSukuma from './ugaliSukuma.svg'
import ugaliBeef from './UgaliBeef.svg'
import header from '.'

function menuModule(){
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage')
    menuPage.classList.add('container')

    const foodItemsGrid = document.createElement('div')
    foodItemsGrid.classList.add('food-items--grid')


    //food-item--container
    const foodItemsFlexContainerFirst = document.createElement('div')
    foodItemsFlexContainerFirst.classList.add('flex-item')
    foodItemsFlexContainerFirst.classList.add('flex-item--first')


    //mursik
    const mursikContainer = document.createElement('div')
    mursikContainer.classList.add('food-img')


    const mursikimg = new Image();
    mursikimg.src = mursik;

    const mursikDescription = document.createElement('div')
    mursikDescription.classList.add('food-description')
    mursikDescription.textContent = 'Plain Mursik with charcoal minerals'
   
    const mursikPrice = document.createElement('div')
    mursikPrice.classList.add('food-price')
    mursikPrice.textContent = '70 bob'


    mursikContainer.appendChild(mursikimg)
    mursikContainer.appendChild(mursikDescription)
    mursikContainer.appendChild(mursikPrice)

    //UgaliMursik
    const uMursikContainer = document.createElement('div')
    uMursikContainer.classList.add('food-img')


    const uMursikimg = new Image();
    uMursikimg.src = ugaliMursik;

    const uMursikDescription = document.createElement('div')
    uMursikDescription.classList.add('food-description')
    uMursikDescription.textContent = 'Mursik with Ugali'
   
    const uMursikPrice = document.createElement('div')
    uMursikPrice.classList.add('food-price')
    uMursikPrice.textContent = '110 bob'

    uMursikContainer.appendChild(uMursikimg)
    uMursikContainer.appendChild(uMursikDescription)
    uMursikContainer.appendChild(uMursikPrice)

    foodItemsFlexContainerFirst.appendChild(mursikContainer)
    foodItemsFlexContainerFirst.appendChild(uMursikContainer)

    //food-item--container
    const foodItemsFlexContainer = document.createElement('div')
    foodItemsFlexContainer.classList.add('flex-item')


    //ugaliSukuma
    const ugaliSukumaContainer = document.createElement('div')
    ugaliSukumaContainer.classList.add('food-img')


    const ugaliSukumaimg = new Image();
    ugaliSukumaimg.src = ugaliSukuma;

    const ugaliSukumaDescription = document.createElement('div')
    ugaliSukumaDescription.classList.add('food-description')
    ugaliSukumaDescription.textContent = 'ugali with sukuma'
   
    const ugaliSukumaPrice = document.createElement('div')
    ugaliSukumaPrice.classList.add('food-price')
    ugaliSukumaPrice.textContent = '100 bob'


    ugaliSukumaContainer.appendChild(ugaliSukumaimg)
    ugaliSukumaContainer.appendChild(ugaliSukumaDescription)
    ugaliSukumaContainer.appendChild(ugaliSukumaPrice)

    //ugaliBeef
    const ugaliBeefContainer = document.createElement('div')
    ugaliBeefContainer.classList.add('food-img')


    const ugaliBeefimg = new Image();
    ugaliBeefimg.src = ugaliBeef;

    const ugaliBeefDescription = document.createElement('div')
    ugaliBeefDescription.classList.add('food-description')
    ugaliBeefDescription.textContent = 'Ugali with Beef'
   
    const ugaliBeefPrice = document.createElement('div')
    ugaliBeefPrice.classList.add('food-price')
    ugaliBeefPrice.textContent = '150 bob'


    ugaliBeefContainer.appendChild(ugaliBeefimg)
    ugaliBeefContainer.appendChild(ugaliBeefDescription)
    ugaliBeefContainer.appendChild(ugaliBeefPrice)

    foodItemsFlexContainer.appendChild(ugaliSukumaContainer)
    foodItemsFlexContainer.appendChild(ugaliBeefContainer)

    foodItemsGrid.appendChild(foodItemsFlexContainerFirst)
    foodItemsGrid.appendChild(foodItemsFlexContainer)

    menuPage.appendChild(header());
    menuPage.appendChild(foodItemsGrid)

    return menuPage
}
export default menuModule
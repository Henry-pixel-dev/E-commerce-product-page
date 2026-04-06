const menuBar = document.querySelector('#menuBar');

const navBar = document.querySelector('#nav')
const menuClose = document.querySelector('#menuClose');
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
const hero = document.querySelector('#hero');
const lightBox = document.querySelector('#lightBox');
const closeLightBoxBtn = document.querySelector('#closeLightBox');
const lightPreviousBtn = document.querySelector('#lightPreviouBtn');
const lightNextBtn = document.querySelector('#lightNextBtn');
const lightBoxImage = document.querySelector('#lightBoxImage');
const product1 = document.querySelector('#Product-1');
const product2 = document.querySelector('#product-2');
const product3 = document.querySelector('#product-3');
const product4 = document.querySelector('#product-4');
const lightProduct1 = document.querySelector('#lightProduct1');
const lightProduct2 = document.querySelector('#lightProduct2');
const lightProduct3 = document.querySelector('#lightProduct3');
const lightProduct4 = document.querySelector('#lightProduct4');
const cartDisplay = document.querySelector('#cartDisplay');
const cartImage = document.querySelector('#cartImage');
const checkoutBtn = document.querySelector('#checkoutBtn');
const cartDeleteBtn = document.querySelector('#cartDeleteBtn');
const minusBtn = document.querySelector('#minusBtn');
const plusBtn = document.querySelector('#plusBtn');
const calDisplay = document.querySelector('#calDisplay');
const addToCartBtn = document.querySelector('#addToCartBtn');
const cartMenu = document.querySelector('#cartMenu');

let currentIndex = 1;
let currentLightBoxIndex = 1;
let cartQuantity = 0;

function updateNextButtons() {
    if (currentIndex === 1) {
        currentIndex++;
        hero.style.backgroundImage = "url('images/image-product-2.jpg')";
    } else if (currentIndex === 2) {
        currentIndex++;
        hero.style.backgroundImage = "url('images/image-product-3.jpg')";
    } else if (currentIndex === 3) {
        currentIndex++;
        hero.style.backgroundImage = "url('images/image-product-4.jpg')";
        
    }else if (currentIndex === 4) {
        currentIndex = 1;
        hero.style.backgroundImage = "url('images/image-product-1.jpg')";
    }
}

function updatePreviousButtons() {
    if (currentIndex === 1) {
        currentIndex = 4;
        hero.style.backgroundImage = "url('images/image-product-4.jpg')";
    } else if (currentIndex === 2) {
        currentIndex = 1;
        hero.style.backgroundImage = "url('images/image-product-1.jpg')";
    } else if (currentIndex === 3) {
        currentIndex = 2;
        hero.style.backgroundImage = "url('images/image-product-2.jpg')";
    } else if (currentIndex === 4) {
        currentIndex = 3;
        hero.style.backgroundImage = "url('images/image-product-3.jpg')";
    }
}


function updateLightPreviousButtons() {
    if (currentLightBoxIndex === 1) {
        currentLightBoxIndex = 4;
        lightBoxImage.src = "images/image-product-4.jpg";
    } else if (currentLightBoxIndex === 2) {
        currentLightBoxIndex = 1;
        lightBoxImage.src = "images/image-product-1.jpg";
    } else if (currentLightBoxIndex === 3) {
        currentLightBoxIndex = 2;
        lightBoxImage.src = "images/image-product-2.jpg";
    } else if (currentLightBoxIndex === 4) {
        currentLightBoxIndex = 3;
        lightBoxImage.src = "images/image-product-3.jpg";
    }
}

function updateLightNextButtons() {
    if (currentLightBoxIndex === 1) {
        currentLightBoxIndex++;
        lightBoxImage.src = "images/image-product-2.jpg";
    } else if (currentLightBoxIndex === 2) {
        currentLightBoxIndex++;
        lightBoxImage.src = "images/image-product-3.jpg";
    } else if (currentLightBoxIndex === 3) {
        currentLightBoxIndex++;
        lightBoxImage.src = "images/image-product-4.jpg";
    } else if (currentLightBoxIndex === 4) {
        currentLightBoxIndex = 1;
        lightBoxImage.src = "images/image-product-1.jpg";
    }
}


function updateThumbnailImages() {
    if (currentIndex === 1) {
        hero.style.backgroundImage = "url('images/image-product-1.jpg')";
    } else if (currentIndex === 2) {
        hero.style.backgroundImage = "url('images/image-product-2.jpg')";
    } else if (currentIndex === 3) {
        hero.style.backgroundImage = "url('images/image-product-3.jpg')";
    } else if (currentIndex === 4) {
        hero.style.backgroundImage = "url('images/image-product-4.jpg')";
    }
}


function updateLightThumbnailImages() {
    if (currentLightBoxIndex === 1) {
        lightBoxImage.src = "images/image-product-1.jpg";
    } else if (currentLightBoxIndex === 2) {
        lightBoxImage.src = "images/image-product-2.jpg";
    } else if (currentLightBoxIndex === 3) {
        lightBoxImage.src = "images/image-product-3.jpg";
    } else if (currentLightBoxIndex === 4) {
        lightBoxImage.src = "images/image-product-4.jpg";
    }
}



menuBar.addEventListener('click', () => {
    navBar.classList.remove('hidden')
})
menuClose.addEventListener('click', () => {
    navBar.classList.add('hidden')
})

previousBtn.addEventListener('click', () => {
    updatePreviousButtons();
})

nextBtn.addEventListener('click', () => {
    updateNextButtons();
})

lightPreviousBtn.addEventListener('click', () => {
    updateLightPreviousButtons();
})

lightNextBtn.addEventListener('click', () => {
    updateLightNextButtons();
})  

hero.addEventListener('click', () => {
    if (window.getComputedStyle(previousBtn).display !== "none") {
        return;
    } else {
        lightBox.classList.remove('hidden');
        lightBox.style.display = "block";
    }
});


closeLightBoxBtn.addEventListener('click', () => {
    lightBox.style.display = "none";
})

product1.addEventListener('click', () => {
    currentIndex = 1;
    updateThumbnailImages();
})

product2.addEventListener('click', () => {
    currentIndex = 2;
    updateThumbnailImages();
})

product3.addEventListener('click', () => {
    currentIndex = 3;
    updateThumbnailImages();
})

product4.addEventListener('click', () => {
    currentIndex = 4;
    updateThumbnailImages();
})

lightProduct1.addEventListener('click', () => {
    currentLightBoxIndex = 1;
    updateLightThumbnailImages();
})

lightProduct2.addEventListener('click', () => {
    currentLightBoxIndex = 2;
    updateLightThumbnailImages();
})

lightProduct3.addEventListener('click', () => {
    currentLightBoxIndex = 3;
    updateLightThumbnailImages();
})

lightProduct4.addEventListener('click', () => {
    currentLightBoxIndex = 4;
    updateLightThumbnailImages();
})  

plusBtn.addEventListener('click', () => {
    cartQuantity++;
    calDisplay.textContent = cartQuantity;
})

minusBtn.addEventListener('click', () => {
    if (cartQuantity > 0) {
        cartQuantity--;
        calDisplay.textContent = cartQuantity;
    }
});



function showCart() {
    if (currentIndex === 1 && cartQuantity > 0) {
        cartImage.src = "images/image-product-1-thumbnail.jpg";
    } else if (currentIndex === 2 && cartQuantity > 0) {
        cartImage.src = "images/image-product-2-thumbnail.jpg";
        
    } else if (currentIndex === 3 && cartQuantity > 0) {

        cartImage.src = "images/image-product-3-thumbnail.jpg";
    }   else if (currentIndex === 4 && cartQuantity > 0) {
        cartImage.src = "images/image-product-4-thumbnail.jpg";
    }


}

function hideCart() {
    cartMenu.style.display = "none";
    checkoutBtn.style.display = "none";
}


addToCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartDisplay.classList.toggle('hidden');
    if (cartQuantity > 0) {
        showCart();
        cartMenu.style.display = "flex";
        checkoutBtn.style.display = "block";
    } else {
        hideCart();
    }
})
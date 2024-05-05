// Part of drop down list
let header = document.querySelector('header');
let downList = document.querySelector('button.fa-bars');
let closeBox = document.querySelector('button.fa-xmark');
let crossMark = document.querySelectorAll('button.fa-xmark')[1];
let navList = document.querySelector('div#nav-list');
// Part of cart shopping
let shoppingCart = document.querySelector('button.fa-cart-shopping')
let notificNums = document.querySelector('header section button b');
let cartEmpty = document.querySelector('div#cart-empty');
let cartFill = document.querySelector('div#cart-fill');
let numsProductSelected = document.querySelector('#cart-fill div p span');
let totalPrice = document.querySelector('#cart-fill div p b');
let deleteBtn = document.querySelector('button.fa-trash-can');
// Part of changing images
let main = document.querySelector('main');
let leftArrowBox = document.querySelector('button.fa-chevron-left');
let leftArrow = document.querySelectorAll('button.fa-chevron-left')[1];
let rightArrowBox = document.querySelector('button.fa-chevron-right');
let rightArrow = document.querySelectorAll('button.fa-chevron-right')[1];
let productImgBox = document.querySelector(`.container section img`);
let productImg = document.querySelector(`main section img`);
let secImagesDiv = document.querySelector('div.images');
let imagesDiv = document.querySelectorAll('div.images')[1];
let lightbox = document.querySelector('section#lightbox');
// Number of products Section
let minus = document.querySelector('#nums-product button');
let sum = document.querySelectorAll('#nums-product button')[1];
let numsProduct = document.querySelector('#nums-product b');
let addToCart = document.querySelectorAll('#nums-product button')[2];

// To show nav list [Phone]
downList.onclick = () => {
  navList.style.display = 'block';
  hideElements();
}

// To cancel showing nav list [Phone]
crossMark.onclick = () => {
  navList.style.display = 'none';
  appearElements();
}

// Styles of elements when hide nav list
function hideElements() {
  document.body.style.backgroundColor = '#696969';
  document.querySelector('header section img').style.filter = 'brightness(50%)';
  header.style.backgroundColor = '#808080';
  main.style.filter = 'brightness(50%)';
}

// Styles of elements when apper nav list
function appearElements() {
  document.body.style.backgroundColor = '#b6bcc8';
  document.querySelector('header section img').style.filter = 'brightness(100%)';
  header.style.backgroundColor = '#fff';
  main.style.filter = 'brightness(100%)';
}

// Changing Source of Images 
let index = 0;
let imagesSrc = [
  'images/image-product-1.jpg', 'images/image-product-2.jpg',
  'images/image-product-3.jpg', 'images/image-product-4.jpg'
];
// Function of the right arrow button 
function rightArrowDir(right, left) {
  ++index;
  if (index > 3) {
    right.disabled = true;
  }
  else {
    left.disabled = false;
    right.disabled = false;
    if (right === rightArrow) {
      productImg.src = imagesSrc[index];
    }
    else {
      productImgBox.src = imagesSrc[index];
    }
  }
  checkIncrease(index, right);
}

// Function of the left arrow button 
function leftArrowDir(right, left) {
  --index;
  if (index < 0) {
    left.disabled = true;
  }
  else {
    right.disabled = false;
    left.disabled = false;
    if (right === rightArrow) {
      productImg.src = imagesSrc[index];
    }
    else {
      productImgBox.src = imagesSrc[index];
    }
  }
  checkDecrease(index, left);
}

// Check increase of index
function checkIncrease(index, right) {
  ++index;
  if (index === 4) {
    right.disabled = true;
  } else right.disabled = false;
}

// Check decrease of index
function checkDecrease(index, left) {
  --index;
  if (index === -1) {
    left.disabled = true;
  } else left.disabled = false;
}

// Active small images of the lightbox when clicked on right or left arrow buttons
function lightboxActiveImgs() {
  let arr2 = Array.from(secImagesDiv.children);
  arr2.forEach(e => {
    if (e.classList.contains('active')) {
      e.classList.remove('active');
    }
    if (arr2.indexOf(e) === index) {
      e.classList.add('active');
    }
  })
}
// Buttons that apper in small screen [Phone Sceen]
rightArrow.onclick = () => { rightArrowDir(rightArrow, leftArrow) };
leftArrow.onclick = () => { leftArrowDir(rightArrow, leftArrow) };

// Buttons that apper in lightbox [Desktop Screen]
rightArrowBox.onclick = () => {
  rightArrowDir(rightArrowBox, leftArrowBox);
  lightboxActiveImgs();
};
leftArrowBox.onclick = () => {
  leftArrowDir(rightArrowBox, leftArrowBox);
  lightboxActiveImgs();
};

// Increase and decrease the amount of product
minus.onclick = () => {
  if (+numsProduct.textContent > 0) {
    numsProduct.textContent = +numsProduct.textContent - 1;
  }
}
sum.onclick = () => {
  numsProduct.textContent = +numsProduct.textContent + 1;
}

// Add to cart button
addToCart.onclick = () => {
  if (numsProduct.textContent != 0) {
    notificNums.style.display = 'block';
    notificNums.textContent = numsProduct.textContent;
    numsProductSelected.textContent = numsProduct.textContent;
    totalPrice.textContent = (+numsProduct.textContent * 125.00).toFixed(2);
  }
  else {
    notificNums.style.display = 'none';
  }
}

// Shooping Cart Icon
shoppingCart.onclick = () => {
  if (shoppingCart.classList.contains('active')) {
    shoppingCart.classList.remove('active');
    cartEmpty.style.display = 'none';
    cartFill.style.display = 'none';
  }
  else {
    shoppingCart.classList.add('active');
    if (+numsProduct.textContent === 0) {
      cartEmpty.style.display = 'block';
      cartFill.style.display = 'none';
    }
    else {
      cartEmpty.style.display = 'none';
      cartFill.style.display = 'block';
    }
  }
}

// Delete Icon that in case of fill cart
deleteBtn.onclick = () => {
  cartFill.style.display = 'none';
  notificNums.style.display = 'none';
  cartEmpty.style.display = 'block';
  numsProduct.textContent = 0;
}

// Change the source of product image
function chengImages(array) {
  let arr = Array.from(array.children);
  arr.forEach(e => {
    e.onclick = () => {
      arr.forEach(ele => {
        if (ele.classList.contains('active')) {
          ele.classList.remove('active');
        }
      })
      e.classList.add('active');
      if (array === imagesDiv) {
        productImg.src = imagesSrc[arr.indexOf(e)];
      }
      else {
        productImgBox.src = imagesSrc[arr.indexOf(e)];
      }
    }
  })
}
chengImages(secImagesDiv);
chengImages(imagesDiv);

// Show and hide the lightbox
if (window.innerWidth >= 800) {
  productImg.onclick = () => {
    lightbox.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(0, 0, 0, 0.7)';
  }
  closeBox.onclick = () => {
    lightbox.style.display = 'none';
    document.body.style.backgroundColor = '#fff';
  }
}
else {
  lightbox.style.display = 'none';
}
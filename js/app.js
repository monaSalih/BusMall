'use strict'
//////////////html element
let divConta = document.getElementById('imgContan')
let leftEle = document.getElementById('image1')
let cenEle = document.getElementById('image2')
let rigEle = document.getElementById('image3')
let ulResult = document.getElementById('ulContan');
let butResult = document.getElementById('result');




//////////////////constructor
let busMallIimg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
let mallProduct = []
let maxEtration = 15;
let minEtration = 0;

function BusMallCons(proName) {
    this.productName = proName.split('.'[0]);
    this.imageBath = `busImags/` + proName;
    this.imageShow = 0;
    this.imageClick = 0;
    // this.proClick = itemClick;
    // this.
    mallProduct.push(this)

}

function randomProduct() {

    return Math.floor(Math.random() * mallProduct.length);

}

console.log('all product',mallProduct);
///newObject
for (let i = 0; i < busMallIimg.length; i++) {
    new BusMallCons(busMallIimg[i])

}
console.log(mallProduct);


let imageL;
let imageR;
let imageC;
function imageRender() {
    imageL = randomProduct();
    imageR = randomProduct();
    imageC = randomProduct();

    while (imageL === imageR || imageL === imageC || imageC === imageR || imageL === imageC) {
        imageL = randomProduct();
        imageC = randomProduct();
        imageR = randomProduct();


    }


    /////setAtrribute
    leftEle.setAttribute('src', mallProduct[imageL].imageBath)
    cenEle.setAttribute('src', mallProduct[imageC].imageBath)
    rigEle.setAttribute('src', mallProduct[imageR].imageBath)

    leftEle.setAttribute('alt', mallProduct[imageL].imageBath)
    cenEle.setAttribute('alt', mallProduct[imageC].imageBath)
    rigEle.setAttribute('alt', mallProduct[imageR].imageBath)

    leftEle.setAttribute('title', mallProduct[imageL].imageBath)
    cenEle.setAttribute('title', mallProduct[imageC].imageBath)
    rigEle.setAttribute('title', mallProduct[imageR].imageBath)

    mallProduct[imageL].imageShow++;
    mallProduct[imageC].imageShow++;
    mallProduct[imageR].imageShow++;

}

// randomProduct()
imageRender()

////html debug
let result = 0
leftEle.addEventListener('click', calcutClickSh)
cenEle.addEventListener('click', calcutClickSh)
rigEle.addEventListener('click', calcutClickSh)


function calcutClickSh(event) {
    if (minEtration <= maxEtration) {
        let imageTarget = event.target.id;

        if (imageTarget == 'image1') {
            // result++

            mallProduct[imageL].imageClick++
        }
        else if (imageTarget == 'image2') {
            // result+=2
            mallProduct[imageC].imageClick++
        }
        else if (imageTarget == 'image3') {
            // result+=5
            mallProduct[imageR].imageClick++
        }

    } else {
alert('yoy are finish your Etiration click on button to see the rsult')
        
        leftEle.removeEventListener('click', calcutClickSh)
        cenEle.removeEventListener('click', calcutClickSh)
        rigEle.removeEventListener('click', calcutClickSh)
    }
    minEtration++;
    console.log(mallProduct);
    imageRender()
}
// calcutClickSh();
divConta.addEventListener('click',seeRsult)
function seeRsult(){
    for (let r = 0; r < mallProduct.length; r++) {
        let liResult = document.createElement('li');
        liResult.textContent = `${(mallProduct[r].productName)[0]} had clicked:${mallProduct[r].imageClick}, and was seen ${mallProduct[r].imageShow} times`;
        ulResult.appendChild(liResult);
    }


}



//     for (let i = 0; i < 25; i++) { 
//     if (imageL === imageR && imageL === imageC) {

//         imageL = randomProduct(0, mallProduct.length);

//     } else if (imageC === imageR && imageL === imageC) {

//         imageC = randomProduct(0, mallProduct.length);imageR = randomProduct(0, mallProduct.length);

//     } else if (imageR === imageL && imageR === imageC) {

//         imageR = randomProduct(0, mallProduct.length);

//     }
// }
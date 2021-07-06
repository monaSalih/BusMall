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
let maxEtration = 5;
let minEtration = 0;

let imageArray = []
let produChar = []
let imageVeiw = [];
let imageChose = [];
// let voteNumber=[];
// let clickNumber=[]

function BusMallCons(proName) {
    this.productName = proName.split('.');
    this.imageBath = `busImags/` + proName;
    this.imageShow = 0;
    this.imageClick = 0;
    // this.proClick = itemClick;
    // this.
    mallProduct.push(this)
    produChar.push(this.productName[0])

}

function randomProduct() {

    return Math.floor(Math.random() * mallProduct.length);

}

console.log('all product', mallProduct);
///newObject
for (let i = 0; i < busMallIimg.length; i++) {
    new BusMallCons(busMallIimg[i])

}
console.log(mallProduct);


let imageL;
let imageR;
let imageC;
function imageRender() {
    // imageL = randomProduct();
    // imageR = randomProduct();
    // imageC = randomProduct();
    do {
        imageL = randomProduct();
        imageC = randomProduct();
        imageR = randomProduct();
         
        
    } while (imageL === imageR || imageL === imageC || imageC === imageR || imageL === imageC ||imageArray.includes(imageL)||imageArray.includes(imageC)|| imageArray.includes(imageR));

    // while  {
    // }
        imageArray=[imageL,imageC,imageR]
        // imageArray.push(imageL,imageC,imageR)



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
readStorageItem()
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
    storageItem();
    // callChart() 
}
// calcutClickSh();
//////////////local Storage
function storageItem(){
    let itemProduct=JSON.stringify(mallProduct);
    console.log(itemProduct,'string');
    localStorage.setItem('productMall',itemProduct)

}
// storageItem();
function readStorageItem(){
    let itemStore=localStorage.getItem('productMall')
    // console.log(productMall,'store');
    let objectStore=JSON.parse(itemStore)

    // if(objectStore){
    //         produChar=objectStore;
    //         imageRender()
    //         }
    if (objectStore!==null){
        mallProduct=objectStore;

    }
    // imageRender()
 }
 readStorageItem()

          


//////////////chartFunction

function callChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: produChar,
            datasets: [{
                label:  '# of view',
                data: imageVeiw,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }, {
                label:'# of clicks',
                data: imageChose,
                backgroundColor: [
                    '#C6B4CE',
                ],
                borderColor: [
                    '#BB8760',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}


//////////////chartFunction
butResult.addEventListener('click', show_ul)
let btnResul;
function show_ul() {

    for (let r = 0; r < mallProduct.length; r++) {
        let liResult = document.createElement('li');
        liResult.textContent = `${(mallProduct[r].productName)[0]} had clicked:${mallProduct[r].imageClick}, and was seen ${mallProduct[r].imageShow} times`;
        ulResult.appendChild(liResult);
        imageVeiw.push(mallProduct[r].imageShow);
        imageChose.push(mallProduct[r].imageClick)
        console.log(imageChose[r], 'array');

    }
    butResult.removeEventListener('click', show_ul)
    callChart()
}

/////////////////////clear Button
// let clearButton=document.getElementById('clear')
// clearButton.addEventListener('click',clearLStorage)
// function clearLStorage(){
//     localStorage.clear();
  
// }



// show_ul()

//     for (let i = 0; i < 25; i++) { 
//     if (imageL === imageR && imageL === imageC) {

//         imageL = randomProduct(0, mallProduct.length);

//     } else if (imageC === imageR && imageL === imageC) {

//         imageC = randomProduct(0, mallProduct.length);imageR = randomProduct(0, mallProduct.length);

//     } else if (imageR === imageL && imageR === imageC) {

//         imageR = randomProduct(0, mallProduct.length);

//     }
// }
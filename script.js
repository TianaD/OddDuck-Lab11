// global variables

let imageContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let clicks = 0;
let maxClicksAllowed = 24;

// State object holds the holds the current state of the application (all existing Images)
const state = {
  allImagesArray: [],
};

// functional logic

function Image(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allImagesArray.length);
}

function renderImages() {
  // call the getRandomNumber
  let images1 = getRandomNumber();
  let images2 = getRandomNumber();
  let images3 = getRandomNumber();

  while (images1 === images2 || images3 === images2 || images1 === images3) {
    images2 = getRandomNumber();
    images3 = getRandomNumber(); 
  }

  image1.src = state.allImagesArray[images1].src;
  image2.src = state.allImagesArray[images2].src;
  image3.src = state.allImagesArray[images3].src;
  
  image1.alt = state.allImagesArray[images1].name;
  image2.alt = state.allImagesArray[images2].name;
  image3.alt = state.allImagesArray[images3].name;

  state.allImagesArray[images1].views++;
  state.allImagesArray[images2].views++;
  state.allImagesArray[images3].views++;
}

//events are things that happen in the browser
function handleImageClick(event) {
  if (event.target === imageContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickImages = event.target.alt;
  for (let i = 0; i < state.allImagesArray.length; i++) {
    if (clickImages === state.allImagesArray[i].name) {
      state.allImagesArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    imageContainer.removeEventListener('click', handleImageClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    imageContainer.className = 'no-voting';
  } else {
    renderImages();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allImagesArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${state.allImagesArray[i].name} had ${state.allImagesArray[i].views} view and was clicked ${state.allImagesArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}


// executable code
let bag = new Image('bag', './assets/bag.jpg');
let banana = new Image('banana', './assets/banana.jpg');
let bathroom = new Image('bathroom', './assets/bathroom.jpg');
let boots = new Image('boots', './assets/boots.jpg');
let breakfast = new Image('breakfast', './assets/breakfast.jpg');
let bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
let chair = new Image('chair', './assets/chair.jpg');
let cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
let dogDuck = new Image('dogDuck', './assets/dog-duck.jpg');
let dragon= new Image('dragon', './assets/dragon.jpg');
let pen = new Image('pen', './assets/pen.jpg');
let petSweep = new Image('petSweep', './assets/pet-sweep.jpg');
let scissors = new Image('scissors', './assets/scissors.jpg');
let shark = new Image('shark', './assets/shark.jpg');
let sweep = new Image('sweep', './assets/sweep.png');
let tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
let unicorn = new Image('unicorn', './assets/unicorn.jpg');
let waterCan = new Image('waterCan', './assets/water-can.jpg');
let wineGlass = new Image('wineGlass', './assets/wine-glass.jpg');
state.allImagesArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImages();

imageContainer.addEventListener('click', handleImageClick);


























// Stashed Changes
// // global variables

// let imageContainer = document.querySelector('section');
// @ -5,6 +48,7 @@ let resultButton = document.querySelector('section + div');
// let image1 = document.querySelector('section img:first-child');
// let image2 = document.querySelector('section img:nth-child(2)');
// let image3 = document.querySelector('section img:nth-child(3)');
// let currentImageIndexes = [];

// let clicks = 0;
// let maxClicksAllowed = 24;
// @ -16,15 +60,25 @@ const state = {

// // functional logic

// function Image(name, src) {
// function Items(name, src) {
//   this.name = name;
//   this.src = src;
//   this.views = 0;
//   this.clicks = 0;
// }

// //modify function to generate random iteration different from previous iteration
// function getRandomNumber() {
//   return Math.floor(Math.random() * state.allImagesArray.length);
//   let randomIndex = Math.floor(Math.random() * state.allImagesArray.length);
//   // if (randomIndex == currentImageIndexes[0]){
//   //   randomIndex = Math.floor(Math.random() * state.allImagesArray.length);
//   // } else if (randomIndex == currentImageIndexes[1]){
//   //   randomIndex = Math.floor(Math.random() * state.allImagesArray.length);
//   // } else if (randomIndex == currentImageIndexes[2]){
//   //   randomIndex = Math.floor(Math.random() * state.allImagesArray.length);
//   // }
//     console.log(currentImageIndexes);
//     // console.log(randomIndex);
//   return randomIndex
// }

// function renderImages() {
// @ -32,12 +86,49 @@ function renderImages() {
//   let images1 = getRandomNumber();
//   let images2 = getRandomNumber();
//   let images3 = getRandomNumber();
//   currentImageIndexes.push(images1, images2, images3);
  

//   while (images1 === images2 || images3 === images2 || images1 === images3) {
//     images2 = getRandomNumber();
//     images3 = getRandomNumber(); 
//   while (images1 === images2 || images2 === images3 || images1 === images3) {
//     if (images1 === images2){
//       for (let i = 0; i < currentImageIndexes.length; i++) {
//         const element = currentImageIndexes[i];
//         if (element !== images1){
//           images1 = getRandomNumber(state.allImagesArray)
          
//         }
        
//       }console.log("I ran: one!")
//       images1 = getRandomNumber(state.allImagesArray)
//     }else if (images2 === images3){
//       for (let i = 0; i < currentImageIndexes.length; i++) {
//         const element = currentImageIndexes[i];
//         if (element !== images2){
//           images2 = getRandomNumber(state.allImagesArray)
         
//         }
        
//       } console.log("I ran: two!")
//       images2 = getRandomNumber(state.allImagesArray)
//     }else if (images3 === images1){
//       for (let i = 0; i < currentImageIndexes.length; i++) {
//         const element = currentImageIndexes[i];
//         if (element !== images3){
//           images3 = getRandomNumber(state.allImagesArray)
         
//         }
        
//       } console.log("I ran: three!")
//       images3 = getRandomNumber(state.allImagesArray)
//     }else console.log("Error!")
      
    
//     // images2 = getRandomNumber();
//     // images3 = getRandomNumber(); 
//   }



//   image1.src = state.allImagesArray[images1].src;
//   image2.src = state.allImagesArray[images2].src;
//   image3.src = state.allImagesArray[images3].src;
// @ -66,15 +157,71 @@ function handleImageClick(event) {
//   }
//   if (clicks === maxClicksAllowed) {
//     imageContainer.removeEventListener('click', handleImageClick);
//     // give the button an event lister and styles so the user
//     // knows its an active button:
//     resultButton.addEventListener('click', renderResults);
//     resultButton.className = 'clicks-allowed';
//       // give the button an event lister and styles so the user
//       // knows its an active button:
//     // resultButton.addEventListener('click', renderResults);
//     // resultButton.className = 'clicks-allowed';
//     imageContainer.className = 'no-voting';
//   } else {
//     renderImages();
//     renderChart();
//     } else {
//       renderImages();
//     }
//   }
// }
    
//     function renderChart() {
//       let imageNames = [];
//       let imageLikes = [];
//       let imageViews = [];

//       for (let i = 0; i < state.allImagesArray.length; i++) {
//         imageNames.push(state.allImagesArray[i].name);
//         imageLikes.push(state.allImagesArray[i].clicks);
//         imageViews.push(state.allImagesArray[i].views);

//       }

//       const data = {
//         labels: imageNames,
//         datasets: [{
//           label: 'Likes',
//           data: imageLikes,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)'
//           ],
//           borderColor: [
//             'rgb(255, 99, 132)'
//           ],
//           borderWidth: 1
//         },
//         {
//           label: 'Views',
//           data: imageViews,
//           backgroundColor: [
//             'rgba(175, 43, 72, 0.6)'
//           ],
//           borderColor: [
//             'rgb(175, 43, 72)'
//           ],
//           borderWidth: 1
//         }]
//       };
    
//       const config = {
//         type: 'bar',
//         data: data,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         },
//       };
//       let canvasChart = document.getElementById('myChart');
//       const myChart = new Chart(canvasChart, config);
//     }
    


// function renderResults() {
//   let ul = document.querySelector('ul');
// @ -87,25 +234,25 @@ function renderResults() {


// // executable code
// let bag = new Image('bag', './assets/bag.jpg');
// let banana = new Image('banana', './assets/banana.jpg');
// let bathroom = new Image('bathroom', './assets/bathroom.jpg');
// let boots = new Image('boots', './assets/boots.jpg');
// let breakfast = new Image('breakfast', './assets/breakfast.jpg');
// let bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
// let chair = new Image('chair', './assets/chair.jpg');
// let cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
// let dogDuck = new Image('dogDuck', './assets/dog-duck.jpg');
// let dragon= new Image('dragon', './assets/dragon.jpg');
// let pen = new Image('pen', './assets/pen.jpg');
// let petSweep = new Image('petSweep', './assets/pet-sweep.jpg');
// let scissors = new Image('scissors', './assets/scissors.jpg');
// let shark = new Image('shark', './assets/shark.jpg');
// let sweep = new Image('sweep', './assets/sweep.png');
// let tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
// let unicorn = new Image('unicorn', './assets/unicorn.jpg');
// let waterCan = new Image('waterCan', './assets/water-can.jpg');
// let wineGlass = new Image('wineGlass', './assets/wine-glass.jpg');
// state.allImagesArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

// renderImages();

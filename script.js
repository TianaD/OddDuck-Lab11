//Lab12 Instructions
//As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
//Update your algorithm to randomly generate three unique product images from the images directory.
//Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.

//As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.

//Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
//Place the bar chart in the section located beneath your three product images
//The bar charts should only appear after all voting data has been collected.
//Run a Lighthouse Accessability report. Make necessary updates to your application based on the report to get your score above 80.

//Add a screenshot of your score to your README.md file.

//Stretch Goals
//Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart



//ideas for implementation:
//start by creating an array to store iterations
//use that array to ensure that next iteration contains no duplicate images from previous iteration

//https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js

//ex:
//function randomNum(max, used){
//  newNum = Math.floor(Math.random() * max + 1);

//  if($.inArray(newNum, used) === -1){
//   console.log(newNum + " is not in array");
//   return newNum;

//  }else if (used.length == max){ return;}
//  else{
//   return randomNum(max,used);
//  }
// }






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

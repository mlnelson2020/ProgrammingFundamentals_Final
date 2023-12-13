// provide initial guidance to user
alert("Welcome! Please enter your name in the next pop-up. \nYou will proceed through the game by entering text to choose your next step between one or two choices as prompted and pressing the enter key on your keyboard.")

//prompt user for name to use in story
var username = prompt("Please enter your name")
//variables stores input and output
var inputvalue = document.getElementById('input');
var outputvalue = document.getElementById('output');

// eventlistener gets story location upon pressing enter key after entering and validating text
inputvalue.addEventListener('keydown', function(key) {
    if (key.key === 'Enter') {
        var getArea = inputvalue.value;
        newLocation(getArea);
        inputvalue.value = "";     
    }
});

// initialize story to starting location
var currentArea = 'arrive';

// assign locations with text, options for advancement
var areas = {
    arrive: {
        description: `It's been a long week, ${username}. You crushed it, but you're mentally wrecked. You've just arrived at your favorite park to enjoy some time in nature and decompress. Which way do you want to go today? <br><br> <i>Type: forest or garden</i>`,
        options: {forest: 'forest', garden: 'garden'},
    },
    forest: {
        description: "The forest is so quiet today. This is exactly what you were looking for. All you can hear are birds chirping and rustling leaves as squirrels gather food to stash for winter. Keep walking, or inspect the fence next to the trail. <br><br>  <i>Type: continue or fence</i>",
        options: {forestCont: 'forestCont', fence: 'fence'},
    },
    garden: {
        description: "You wonder who maintains the gardens here. They're always immaculate every time you visit. Do you want to stop and sit on a bench, or go to the labyrinth? <br><br> <i>Type: stop or labyrinth</i>",
        options: {gardenBench: 'gardenBench', labyrinth: 'labyrinth'},
    },
    forestCont: {
        description: "There's a bench just up ahead that overlooks the valley. Sit for a while? <br><br> <i>Type: rest or walk</i>",
        options: {forestBench: 'forestBench', forestEnd: 'forestEnd'},
    },
    forestEnd: {
        description: "Oh wow! There is a doe and her two fawns feeding just off the trail ahead of you. You stop for a moment to quietly observe them before returning to your car so they can continue undisturbed. <br><br> <i>Type: car</i>",
        options: {car: 'car'},
    },
    car: {
        description: `I hope found a moment of tranquility here at the park today, ${username}. <br><br> <i>Please type restart to begin again or exit now.</i>`,
        options: {restart: 'restart'},
    },
    fence: {
        description: "You noticed part of the fence was broken and tried to adjust it so someone wouldn't get injured. However, you cut your hand on barbed wire in the process. You better get back to the car. Better luck next weekend. <br><br> <i>Type: restart to try again</i>",
        options: {restart: 'restart'},
    },
    forestBench: {
        description: "You take a deep breath and feel the tension melt away as you exhale. Every week won't be like this. You appreciate the grounding feeling nature provides. You stay a few more minutes and decide it's time to head back to the car. This place will always be here for you. <br><br> <i>Type: car</i>",
        options: {car: 'car'},
    },
    gardenBench: {
        description: "You inspect the flowers more closely, trying to see if you can identify any, but you are not a botanist. You close your eyes and take a few deep breaths to clear your head. Do you want to stay longer or go walk the labyrinth? <br><br> <i>Type: linger or labyrinth</i>",
        options: {gardenBenchCont: 'gardenBenchCont', labyrinth:'labyrinth'},
    },
    gardenBenchCont: {
        description: "How do you get so lucky every time you come here? It's never crowded so you can stay as long as you want. You take a few deep breaths and feel the stress start to melt away. It's time to head back now, but you feel ready for the next week. <br><br> <i>Type: car</i>",
        options: {car: 'car'},
    },
    labyrinth: {
        description: "As you wind your way around the circuit towards the middle and then back out, your mind wants to race through all the things you have yet to do. Try to focus on your breath, the scent of the flowers around you, or just on releasing thoughts and worries as they come. Take your time until you're ready to go. <br><br> <i>Type: car</i>",
        options: {car: 'car'},
    },
};

//switch function uses input to change location if option exists in the current location
function newLocation(loc) {
  var output = "";
  switch(loc) {
    case 'arrive':
    case 'Arrive':
      output = areas[currentArea].description;
    break;
    case 'forest':
    case 'Forest':
      if(areas[currentArea].options.forest) {
        currentArea = areas[currentArea].options.forest;
        output = areas[currentArea].description;
      } 
      break;
    case 'garden':
    case 'Garden':
      if(areas[currentArea].options.garden) {
        currentArea = areas[currentArea].options.garden;
        output = areas[currentArea].description;
      } 
      break;
    case 'fence':
    case 'Fence':
      if(areas[currentArea].options.fence) {
        currentArea = areas[currentArea].options.fence;
        output = areas[currentArea].description;
      }
      break;
    case 'continue':
    case 'Continue':
      if(areas[currentArea].options.forestCont) {
        currentArea = areas[currentArea].options.forestCont;
        output = areas[currentArea].description;
      } 
      break;
    case 'walk':
    case 'Walk':
      if(areas[currentArea].options.forestEnd) {
        currentArea = areas[currentArea].options.forestEnd;
        output = areas[currentArea].description;
      }
      break;
    case 'rest':
    case 'Rest':
      if(areas[currentArea].options.forestBench) {
        currentArea = areas[currentArea].options.forestBench;
        output = areas[currentArea].description;
      }
      break;
    case 'labyrinth':
    case 'Labyrinth':
      if(areas[currentArea].options.labyrinth) {
        currentArea = areas[currentArea].options.labyrinth;
        output = areas[currentArea].description;
      } 
      break;
    case 'stop':
    case 'Stop':
      if(areas[currentArea].options.gardenBench) {
        currentArea = areas[currentArea].options.gardenBench;
        output = areas[currentArea].description;
      }
      break;
    case 'linger':
    case 'Linger':
      if(areas[currentArea].options.gardenBenchCont) {
        currentArea = areas[currentArea].options.gardenBenchCont;
        output = areas[currentArea].description;
      } 
      break;
    case 'car':
    case 'Car':
      if(areas[currentArea].options.car) {
        currentArea = areas[currentArea].options.car;
        output = areas[currentArea].description;
      }
      break;
    case 'restart':
    case 'Restart':
      //reloads page to start again
      location.reload();
            
    default: output = "Try again: " + loc + " is not a valid option.";

}

// adds output to screen += adds instead of replacing
outputvalue.innerHTML += `<br>${output}<br>`;
}

// places initial story scene on screen before beginning 
outputvalue.innerHTML += `<div>${areas[currentArea].description}</div>`;
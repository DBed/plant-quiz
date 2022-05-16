// alert("js connected");
window.onload = function(){
    //SELECTOR WHICH APPLIES TO THE SET OF PLANT OPTIONS
   var plantButtons = document.querySelectorAll(".option").length;
   console.log(plantButtons); 
   var plantContainer = document.getElementById("plant-options");
   var quizBtn = document.getElementById("quiz-link");
   
   //OBJECTS FOR EACH PLANT
   const cactus = {
    name: "Cactus",
    info: "Cacti thrive in bright light and need only a monthly watering.  Keep out of reach of children and pets, owch!",
    light: "Bright, direct light is best.  Find a cozy windowsill or bookshelf where you see clearly outlined patches of light.",
    water: "Every 30 days, about 50ml for a small cactus.  They are from the desert after all!",
    image: "images/cactus.PNG"
   }
   const sPlant = {
    name: "Spider Plant",
    info: "Spider plants grow quickly and have industrious root systems.  Keep an eye out for little \"Spiderlings\" growing out from the plant.  These are babies that can be replanted!",
    light: "Bright indirect light is great for a spider plant.  Somewhere that gets plenty of light, but not harsh direct light.",
    water: "Every 7-10 days is fine, Spider Plants actually prefer to dry out a bit between waterings.",
    image: "images/sp.PNG"
   }
   const bFern = {
    name: "Boston Fern",
    info: "A fern that can grow to massive proportions, a great accent to any large room.",
    light: "Gentle indirect light is best, ferns are built to survive on the forest floor under shady trees so less light suits them just fine.",
    water: "Twice a week, depending on the humidity in the house.  They also benefit from frequent waterings",
    image: "images/BF2.PNG"
   }



   //VARIABLES FOR INDIVIDUAL PLANT PAGES
   var focusName = document.getElementById("focus-plant-name");
   var focusImg = document.getElementById("focus-plant-img");
   var plantInfo = document.getElementById("plant-info");
   var plantLight = document.getElementById("light-req");
   var plantWater = document.getElementById("waterMsg");
   var waterBtn = document.getElementById("water-btn");
   var waterRmdr = document.getElementById("water-reminder");
   var returnBtn = document.getElementById("return-btn");
   
   //VARIABLES FOR PLANT OPTION BUTTONS
   var cactusBtn = document.getElementById("cactus");
   var spBtn = document.getElementById("sPlant");
   var bfBtn = document.getElementById("bFern");
   var plantView = document.getElementById("plant-view");
   
   //VARIABLES FOR TIME INFORMATION
   var currentDate = new Date();
   var day = currentDate.getDate();
   var month = currentDate.getMonth()+1;
   //there were plans to utilize time info to say something like "water me again on  JAN 12th" but I'll have to come back to it
   //and add that feature later

    cactusBtn.onclick = function(){getPlant(cactus)};
    spBtn.onclick = function(){getPlant(sPlant)};
    bfBtn.onclick = function(){getPlant(bFern)};
    //FUNCTIONS FOR EACH BUTTON CLICK - I want to return to this and see if I can do something similar to the Weather API buttons.  Might need to make a plant care API first!

    // Need a new function 'getPlant' with the paramater of the plant name  
    // Continue with function to populate HTML content using information from 'getPLant' 
    
    
    //CONSOLIDATED PLANT VIEW FUNCTION
    function getPlant(plantName){
        // console.log("getPlant function entered");
        plantContainer.style.display = "none";
        plantView.style.display = "flex";
        focusName.innerHTML = plantName.name;
        focusImg.src= plantName.image;
        plantInfo.innerHTML = plantName.info;
        plantLight.innerHTML = plantName.light;
        plantWater.innerHTML = plantName.water;
        quizBtn.style.display = "none";
        returnBtn.onclick = function(){
            plantView.style.display = "none";
            plantContainer.style.display = "flex";
            quizBtn.style.display = "block";
        }
        return `Name: ${plantName.name} \nLight Requirements: ${plantName.light}`;
    }
}
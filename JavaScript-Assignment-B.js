/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/


var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}

/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house.areas.livingRoom.items.splice(2, 0, "dining table"); 

// (2) Add a stove to the kitchen.
house.areas.kitchen.items.splice(3, 0, "stove");

// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.splice(1, 1);                       //pop

//TRY IT OUT WITH PUSH!!

// (4) Change the color of the car to blue.
house.garage.car.color['red'] = 'blue';                         //remove specificity

// (5) Add a another car to the garage with a honk function.

 house.garage.carTwo={
    color: 'red',
    wheels: 4,
    honk: function(){ alert("Beep")}
};

// console.log(array);          


// (6) Make the new car honk.



// (7) If the house has a garden,  console.log the name of the flower.       //IF STATEMENT, SPECIFY INDEX FOR 0
if(house['garden'] === "true") {
    console.log('Red Rose');
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function   //

house.areas.kitchen.items[1].replace("broken chair", "new chair");

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

console.log(Object.keys(house.areas).length);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
let houseAreas = Object.values(house.areas);
let totalBeds = 0

for (let i = 0; i < houseAreas.length; i++) {
  for (let j = 0; j < houseAreas[i].items.length; j++) {
if (houseAreas[i].items[j] === 'bed') {totalBeds++} 
   
  }}
  
    console.log(totalBeds); 


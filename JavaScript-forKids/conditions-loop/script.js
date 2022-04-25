//CONDITIONS

// let nameMan = "Nick";
// console.log("Hello " + nameMan);
// if (nameMan.length > 7) {
//     console.log("Wow, you have relly long name");
// } else {
//     console.log("Your name isn't very long");
// }

// var lemonChicken = false;
// var beefWithBlackBean = true;
// var sweetAndSourPork = true;
// if (lemonChicken) {
//   console.log("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//   console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
//   console.log("OK, I'll have the pork.");
// } else {
//   console.log("Well, I guess I'll have rice then.");
// }

// var lemonChicken = false;
// var beefWithBlackBean = false;
// var sweetAndSourPork = false;
// if (lemonChicken) {
//   console.log("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//   console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
//   console.log("OK, I'll have the pork.");
// }

// const nameLog = "Oksana";
// if (nameLog === "Oksana") {
//     console.log("Hello me!");
// } else {
//     console.log("Hello strange!");
// }


//LOOPS

//while
//Counting Sheep with a while loop
// var sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
//    console.log("Zzzzzzzzzzz");

//For loop
// for(var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
// }
// console.log("Zzzzzzzzzzz");


// var timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) {
//     console.log("Hello");
// }

// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (var i = 0; i < animals.length; i++) {
//   console.log("This zoo contains a " + animals[i] + ".");
// }

// var name = "Nick";
// for (var i = 0; i < name.length; i++) {
//   console.log("My name contains the letter " + name[i] + ".");
// }

// for (var x = 2; x < 10000; x = x *2) {
//     console.log(x);
// }


//while
//Counting Sheep with a while loop
// var sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }

//те саме через while
// var x = 3;
// while (x < 100) {
//     console.log(x);
//     x = x * 3;
// }

//Programming Challenges
// #1: Awesome Animals
// var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// for( var i = 0; i < animals.length; i++) {
//     console.log(animals[i] = "Awesome " + animals[i]);
// };

// #2: Random String Generator
// var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
// var randomString = "";
// while (randomString.length < 6) {
//     var randomIndex = Math.floor(Math.random() * alphabet.length);
//     var randomChar = alphabet[randomIndex];
//     randomString += randomChar;
// }
// console.log(randomString);

// #3: h4ck3r sp34k
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
    if(input[i] === "a") {
        output += 4;
    } else if (input[i] === "i") {
        output += 1;
    } else if (input[i] === "e") {
        output += 3;
    } else {
        output += input[i];
    } 
}

alert(output);
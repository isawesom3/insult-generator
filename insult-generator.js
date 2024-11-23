// Function to pick a random word from an array
function pickRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random insult
function generateRandomInsult() {
    var randomParts = ["Face", "Nose", "Hair", "Shoes", "Clothes"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid", "Stinky", "Putrid", "Rotten"];
    var randomWords = ["Fly", "Stick", "Rat", "Marmot", "Monkey"];

    // Join all the random strings into a sentence
    var randomString = "Your " + pickRandomWord(randomParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

    return randomString;
}

// Call the function

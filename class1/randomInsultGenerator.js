var randomBodyparts = ["leg","face","feet"];
var randomAdjectives = ["dumb","boring","confused"];
var randomWords = ["fly", "piece of dirt", "scallywag"];

var randomBodypart = randomBodyparts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];

var randomInsult = "your" + randomBodypart + "is like a " + randomAdjective + "" + randomWord + "!!!";
console.log(randomInsult);
